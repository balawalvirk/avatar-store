import Config from './Config';
import axiosInstance from './api.config';

export const getUserProfile = async () => {
    try {
      const res = await axiosInstance.get(
        `${Config.API_END_POINT}/user/me`
      );
      return res;
    } catch (err) {
      throw err.response;
    }
  };

export const userSignIn = async userData => {
    const requestBody = {'user': JSON.stringify(userData)};
    try {
        const res = await axiosInstance.post(
          `${Config.API_END_POINT}/user/signIn`, requestBody
        );
        return res;
      } catch (err) {
        throw err.response;
      }
};

export const userSignUp = async userData => {
    const requestBody = {'user': JSON.stringify(userData)};
    console.log("############", requestBody);
    try {
        const res = await axiosInstance.post(
          `${Config.API_END_POINT}/user/save`, requestBody
        );
        return res;
      } catch (err) {
        throw err.response;
      }
};

export const fetchFrames = async () => {
    try {
        const res = await axiosInstance.get(
          `${Config.API_END_POINT}/fetch/frame-fetch?all=true`, {
            // params: {
            //     pageNumber: activePage,
            //     pageSize,
            //   },
          }
        );
        return res;
      } catch (err) {
        throw err.response;
      }
};

export const fetchFrameById = async (frameId) => {
    try {
        const res = await axiosInstance.get(
          `${Config.API_END_POINT}/fetchById/frame-fetchById/${frameId}`,
        );
        return res;
      } catch (err) {
        throw err.response;
      }
};

export const fetchAssetByGender = async (gender, type) => {
  try {
      const res = await axiosInstance.get(
        `${Config.API_END_POINT}/fetchByGender/asset-fetchByGender`, {
          params: {
            gender,
            type
          }
        }
      );
      return res;
    } catch (err) {
      throw err.response;
    }
};

export const fetchFramesByPrice = async (start, end) => {
  try {
      const res = await axiosInstance.get(
        `${Config.API_END_POINT}/fetchByPrice/frame-fetchByPrice`, {
          params: {
            start,
            end
          }
        }
      );
      return res;
    } catch (err) {
      throw err.response;
    }
};


export const stripeCheckoutMethod = async userData => {
  try {
      const res = await axiosInstance.post(
        `${Config.API_END_POINT}/checkout`, userData
      );
      return res;
    } catch (err) {
      throw err.response;
    }
};