import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
  }
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    organization: "Parents Education Foundation",
    location: "Waltham, MA",
    hasAiConfigured: !!process.env.GEMINI_API_KEY,
  });
});

// Contact Form submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message, childGrade, interestArea } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  // Simulating receipt and automated routing for Parents Education Foundation
  console.log(`[PEF Contact Inquiry] From: ${name} <${email}> | Phone: ${phone || 'N/A'} | Subject: ${subject}`);
  
  return res.json({
    success: true,
    message: "Thank you for reaching out to Parents Education Foundation. A representative from our Waltham, MA office will review your inquiry and follow up promptly at " + email + " or phone " + (phone || "email") + ".",
    referenceId: `PEF-${Date.now().toString().slice(-6)}`,
  });
});

// Newsletter / Resource alerts signup
app.post("/api/newsletter", (req, res) => {
  const { email, parentRole, district } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  return res.json({
    success: true,
    message: "You have been subscribed to Parents Education Foundation updates and Massachusetts education resource briefs.",
  });
});

// AI Parent Education Assistant Chatbot
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  const systemInstruction = `You are the Parent Education Assistant for Parents Education Foundation (PEF), a nonprofit organization based in Waltham, Massachusetts (Phone: 781-890-6001, Email: BCamenker@yahoo.com).
Your mission is to provide parents in Massachusetts and beyond with clear, practical, trustworthy, and encouraging knowledge, resources, tools, and support to stay informed and actively involved in their children's education.

Key knowledge to draw on:
- Massachusetts Education System: MA Department of Elementary and Secondary Education (DESE), MCAS, school committee meetings, district curriculum frameworks, Open Meeting Law rights for parents.
- Special Education & Accommodations: IEP (Individualized Education Program), 504 Plans, evaluation requests, parent rights under IDEA and MA Chapter 766, independent evaluations, annual reviews.
- School Communication & Engagement: Effective parent-teacher conference preparation, constructive email templates, talking to principals and guidance counselors, advocating with kindness and evidence.
- Student Support & Learning: Homework routines, reading support at home, executive function building, balancing screen time and extracurriculars.
- Organization Contact Info: Location: Waltham, MA; Phone: 781-890-6001; Email: BCamenker@yahoo.com.

Tone & Style:
- Warm, empathetic, professional, clear, and reassuring.
- Provide structured answers with concise bullet points, action items, or sample questions parents can ask educators.
- Always encourage active, constructive collaboration with schools and teachers.
- Remind parents they can also reach Parents Education Foundation directly at 781-890-6001 or BCamenker@yahoo.com for support.`;

  // If Gemini API is available, generate response
  if (ai || process.env.GEMINI_API_KEY) {
    try {
      const client = ai || new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: { 'User-Agent': 'aistudio-build' },
        },
      });

      const promptContents = [
        `System: ${systemInstruction}`,
        ...(history && Array.isArray(history)
          ? history.slice(-6).map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'User' : 'Assistant'}: ${h.text}`)
          : []),
        `User: ${message}`
      ].join("\n\n");

      const response = await client.models.generateContent({
        model: "gemini-3.7-flash",
        contents: promptContents,
      });

      const replyText = response.text || "I'm here to assist you with parent education resources, school policies, and student support. How can I help you further?";
      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      // Fall through to fallback engine
    }
  }

  // Knowledgeable fallback assistant
  const fallbackReplies: Record<string, string> = {
    iep: "For IEP (Individualized Education Program) support in Massachusetts: You have the right to request a formal evaluation in writing at any time. Under MA regulations (603 CMR 28.00), the school district must respond within 5 school days and complete the evaluation within 30 school days. Feel free to contact Parents Education Foundation at 781-890-6001 for additional resource guides!",
    "504": "A 504 Plan provides accommodations to ensure equal access to education under Section 504 of the Rehabilitation Act. If your child has a medical condition, ADHD, anxiety, or physical disability that impacts learning, you can request a 504 meeting with the school counselor.",
    conference: "Top tips for Parent-Teacher Conferences:\n1. Ask what your child's greatest strength and biggest growth opportunity are.\n2. Ask how you can reinforce classroom lessons at home.\n3. Share insights about your child's learning habits and interests.\n4. Follow up with a friendly thank-you email.",
    rights: "As a parent in Massachusetts, your rights include: inspecting your child's educational records (FERPA), attending all team meetings, receiving translation/interpretation if needed, observing classrooms per district policy, and participating in School Committee public hearings.",
    contact: "You can reach Parents Education Foundation directly:\n• Phone: 781-890-6001\n• Email: BCamenker@yahoo.com\n• Location: Waltham, MA\nWe are here to support parents throughout Massachusetts and beyond!",
  };

  const lower = message.toLowerCase();
  let selectedFallback = "Parents Education Foundation is dedicated to helping parents stay informed, engaged, and empowered. Whether you are navigating school meetings, reviewing curriculum, or supporting your child's daily learning, we provide tools and guidance. You can also reach our team directly at 781-890-6001 or BCamenker@yahoo.com in Waltham, MA.";

  for (const [key, resp] of Object.entries(fallbackReplies)) {
    if (lower.includes(key)) {
      selectedFallback = resp;
      break;
    }
  }

  return res.json({ reply: selectedFallback });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Parents Education Foundation server running on http://localhost:${PORT}`);
  });
}

startServer();
