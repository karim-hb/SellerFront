const api = process.env.REACT_APP_API_URL;
export const API = {
  auth: {
    create_user: api + "/api/user/create/",
    genrate_token: api + "/auth/jwt/create/",
  },
  user: {
    user_information: api + "/api/user/me/",
    getAll: api + "/admin/users/",
  },
  attachment: {
    image: api + "account/image_attachment/",
  },
  order: {
    getAll: api + "/admin/orders/",
  },
  foods: {
    getAll: api + "/admin/foods/",
    image: (id: string) => api + `/admin/foods/${id}/image/`,
    single:(id: string) => api + `/admin/foods/${id}/`,
  },
  collection: {
    getAll: api + "/admin/collection/",
    image: (id: string) => api + `/admin/collection/${id}/image/`,
    single:(id: string) => api + `/admin/collection/${id}/`,
  },
};
