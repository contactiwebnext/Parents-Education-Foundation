import { ResourceArticle, InteractiveChecklist } from '../types';

export const RESOURCE_CATEGORIES = [
  {
    id: 'understanding-education' as const,
    name: "Understanding Your Child's Education",
    description: "Guidance on curriculum frameworks, developmental milestones, assessment standards, and academic expectations.",
    iconName: 'BookOpen',
  },
  {
    id: 'school-communication' as const,
    name: 'School Communication & Parent Engagement',
    description: 'Constructive strategies for parent-teacher conferences, teacher collaboration, and district meetings.',
    iconName: 'MessageSquare',
  },
  {
    id: 'educational-rights' as const,
    name: 'Educational Rights & Responsibilities',
    description: 'Essential information on IEPs, 504 accommodations, FERPA student records, and parental consent.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'navigating-policies' as const,
    name: 'Navigating School Policies',
    description: 'Understanding student handbooks, attendance protocols, graduation requirements, and grievance procedures.',
    iconName: 'FileText',
  },
  {
    id: 'supporting-learning' as const,
    name: 'Supporting Student Learning',
    description: 'Practical routines for homework, executive functioning, study habits, and reading at home.',
    iconName: 'Sparkles',
  },
  {
    id: 'massachusetts-resources' as const,
    name: 'Massachusetts Education Resources',
    description: 'State-specific standards from the Department of Elementary and Secondary Education (DESE) and local guidance.',
    iconName: 'Compass',
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'parent-teacher-conference-guide',
    title: 'The Essential Guide to Effective Parent-Teacher Conferences',
    category: 'school-communication',
    categoryName: 'School Communication & Parent Engagement',
    summary: 'A step-by-step framework to maximize your 15-minute conference, ask the right questions, and establish a collaborative partnership with your child’s teachers.',
    gradeLevel: 'all',
    readTime: '6 min read',
    isFeatured: true,
    publishedDate: 'Fall / Spring Semesters',
    content: {
      intro: 'Parent-teacher conferences are one of the most direct opportunities to understand your student’s daily academic progress and social well-being. Going into these meetings prepared ensures you walk away with actionable insights rather than general pleasantries.',
      keyTakeaways: [
        'Frame the conversation around a shared partnership focused on your child’s strengths and growth areas.',
        'Ask open-ended questions about classroom engagement, peer collaboration, and independent problem-solving.',
        'Request specific examples of student work to understand grading criteria and expectations.',
        'Create a concrete 2-point follow-up plan before leaving the room.',
      ],
      sections: [
        {
          heading: '1. Before the Conference: Gathering Context',
          body: [
            'Talk with your child beforehand. Ask what subjects they enjoy most, what feels challenging, and if there is anything they would like you to bring up with the teacher.',
            'Review recent homework assignments, quiz feedback, and school portal grade reports to pinpoint specific topics you wish to discuss.',
          ],
          actionTips: [
            'Write down 3 prioritized questions on an index card or phone note.',
            'Note any recent life changes or routines that might affect classroom focus.',
          ],
        },
        {
          heading: '2. During the Meeting: Asking High-Value Questions',
          body: [
            'Time is usually limited to 10–20 minutes. Begin by expressing appreciation for the teacher’s work, then transition to constructive inquiries.',
            'Effective questions include: "What does my child do when they encounter difficult material?", "How do they interact during group discussions?", and "What is one specific skill we can practice at home to reinforce your classroom lessons?"',
          ],
          actionTips: [
            'Listen actively before responding to feedback about behavior or learning pace.',
            'Ask for clarification on any educational jargon, acronyms, or rubrics you do not recognize.',
          ],
        },
        {
          heading: '3. After the Conference: Meaningful Follow-Through',
          body: [
            'Share the positive feedback with your child right away. Celebrate their effort and discuss any targeted goals constructively.',
            'Send a brief 2-sentence email thanking the teacher and confirming the agreed-upon action items.',
          ],
        },
      ],
      practicalChecklist: [
        'Child consulted about classroom experiences and questions',
        'Recent assignments and report cards reviewed',
        'Top 3 questions written down',
        'Action steps agreed upon with teacher',
        'Follow-up summary email sent within 48 hours',
      ],
      relatedQuestions: [
        'How often should I email a teacher if my child struggles with homework?',
        'What should I do if my child feels misunderstood in class?',
      ],
    },
  },
  {
    id: 'massachusetts-dese-curriculum-overview',
    title: 'Understanding Massachusetts Curriculum Frameworks & DESE Standards',
    category: 'massachusetts-resources',
    categoryName: 'Massachusetts Education Resources',
    summary: 'An accessible overview of how the Massachusetts Department of Elementary and Secondary Education (DESE) sets learning standards across English, Math, Science, and Social Studies.',
    gradeLevel: 'all',
    readTime: '8 min read',
    isFeatured: true,
    publishedDate: 'Massachusetts Guidance',
    content: {
      intro: 'Massachusetts is widely recognized for having rigorous public education standards. Understanding how the Massachusetts Department of Elementary and Secondary Education (DESE) outlines curriculum frameworks helps parents advocate for their children and monitor grade-level benchmarks.',
      keyTakeaways: [
        'Curriculum Frameworks outline what students should know and be able to do at each grade level.',
        'Local school committees select the specific textbooks and teaching materials that align with state standards.',
        'Standardized assessments like MCAS measure district-wide and individual student mastery of these frameworks.',
      ],
      sections: [
        {
          heading: 'State Frameworks vs. Local District Decisions',
          body: [
            'In Massachusetts, the state establishes the Curriculum Frameworks (the learning standards), while local school districts (led by the Superintendent and School Committee) determine the day-to-day instructional methods, textbooks, and daily scheduling.',
            'Parents have the right to review district curriculum materials and attend open School Committee meetings in their municipality.',
          ],
        },
        {
          heading: 'Key Focus Areas by Grade Span',
          body: [
            'Elementary (K-5): Foundational literacy, phonics, number sense, inquiry-based science, and civic community awareness.',
            'Middle School (6-8): Critical analysis of texts, pre-algebra and algebraic thinking, laboratory science investigations, and world geography/civics.',
            'High School (9-12): MassCore recommended program of studies (4 years English, 4 years Math, 3 years Lab Science, 3 years History/Social Sciences, 2 years Foreign Language, Arts, and Physical Education).',
          ],
        },
      ],
      practicalChecklist: [
        'Locate your district’s curriculum pacing guide on the school website',
        'Review grade-level standards at the start of each school term',
        'Check school committee agendas for upcoming curriculum discussions',
      ],
    },
  },
  {
    id: 'iep-504-navigating-accommodations',
    title: 'Navigating IEPs and 504 Plans: A Parent’s Roadmap to Support Services',
    category: 'educational-rights',
    categoryName: 'Educational Rights & Responsibilities',
    summary: 'Demystifying the evaluation process, team meetings, accommodations, and parental consent under federal and Massachusetts special education regulations.',
    gradeLevel: 'all',
    readTime: '10 min read',
    isFeatured: true,
    publishedDate: 'Special Education Primer',
    content: {
      intro: 'When a child requires additional support, accommodations, or specialized instruction, navigating the special education system can feel overwhelming. Knowing your legal rights and timeline requirements under IDEA and Massachusetts Chapter 766 is key to securing appropriate services.',
      keyTakeaways: [
        'An IEP provides individualized specialized instruction; a 504 Plan provides accommodations to ensure equal educational access.',
        'Parents are equal members of the evaluation Team and hold final consent authority on the proposed plan.',
        'In Massachusetts, schools have 5 school days to respond to a written evaluation request and 30 school days to complete assessments.',
      ],
      sections: [
        {
          heading: '1. Requesting an Initial Evaluation in Writing',
          body: [
            'Always submit requests for an educational evaluation in writing (dated email or letter) to the Special Education Director or Principal.',
            'Clearly describe the specific areas of concern—such as reading decoding, executive functioning, math retention, sensory processing, or emotional regulation.',
          ],
          actionTips: [
            'Keep a dedicated binder or digital folder of all correspondence, work samples, and medical/evaluation reports.',
          ],
        },
        {
          heading: '2. The Team Meeting and Determining Eligibility',
          body: [
            'You are entitled to receive evaluation reports at least 2 days before the Team meeting in Massachusetts.',
            'The Team must determine if the student has a documented disability and whether that disability prevents the student from making effective progress in general education.',
          ],
        },
        {
          heading: '3. Understanding Your Rights as a Decision-Maker',
          body: [
            'You can accept an IEP in full, reject it in full, or accept parts while rejecting specific provisions in dispute.',
            'You have the right to request an Independent Educational Evaluation (IEE) if you disagree with the district’s assessments.',
          ],
        },
      ],
      practicalChecklist: [
        'Submit written request for evaluation with dates and specific concerns',
        'Request evaluation reports 2 days prior to Team meeting',
        'Draft a Parent Concerns statement to be included verbatim in the IEP',
        'Review accommodations list (e.g. extra time, preferred seating, graphic organizers)',
        'Sign and date the response form within 30 calendar days',
      ],
    },
  },
  {
    id: 'building-executive-functioning-routines',
    title: 'Building Executive Functioning & Homework Habits at Home',
    category: 'supporting-learning',
    categoryName: 'Supporting Student Learning',
    summary: 'Practical, low-stress strategies to help elementary, middle, and high school students manage time, organize assignments, and build autonomous study routines.',
    gradeLevel: 'all',
    readTime: '7 min read',
    isFeatured: false,
    publishedDate: 'Study Habits',
    content: {
      intro: 'Executive function skills—including working memory, flexible thinking, and self-control—are the building blocks of academic success. Parents can scaffold these habits through consistent household structures and visual routines.',
      keyTakeaways: [
        'Consistent physical environments and designated study zones minimize cognitive overload.',
        'Visual checklists and time-blocking techniques reduce procrastination and arguments.',
        'Focus on praising effort, problem-solving strategies, and self-reflection rather than solely grades.',
      ],
      sections: [
        {
          heading: 'Creating an Optimal Study Environment',
          body: [
            'Establish a dedicated, clutter-free workspace stocked with necessary materials (pencils, highlighters, notebook, calculator).',
            'Keep smartphones and non-academic screens in a separate charging station during active homework intervals.',
          ],
        },
        {
          heading: 'The "Launch Pad" Backpack & Morning Routine',
          body: [
            'Pack backpacks the night before and place them by the front door along with signed forms and completed homework.',
            'Use color-coded folders for each academic subject (e.g., Red for Math, Blue for English) to prevent lost worksheets.',
          ],
        },
      ],
      practicalChecklist: [
        'Dedicated study area free from digital distractions',
        'Homework planned in 25-minute focus intervals (Pomodoro technique)',
        'Night-before backpack check routine established',
        'Digital portal checked 1–2 times weekly with student',
      ],
    },
  },
  {
    id: 'school-policies-student-handbooks',
    title: 'Deciphering the Student Handbook: Attendance, Grading, & School Policies',
    category: 'navigating-policies',
    categoryName: 'Navigating School Policies',
    summary: 'A parent’s guide to understanding district policies, attendance requirements, academic integrity rules, and constructive grievance protocols.',
    gradeLevel: 'all',
    readTime: '6 min read',
    isFeatured: false,
    publishedDate: 'Policy Guide',
    content: {
      intro: 'Every school district publishes an annual Student & Family Handbook. While often lengthy, it represents the binding social and legal compact between your family and the school district.',
      keyTakeaways: [
        'Know the difference between excused and unexcused absences according to district thresholds.',
        'Understand grading scales, late-work policies, and weighted GPA calculations.',
        'Familiarize yourself with the chain of communication: Teacher → Department Head / Counselor → Assistant Principal → Principal → Superintendent.',
      ],
      sections: [
        {
          heading: 'Attendance & Chronic Absenteeism Guidelines',
          body: [
            'Massachusetts law considers a student chronically absent if they miss 10% or more of school days (approximately 18 days in a 180-day school year).',
            'Always notify the school office promptly in writing or through the attendance portal when your child is sick or has a medical appointment.',
          ],
        },
        {
          heading: 'Resolving Classroom Concerns Constructively',
          body: [
            'When an issue arises regarding grading or discipline, always initiate contact with the classroom teacher first before escalating.',
            'Maintain a respectful, fact-based tone focused on collaborative solutions that benefit the student’s learning.',
          ],
        },
      ],
      practicalChecklist: [
        'Read key sections of your school’s annual handbook',
        'Save attendance office phone number and email',
        'Review grading timeline and make-up work expectations',
      ],
    },
  },
  {
    id: 'understanding-ferpa-student-privacy',
    title: 'Student Privacy & Educational Records: What Every Parent Should Know',
    category: 'educational-rights',
    categoryName: 'Educational Rights & Responsibilities',
    summary: 'Understand your rights under FERPA (Family Educational Rights and Privacy Act) and state laws regarding student records, directory information, and educational access.',
    gradeLevel: 'all',
    readTime: '5 min read',
    isFeatured: false,
    publishedDate: 'Privacy & Rights',
    content: {
      intro: 'Under federal and state law, parents have fundamental rights regarding the privacy, inspection, and amendment of their children’s educational records until the student turns 18.',
      keyTakeaways: [
        'Parents have the right to inspect and review all official educational records maintained by the school.',
        'Schools must have written permission from parents before releasing personally identifiable information from student records, with limited statutory exceptions.',
        'Parents can request that incorrect or misleading information in records be formally amended.',
      ],
      sections: [
        {
          heading: 'What Constitutes an "Educational Record"?',
          body: [
            'Educational records include cumulative academic transcripts, standardized test scores, attendance logs, disciplinary files, health records, and special education documentation.',
            'Schools generally must comply with a parent request to inspect records within 45 days (often sooner under Massachusetts state regulations).',
          ],
        },
      ],
      practicalChecklist: [
        'Know how to request an official copy of cumulative files',
        'Review annual FERPA privacy opt-out forms sent in September',
        'Keep independent copies of all IEPs, 504s, and report cards',
      ],
    },
  },
  {
    id: 'middle-to-high-school-transition',
    title: 'Smooth Transitions: Navigating the Leap from Middle School to High School',
    category: 'understanding-education',
    categoryName: "Understanding Your Child's Education",
    summary: 'Helping your student navigate increased academic expectations, course selection, extracurricular balance, and self-advocacy in high school.',
    gradeLevel: 'middle',
    readTime: '7 min read',
    isFeatured: false,
    publishedDate: 'Transitions',
    content: {
      intro: 'The transition from 8th grade to 9th grade is a pivotal milestone. Academic rigor increases, grades begin to count toward official high school transcripts, and social environments expand.',
      keyTakeaways: [
        'Encourage students to take ownership of communicating directly with their teachers.',
        'Balance honors or advanced coursework with adequate sleep, physical wellness, and mental health.',
        'Establish a regular weekly routine for reviewing graduation course prerequisites.',
      ],
      sections: [
        {
          heading: 'Course Selection and Academic Pathways',
          body: [
            'Understand how high school credits work and how Massachusetts MassCore recommendations shape college and career readiness.',
            'Help your student choose challenging courses in their areas of genuine interest while avoiding over-scheduling.',
          ],
        },
      ],
      practicalChecklist: [
        'Attend 8th-to-9th grade high school orientation night',
        'Review freshman year course selection sheets together',
        'Identify school counselor and support staff contacts',
      ],
    },
  },
  {
    id: 'early-literacy-reading-at-home',
    title: 'Foundational Literacy: Encouraging Confident Readers in Elementary Grades',
    category: 'supporting-learning',
    categoryName: 'Supporting Student Learning',
    summary: 'Evidence-based reading routines, phonemic awareness games, and joyful reading strategies for elementary school families.',
    gradeLevel: 'elementary',
    readTime: '6 min read',
    isFeatured: false,
    publishedDate: 'Early Learning',
    content: {
      intro: 'Early literacy is the gateway to all future learning. Daily shared reading, conversations about story themes, and phonics awareness build rich vocabulary and lifelong confidence.',
      keyTakeaways: [
        'Reading aloud 15–20 minutes daily significantly expands vocabulary and reading comprehension.',
        'Engage in interactive discussions by asking "Why do you think the character made that choice?"',
        'Visit your local public library regularly to let children choose books that ignite their personal curiosity.',
      ],
      sections: [
        {
          heading: 'Practical Everyday Reading Habits',
          body: [
            'Keep high-interest books within easy reach in the living room, car, and bedside table.',
            'Model reading yourself—let your children see you reading newspapers, books, or magazines.',
          ],
        },
      ],
      practicalChecklist: [
        'Daily 20-minute reading time scheduled',
        'Public library card active and utilized bi-weekly',
        'Ask 2 open-ended questions during shared storytime',
      ],
    },
  },
];

