
import React from 'react';
import { IntroductionContent } from './contents/Introduction';
import { PrinciplesContent } from './contents/Principles';
import { ApplicationsContent } from './contents/Applications';
import { GlobalIssuesContent } from './contents/GlobalIssues';

// Define a type for the content component props
type ContentComponentProps = {
  subModuleId: string;
};

// Registry object mapping category IDs to their content components
const MODULE_REGISTRY: Record<string, React.FC<ContentComponentProps>> = {
  'intro': IntroductionContent,
  'prinsip': PrinciplesContent,
  'aplikasi': ApplicationsContent,
  'nano_global': GlobalIssuesContent,
};

export const getModuleComponent = (categoryId: string): React.FC<ContentComponentProps> | null => {
  return MODULE_REGISTRY[categoryId] || null;
};
