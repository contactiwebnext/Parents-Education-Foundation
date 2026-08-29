export type PageTab = 'home' | 'about' | 'resources' | 'get-involved' | 'contact';

export type GradeLevel = 'all' | 'elementary' | 'middle' | 'high';

export type ResourceCategory = 
  | 'understanding-education'
  | 'school-communication'
  | 'educational-rights'
  | 'navigating-policies'
  | 'supporting-learning'
  | 'massachusetts-resources';

export interface ResourceArticle {
  id: string;
  title: string;
  category: ResourceCategory;
  categoryName: string;
  summary: string;
  gradeLevel: GradeLevel;
  readTime: string;
  isFeatured?: boolean;
  publishedDate?: string;
  content: {
    intro: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string[];
      actionTips?: string[];
    }[];
    practicalChecklist?: string[];
    relatedQuestions?: string[];
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  childGrade: string;
  subject: string;
  inquiryType: string;
  message: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface InteractiveChecklist {
  id: string;
  title: string;
  description: string;
  category: string;
  items: {
    id: string;
    text: string;
    detail: string;
    completed: boolean;
  }[];
}
