
export interface SubModule {
  id: string;
  title: string;
  description: string;
  aiContext: string; // Context for AI Tutor, visual content is now in components
  iconName: string;
  suggestedQuestions?: string[]; // Questions to spark student curiosity
}

export interface ModuleCategory {
  id: string;
  title: string;
  description: string;
  subModules: SubModule[];
  isComingSoon?: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  MODULE_DETAIL = 'MODULE_DETAIL',
  AI_CHAT = 'AI_CHAT',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
