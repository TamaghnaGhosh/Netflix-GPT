import axios from "axios";

// export const LOGO_URL =
//   "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

// export const LOGO_URL =
//   "https://cdn.vox-cdn.com/thumbor/cCfh74clvUQ65ju4cYXeW5eCizo=/0x0:2040x1360/1400x788/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951361/STK072_VRG_Illo_N_Barclay_7_netflix.jpg";

export const LOGO_URL =
  "https://res.cloudinary.com/teepublic/image/private/s--p2tXZ6AJ--/c_crop,x_10,y_10/c_fit,w_934/c_crop,g_north_west,h_1038,w_1038,x_-52,y_-417/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-163,y_-528/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1668196958/production/designs/36443728_0.jpg";

// export const LOGO_URL =
//   "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png";

// export const LOGO_URL =
//   "https://cdn.dribbble.com/users/9378043/screenshots/16832559/media/10b207c918d604662e088308d16b366d.png";

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
