export async function getVideos() {
  const res = await fetch('http://localhost:8000/videos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