export const INTERACTIVE_CHECKLISTS: InteractiveChecklist[] = [
  {
    id: 'conference-prep-tool',
    title: 'Parent-Teacher Conference Readiness Checklist',
    description: 'Use this interactive checklist to prepare your questions, review your student’s goals, and ensure a productive discussion with educators.',
    category: 'School Communication',
    items: [
      {
        id: 'c1',
        text: 'Consult with your child before the meeting',
        detail: 'Ask them what subjects feel easy, what feels tricky, and if there is a question they want answered.',
        completed: false,
      },
      {
        id: 'c2',
        text: 'Review recent portal grades and work samples',
        detail: 'Check recent assignment feedback, test scores, and attendance reports for specific patterns.',
        completed: false,
      },
      {
        id: 'c3',
        text: 'Write down 3 specific questions for the teacher',
        detail: 'Focus on engagement, classroom participation, and skills to practice together at home.',
        completed: false,
      },
      {
        id: 'c4',
        text: 'Clarify classroom expectations and rubrics',
        detail: 'Ask what benchmark skills are expected by the end of the current academic quarter.',
        completed: false,
      },
      {
        id: 'c5',
        text: 'Agree on 1 or 2 concrete action steps',
        detail: 'Establish clear next steps for both home reinforcement and classroom check-ins.',
        completed: false,
      },
      {
        id: 'c6',
        text: 'Send a brief thank-you and confirmation email',
        detail: 'Reiterate the shared plan within 48 hours to ensure everyone is aligned.',
        completed: false,
      },
    ],
  },
  {
    id: 'iep-meeting-tool',
    title: 'Special Education / IEP Meeting Preparation Checklist',
    description: 'A structured roadmap to help parents organize documentation, prepare concerns, and actively participate in team meetings.',
    category: 'Educational Rights',
    items: [
      {
        id: 'i1',
        text: 'Obtain evaluation reports in advance',
        detail: 'Ensure you receive all school assessment reports at least 2 school days prior to the meeting.',
        completed: false,
      },
      {
        id: 'i2',
        text: 'Draft Parent Concerns statement',
        detail: 'Write a 1-page summary of your child’s strengths, challenges, and goals to be included in the IEP.',
        completed: false,
      },
      {
        id: 'i3',
        text: 'Review proposed accommodations and modifications',
        detail: 'Check whether requested accommodations (e.g. extended time, visual schedules) are specifically written.',
        completed: false,
      },
      {
        id: 'i4',
        text: 'Review measurable annual goals and progress benchmarks',
        detail: 'Confirm that each goal has clear, quantifiable criteria for measuring quarterly progress.',
        completed: false,
      },
      {
        id: 'i5',
        text: 'Clarify Service Delivery Grid (Grid A, B, C)',
        detail: 'Check exact minutes, provider credentials, and whether services occur in general education or separate settings.',
        completed: false,
      },
    ],
  },
  {
    id: 'homework-routine-tool',
    title: 'Home Learning & Study Habit Builder',
    description: 'Step-by-step checklist to establish a low-stress, highly effective study environment and homework schedule.',
    category: 'Supporting Student Learning',
    items: [
      {
        id: 'h1',
        text: 'Establish a designated quiet study space',
        detail: 'Ensure good lighting, comfortable chair, and all needed supplies within arm’s reach.',
        completed: false,
      },
      {
        id: 'h2',
        text: 'Implement a digital distraction curfew',
        detail: 'Place phones, tablets, and gaming consoles in a separate charging station during study hours.',
        completed: false,
      },
      {
        id: 'h3',
        text: 'Break homework into 20-30 minute focused intervals',
        detail: 'Use a simple timer with 5-minute movement or water breaks between tasks.',
        completed: false,
      },
      {
        id: 'h4',
        text: 'Conduct the evening backpack check routine',
        detail: 'Pack finished assignments and necessary supplies the night before by the front door.',
        completed: false,
      },
    ],
  },
];
