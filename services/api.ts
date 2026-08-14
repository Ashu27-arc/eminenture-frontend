import axios from "axios";

// ─── Axios instance ──────────────────────────────────────────────────────────
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── API Functions ────────────────────────────────────────────────────────────

/**
 * Fetch the current site content from the backend.
 * Returns null if the request fails.
 */
export async function getContent(): Promise<SiteContent | null> {
  try {
    const { data } = await apiClient.get<SiteContent>("/api/content");
    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

/**
 * Update the site content on the backend.
 * Returns the updated content on success, throws on failure.
 */
export async function updateContent(
  payload: Omit<SiteContent, "updatedAt">
): Promise<SiteContent> {
  const { data } = await apiClient.put<SiteContent>("/api/content", payload);
  return data;
}
