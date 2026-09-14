export const fetchImages = async () => {
  try {
    const response = await fetch('/api/photos');
    if (!response.ok) {
      console.error('Failed to fetch images, status:', response.status);
      return [];
    }
    const data = await response.json();
    return Array.isArray(data?.images) ? data.images : [];
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
};