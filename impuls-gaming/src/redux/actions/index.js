export const GIFT_CARD_DATA = " GIFT_CARD_DATA";
export const USER_DATA = " USER_DATA";
export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const GET_ME = "GET_ME";
export const GET_ME_LOADING = "GET_ME_LOADING";
export const GET_ME_ERROR = "GET_ME_ERROR";

export const GET_LOGIN_ACCESSTOKEN = "GET_LOGIN_ACCESSTOKEN";
export const GET_LOGIN_ACCESSTOKEN_LOADING = "GET_LOGIN_ACCESSTOKEN_LOADING";
export const GET_LOGIN_ACCESSTOKEN_ERROR = "GET_LOGIN_ACCESSTOKEN_ERROR";

export const POST_TOURNAMENT = " POST_TOURNAMENT";
export const GET_USERS = "GET_USERS";
export const GET_TOURNAMENTS = "GET_TOURNAMENTS";
export const GET_TOURNAMENTS_LOADING = "GET_TOURNAMENTS_LOADING";
export const GET_TOURNAMENTS_ERROR = "GET_TOURNAMENTS_ERROR";
export const GET_USERS_LOADING = "GET_USERS_LOADING";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const USER_PREFERENCE_DATA = " USER_PREFERENCE_DATA";
export const NEW_TOURNAMENT_DATA = " NEW_TOURNAMENT_DATA";
export const USER_CHAT_DATA = " USER_CHAT_DATA";

export const GIFT_CARD_DATA_ERROR = " GIFT_CARD_DATA_ERROR";
export const GIFT_CARD_DATA_LOADING = " GIFT_CARD_DATA_LOADING";
export const LOG_IN_DATA = " LOG_IN_DATA";
export const LOG_IN_DATA_ERROR = " LOG_IN_DATA_ERROR";
export const LOG_IN_DATA_LOADING = " GIFT_CARD_DATA_LOADING";
export const USER_CHAT_DATA_ERROR = " USER_CHAT_DATA_ERROR";
export const USER_CHAT_DATA_LOADING = " USER_CHAT_DATA_LOADING";
export const USER_PREFERENCE_DATA_ERROR = " USER_PREFERENCE_DATA_ERROR";
export const USER_PREFERENCE_DATA_LOADING = " USER_PREFERENCE_DATA_LOADING";
export const USER_DATA_ERROR = " USER_DATA_ERROR";
export const USER_DATA_LOADING = " USER_DATA_LOADING";

// export const getUsers = () => {
//   return async (dispatch) => {
//     const options = {
//       method: "GET",
//     };
//     const URL = process.cwd.REACT_APP_BE_DEV_URL;
//     try {
//       const response = fetch(`http://localhost:3001/users`, options);
//       console.log("I AM THE CALLER");
//       if (response.ok) {
//         const users = await response.json();
//         dispatch({
//           type: GET_USERS,
//           payload: users,
//         });
//         setTimeout(() => {
//           dispatch({
//             type: GET_USERS_LOADING,
//             payload: false,
//           });
//         }, 100);
//       } else {
//         console.log("error");
//         dispatch({
//           type: GET_USERS_LOADING,
//           payload: false,
//         });

//         dispatch({
//           type: GET_USERS_ERROR,
//           payload: true,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: GET_USERS_LOADING,
//         payload: false,
//       });
//       dispatch({
//         type: GET_USERS_ERROR,
//         payload: true,
//       });
//     }
//   };
// };
export const registerUser = (userData) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      let response = await fetch(`${URL}/users/register`, options);
      if (response.ok) {
        const userData = await response.json();
        dispatch({
          type: REGISTER_USER,
          payload: userData,
        });
        setTimeout(() => {
          dispatch({
            type: REGISTER_USER_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: REGISTER_USER_LOADING,
          payload: false,
        });
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: REGISTER_USER_LOADING,
        payload: false,
      });

      dispatch({
        type: REGISTER_USER_ERROR,
        payload: true,
      });
    }
  };
};
export const createTournament = (data) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/tournaments`, options);
      if (response.ok) {
        const tournament = await response.json();
        getUsers(`${URL}/users?limit=10`);
        getTournaments();
        dispatch({
          type: POST_TOURNAMENT,
          payload: tournament,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editTournament = (data, tournamentId) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/tournaments/${tournamentId}`,
        options
      );
      if (response.ok) {
        // const tournament = await response.json();
        // getUsers(`${URL}/users?limit=10`);
        getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const signIn = (data) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/users/login`, options);
      if (response.ok) {
        const accessToken = await response.json();
        dispatch({
          type: GET_LOGIN_ACCESSTOKEN,
          payload: accessToken,
        });
        setTimeout(() => {
          dispatch({
            type: GET_LOGIN_ACCESSTOKEN_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_LOGIN_ACCESSTOKEN_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_LOGIN_ACCESSTOKEN_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_LOGIN_ACCESSTOKEN_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_LOGIN_ACCESSTOKEN_ERROR,
        payload: true,
      });
    }
  };
};
export const registerTournament = (data, tournamentId) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/tournaments/${tournamentId}/participants`,
        options
      );
      if (response.ok) {
        // const tournament = await response.json();
        // getUsers(`${URL}/users?limit=10`);
        getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteTournament = (id) => {
  return async () => {
    const options = {
      method: "DELETE",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/tournaments/${id}`, options);
      console.log(response.ok);
      if (response.ok || response === 204) {
        getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getTournaments = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      let response = await fetch(`${URL}/tournaments`, options);
      if (response.ok) {
        const tournaments = await response.json();
        dispatch({
          type: GET_TOURNAMENTS,
          payload: tournaments,
        });
        setTimeout(() => {
          dispatch({
            type: GET_TOURNAMENTS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_TOURNAMENTS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_TOURNAMENTS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_TOURNAMENTS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_TOURNAMENTS_ERROR,
        payload: true,
      });
    }
  };
};

export const getUsers = (accessToken) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };

    try {
      let response = await fetch(URL, options);
      if (response.ok) {
        const users = await response.json();
        dispatch({
          type: GET_USERS,
          payload: users,
        });
        setTimeout(() => {
          dispatch({
            type: GET_USERS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_USERS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_USERS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_USERS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_USERS_ERROR,
        payload: true,
      });
    }
  };
};
export const getMe = (accessToken) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${accessToken}`,
      },
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;

    try {
      let response = await fetch(`${URL}/users/me`, options);
      if (response.ok) {
        const me = await response.json();
        dispatch({
          type: GET_ME,
          payload: me,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ME_LOADING,
            payload: false,
          });
        }, 100);
        // window.location.href = "/user-page";
      } else {
        console.log("error");

        dispatch({
          type: GET_ME_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ME_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_ME_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ME_ERROR,
        payload: true,
      });
    }
  };
};
export const giftCardInf = (data) => {
  return {
    type: GIFT_CARD_DATA,
    payload: data,
  };
};
export const logInData = (data) => {
  return {
    type: LOG_IN_DATA,
    payload: data,
  };
};
export const userChat = (data) => {
  return {
    type: USER_CHAT_DATA,
    payload: data,
  };
};

export const userPreference = (data) => {
  return {
    type: USER_PREFERENCE_DATA,
    payload: data,
  };
};
export const userData = (data) => {
  return {
    type: USER_PREFERENCE_DATA,
    payload: data,
  };
};
