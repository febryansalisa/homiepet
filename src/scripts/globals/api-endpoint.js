import CONFIG from './config';

const API_ENDPOINT = {
  home: `${CONFIG.BASE_URL}`,
  DETAIL_PAGE: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
