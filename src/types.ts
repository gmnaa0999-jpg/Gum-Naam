export interface Service {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  detailPoints: string[];
  color: 'blue' | 'violet' | 'cyan';
  iconName: string;
}

export interface CaseStudy {
  id: string;
  category: 'ecommerce' | 'saas' | 'local';
  clientName: string;
  logoText: string;
  metricValue: string;
  metricLabel: string;
  challenge: string;
  strategy: string;
  resultText: string;
  industry: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  initials: string;
}

export interface CalculatorInput {
  monthlyRevenue: number;
  marketingBudget: number;
  industry: 'ecommerce' | 'saas' | 'local' | 'professional';
  closeRate: number; // percentage
}

export interface CalculatorOutput {
  estimatedLeads: number;
  estimatedAcquisitions: number;
  estimatedNewRevenue: number;
  roiMultiplier: number;
  netProfitGrowth: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
  selectedServices: string[];
  monthlySpend: string;
  message: string;
}
