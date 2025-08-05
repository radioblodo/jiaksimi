const KEY = import.meta.env.VITE_YT_KEY;
const BASE = "https://www.googleapis.com/youtube/v3/search";

export interface YTVideo {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  url: string;
}

export async function searchYouTube(
  ingredients: string[],
  limit: number
): Promise<YTVideo[]> {
  const q = ingredients.join(" ") + " recipe"; // e.g. "potato carrot recipe"
  console.log("[YT search]", ingredients.join(" "), "→", q);
  const params = new URLSearchParams({
    key: KEY,
    part: "snippet",
    type: "video",
    maxResults: String(limit),
    q,
    relevanceLanguage: "en", // adjust if you want Chinese results: 'zh'
    safeSearch: "moderate",
  });
  const res = await fetch(`${BASE}?${params}`);
  if (!res.ok) throw new Error(`YouTube ${res.status}`);
  const data = await res.json();
  return (data.items || []).map((it: any) => ({
    id: it.id.videoId,
    title: it.snippet.title,
    channel: it.snippet.channelTitle,
    thumbnail: it.snippet.thumbnails.medium.url,
    url: `https://www.youtube.com/watch?v=${it.id.videoId}`,
  }));
}
