export const fetchImages = async () => {
  try {
    const response = await fetch('/api/photos');
    const data = await response.json();
    return data.images;
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
};