/**
 * SS Community Assistant — Type Definitions
 * Clean, extensible types to support both local keyword matching and future AI integration.
 */

export type MessageRole = 'user' | 'assistant';

export interface ActionButton {
  /** Display label on the button */
  label: string;
  /** Internal React Router path OR external URL */
  route: string;
  /** If true, opens in a new tab */
  external?: boolean;
  /** Optional lucide icon name for display */
  icon?: string;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  actions?: ActionButton[];
  timestamp: Date;
}

export interface ChatResponse {
  text: string;
  actions?: ActionButton[];
}

export type IntentKey =
  | 'greeting'
  | 'about_ss'
  | 'join'
  | 'internship'
  | 'job'
  | 'campus_ambassador'
  | 'volunteer'
  | 'talent'
  | 'leadership'
  | 'events'
  | 'online_sessions'
  | 'workshops'
  | 'services'
  | 'band'
  | 'event_management'
  | 'it_solutions'
  | 'guidance'
  | 'team'
  | 'founder'
  | 'contact'
  | 'placements'
  | 'opportunities'
  | 'whatsapp_community'
  | 'whatsapp_group'
  | 'whatsapp_ambiguous'
  | 'specific_opportunity'
  | 'unknown';

export interface Intent {
  key: IntentKey;
  keywords: string[];
  /** Higher weight = matched first when scores are close */
  weight?: number;
}
