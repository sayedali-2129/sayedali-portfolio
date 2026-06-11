import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  playstoreLink: string;
  appstoreLink: string;
  collaboratedWith: string;
  createdAt?: any;
  index: number;
  enabled: boolean;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  iconBlue?: string;
  iconWhite?: string;
  level?: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Service {
  title: string;
  icon: LucideIcon;
  desc: string;
}
