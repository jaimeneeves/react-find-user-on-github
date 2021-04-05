import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API });

axiosInstance.interceptors.request.use(
  (config) => {
    const customConfig = config;

    customConfig.headers.Authorization = `token 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`;

    if (!config.headers['Content-Type']) {
      customConfig.headers['Content-Type'] = 'application/json';
    }

    return customConfig;
  },
  error => Promise.reject(error),
);

export default axiosInstance;
