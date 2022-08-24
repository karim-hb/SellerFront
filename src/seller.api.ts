const api = process.env.REACT_APP_API_URL;
export const API = {
  auth: {
    create_user: api + "/api/user/create/",
    genrate_token: api + "/api/user/token/",
  },
  user: {
    user_information: api + "/api/user/me/",
  },
  attachment: {
    image: api + "account/image_attachment/",
  },
};
