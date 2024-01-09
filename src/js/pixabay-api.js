export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41724912-2d0c9129f5192b43ec8e3a746';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
