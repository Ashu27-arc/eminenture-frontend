import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://eminenture-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Stat {
  _id?: string;
  label: string;
  value: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  stats: Stat[];
  updatedAt?: string;
}

export async function getContent(): Promise<SiteContent | null> {
  try {
    const { data } = await apiClient.get<SiteContent>("/api/content");
    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

export async function updateContent(
  payload: Omit<SiteContent, "updatedAt">
): Promise<SiteContent> {
  const { data } = await apiClient.put<SiteContent>("/api/content", payload);
  return data;
}
