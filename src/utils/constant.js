import axios from "axios";

// export const LOGO_URL =
//   "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGO_URL =
  "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png";

export const AVATAR_URl =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
  // method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie', // Set your API base URL
  timeout: 3000, // Set a timeout for requests (optional)
  API_OPTIONS
});

// Add interceptors or other customizations if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request configuration before sending
    // For example, add an authorization header
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_TMDB_KEY}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data before resolving
    return response?.data;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "bengali", name: "Bengali" },
  { identifier: "spanish", name: "Spanish" },
];
