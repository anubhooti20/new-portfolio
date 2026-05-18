const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { cache: "no-store", ...init });
  if (!res.ok) throw new Error(`API error ${res.status} on ${path}`);
  return res.json() as Promise<T>;
}

export interface HeroStatOut {
  id: number;
  label: string;
  value_text?: string | null;
  value_big?: string | null;
  order: number;
}

export interface AboutParagraphOut {
  id: number;
  content: string;
  order: number;
}

export interface ExperienceOut {
  id: number;
  role: string;
  company: string;
  location?: string | null;
  type: string;
  dates: string;
  bullets: string[];
  pills?: string[] | null;
  order: number;
}

export interface SkillVisualOut {
  id: number;
  icon: string;
  name: string;
  label: string;
  order: number;
}

export interface SkillsResponse {
  groups: Record<string, string[]>;
  visuals: SkillVisualOut[];
}

export interface MarqueeItemOut {
  id: number;
  text: string;
  order: number;
}

export interface ProjectOut {
  id: number;
  name: string;
  badge: string;
  description: string;
  features: string[];
  tags: string[];
  order: number;
}
