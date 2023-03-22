import axios from "axios";

export const GIFT_CARD_DATA = " GIFT_CARD_DATA";
export const USER_DATA = " USER_DATA";
export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const GET_ME = "GET_ME";
export const GET_ME_LOADING = "GET_ME_LOADING";
export const GET_ME_ERROR = "GET_ME_ERROR";

export const PUT_ME = "PUT_ME";
export const PUT_ME_LOADING = "PUT_ME_LOADING";
export const PUT_ME_ERROR = "PUT_ME_ERROR";

export const GET_RESERVATIONS_COMMENTS = "GET_RESERVATIONS_COMMENTS";
export const GET_RESERVATIONS_COMMENTS_LOADING =
  "GET_RESERVATIONS_COMMENTS_LOADING";
export const GET_RESERVATIONS_COMMENTS_ERROR =
  "GET_RESERVATIONS_COMMENTS_ERROR";

export const GET_RESERVATIONS = "GET_RESERVATIONS";
export const GET_RESERVATIONS_LOADING = "GET_RESERVATIONS_LOADING";
export const GET_RESERVATIONS_ERROR = "GET_RESERVATIONS_ERROR";

export const GET_TOURNAMENTS_STRUCTURES = "GET_TOURNAMENTS_STRUCTURES";
export const GET_TOURNAMENTS_STRUCTURES_LOADING =
  "GET_TOURNAMENTS_STRUCTURES_LOADING";
export const GET_TOURNAMENTS_STRUCTURES_ERROR =
  "GET_TOURNAMENTS_STRUCTURES_ERROR";

export const GET_ONE_TOURNAMENT_PARTICIPANT = "GET_ONE_TOURNAMENT_PARTICIPANT";
export const GET_ONE_TOURNAMENT_PARTICIPANT_LOADING =
  "GET_ONE_TOURNAMENT_PARTICIPANT_LOADING";
export const GET_ONE_TOURNAMENT_PARTICIPANT_ERROR =
  "GET_ONE_TOURNAMENT_PARTICIPANT_ERROR";

export const EDIT_ONE_TOURNAMENT_PARTICIPANT =
  "EDIT_ONE_TOURNAMENT_PARTICIPANT";
export const EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING =
  "EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING";
export const EDIT_ONE_TOURNAMENT_PARTICIPANT_ERROR =
  "EDIT_ONE_TOURNAMENT_PARTICIPANT_ERROR";

export const GET_TOURNAMENTS_FIXTURES = "GET_TOURNAMENTS_FIXTURES";
export const GET_TOURNAMENTS_FIXTURES_LOADING =
  "GET_TOURNAMENTS_FIXTURES_LOADING";
export const GET_TOURNAMENTS_FIXTURES_ERROR = "GET_TOURNAMENTS_FIXTURES_ERROR";

export const EMAIL_VERIFICATION = "EMAIL_VERIFICATION";
export const EMAIL_VERIFICATION_LOADING = "EMAIL_VERIFICATION_LOADING";
export const EMAIL_VERIFICATION_ERROR = "EMAIL_VERIFICATION_ERROR";

export const GET_LOGIN_ACCESSTOKEN = "GET_LOGIN_ACCESSTOKEN";
export const GET_LOGIN_ACCESSTOKEN_LOADING = "GET_LOGIN_ACCESSTOKEN_LOADING";
export const GET_LOGIN_ACCESSTOKEN_ERROR = "GET_LOGIN_ACCESSTOKEN_ERROR";

export const GET_PROJECT_IMAGES = "GET_PROJECT_IMAGES";
export const GET_PROJECT_IMAGES_LOADING = "GET_PROJECT_IMAGES_LOADING";
export const GET_PROJECT_IMAGES_ERROR = "GET_PROJECT_IMAGES_ERROR";

export const GET_ADMIN_LOGIN_ACCESSTOKEN = "GET_ADMIN_LOGIN_ACCESSTOKEN";
export const GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING =
  "GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING";
export const GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR =
  "GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR";

export const POST_TOURNAMENT = " POST_TOURNAMENT";
export const GET_USERS = "GET_USERS";

export const GET_TOURNAMENTS = "GET_TOURNAMENTS";
export const GET_TOURNAMENTS_LOADING = "GET_TOURNAMENTS_LOADING";
export const GET_TOURNAMENTS_ERROR = "GET_TOURNAMENTS_ERROR";

export const GET_TOURNAMENTS_RESULTS = "GET_TOURNAMENTS_RESULTS";
export const GET_TOURNAMENTS_RESULTS_LOADING =
  "GET_TOURNAMENTS_RESULTS_LOADING";
export const GET_TOURNAMENTS_RESULTS_ERROR = "GET_TOURNAMENTS_RESULTS_ERROR";

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
export const THEME_DATA_ERROR = " THEME_DATA_ERROR";
export const THEME_DATA = " THEME_DATA";
export const THEME_DATA_LOADING = " THEME_DATA_LOADING";
export const USER_DATA_ERROR = " USER_DATA_ERROR";
export const USER_DATA_LOADING = " USER_DATA_LOADING";

export const switcher = (theme) => {
  return {
    type: THEME_DATA,
    payload: theme,
  };
};
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
export const postTournamentStructure = (data, tournamentId) => {
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
        `${URL}/tournaments/${tournamentId}/structures`,
        options
      );
      if (response.ok) {
        // getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editTournamentStructure = (data, tournamentId, structureId) => {
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
        `${URL}/tournaments/${tournamentId}/structures/${structureId}`,
        options
      );
      if (response.ok) {
        getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteTournamentStructure = (tournamentId, structureId) => {
  return async (dispatch) => {
    const options = {
      method: "DELETE",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/tournaments/${tournamentId}/structures/${structureId}`,
        options
      );
      if (response.ok) {
        // getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getTournamentsStructures = (tournamentId) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/tournaments/${tournamentId}/structures`,
        options
      );
      if (response.ok) {
        const accessToken = await response.json();
        dispatch({
          type: GET_TOURNAMENTS_STRUCTURES,
          payload: accessToken,
        });
        setTimeout(() => {
          dispatch({
            type: GET_TOURNAMENTS_STRUCTURES_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_TOURNAMENTS_STRUCTURES_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_TOURNAMENTS_STRUCTURES_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_TOURNAMENTS_STRUCTURES_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_TOURNAMENTS_STRUCTURES_ERROR,
        payload: true,
      });
    }
  };
};
export const postComment = (token, data) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/reservationComments`, options);
      if (response.ok) {
        getComments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editComment = (token, commentId, data) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/reservationComments/${commentId}`,
        options
      );
      if (response.ok) {
        getComments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteComment = (token, commentId) => {
  return async (dispatch) => {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/reservationComments/${commentId}`,
        options
      );
      if (response.ok) {
        getComments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getComments = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/reservationComments`, options);
      if (response.ok) {
        const reservationComments = await response.json();
        dispatch({
          type: GET_RESERVATIONS_COMMENTS,
          payload: reservationComments,
        });
        setTimeout(() => {
          dispatch({
            type: GET_RESERVATIONS_COMMENTS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_RESERVATIONS_COMMENTS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_RESERVATIONS_COMMENTS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_RESERVATIONS_COMMENTS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_RESERVATIONS_COMMENTS_ERROR,
        payload: true,
      });
    }
  };
};

export const postReservation = (data) => {
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
      const response = await fetch(`${URL}/reservations`, options);
      if (response.ok) {
        getReservations();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editReservation = (data, reservationId, structureId) => {
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
        `${URL}/reservations/${reservationId}`,
        options
      );
      if (response.ok) {
        getReservations();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteReservation = (reservationId) => {
  return async (dispatch) => {
    const options = {
      method: "DELETE",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/reservations/${reservationId}`,
        options
      );
      if (response.ok) {
        getReservations();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getReservations = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/reservations`, options);
      if (response.ok) {
        const reservations = await response.json();
        dispatch({
          type: GET_RESERVATIONS,
          payload: reservations,
        });
        setTimeout(() => {
          dispatch({
            type: GET_RESERVATIONS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_RESERVATIONS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_RESERVATIONS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_RESERVATIONS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_RESERVATIONS_ERROR,
        payload: true,
      });
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
export const logout = (userId) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/users/logout/${userId}`, options);
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
export const adminLogout = (userId) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/users/logout/${userId}`, options);
      if (response.ok) {
        const accessToken = await response.json();
        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN,
          payload: accessToken,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
        payload: true,
      });
    }
  };
};

export const adminSignIn = (data) => {
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
      const response = await fetch(`${URL}/users/admin/login`, options);
      if (response.ok) {
        const accessToken = await response.json();
        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN,
          payload: accessToken,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
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
export const emailVerification = (data, userId) => {
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
        `${URL}/users/admin/verifyEmail/${userId}`,
        options
      );

      if (response.ok) {
        const emailVerificationResponse = await response.json();
        console.log(emailVerificationResponse);
        dispatch({
          type: EMAIL_VERIFICATION,
          payload: emailVerificationResponse,
        });
        setTimeout(() => {
          dispatch({
            type: EMAIL_VERIFICATION_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: EMAIL_VERIFICATION_LOADING,
          payload: false,
        });
        dispatch({
          type: EMAIL_VERIFICATION_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: EMAIL_VERIFICATION_LOADING,
        payload: false,
      });

      dispatch({
        type: EMAIL_VERIFICATION_ERROR,
        payload: true,
      });
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
        // getTournaments();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteTournamentParticipant = (tournamentId, participantId) => {
  return async () => {
    const options = {
      method: "DELETE",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/tournaments/${tournamentId}/participants/${participantId}`,
        options
      );
      console.log(response.ok);
      if (response.ok || response === 204) {
        // getTournaments();
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
export const getTournamentsResults = () => {
  return async (dispatch) => {
    const options = {
      method: "POST",
    };
    // const URL = process.env.REACT_APP_BE_PROD_URL;
    const APIkey = process.env.FOOTBALL_API_KEY;
    // const URL = `https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=${APIkey}`;
    const URL = `https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=9a071c302fe8a84e9e2e5a2654f52c3fa674cc4fa8273c984bed8f0ffa38c76b`;

    try {
      let response = await fetch(`${URL}`, options);
      if (response.ok) {
        const tournaments = await response.json();
        dispatch({
          type: GET_TOURNAMENTS_RESULTS,
          payload: tournaments,
        });
        setTimeout(() => {
          dispatch({
            type: GET_TOURNAMENTS_RESULTS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_TOURNAMENTS_RESULTS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_TOURNAMENTS_RESULTS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_TOURNAMENTS_RESULTS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_TOURNAMENTS_RESULTS_ERROR,
        payload: true,
      });
    }
  };
};
export const getTournamentsFixtures = () => {
  return async (dispatch) => {
    const options = {
      method: "POST",
    };
    // const URL = process.env.REACT_APP_BE_PROD_URL;
    const APIkey = process.env.FOOTBALL_API_KEY;
    const URL = `https://apiv3.apifootball.com/?action=get_events&from=2022-07-12&to=2023-07-12&league_id=302&APIkey=${APIkey}`;

    try {
      let response = await fetch(`${URL}`, options);
      if (response.ok) {
        const tournaments = await response.json();
        dispatch({
          type: GET_TOURNAMENTS_FIXTURES,
          payload: tournaments,
        });
        setTimeout(() => {
          dispatch({
            type: GET_TOURNAMENTS_FIXTURES_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_TOURNAMENTS_FIXTURES_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_TOURNAMENTS_FIXTURES_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_TOURNAMENTS_FIXTURES_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_TOURNAMENTS_FIXTURES_ERROR,
        payload: true,
      });
    }
  };
};
export const getProjectsImgs = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      let response = await fetch(`${URL}/files/projects/imgs`, options);
      if (response.ok) {
        const tournaments = await response.json();
        dispatch({
          type: GET_PROJECT_IMAGES,
          payload: tournaments,
        });
        setTimeout(() => {
          dispatch({
            type: GET_PROJECT_IMAGES_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_PROJECT_IMAGES_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_PROJECT_IMAGES_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_PROJECT_IMAGES_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_PROJECT_IMAGES_ERROR,
        payload: true,
      });
    }
  };
};

export const getOneTournamentParticipant = (
  // accessToken,
  tournamentId,
  participantId
) => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_PROD_URL;
    // const URL = process.env.REACT_APP_BE_DEV_URL;
    const options = {
      method: "GET",
    };

    try {
      let response = await fetch(
        `${URL}/tournaments/${tournamentId}/participants/${participantId}`,
        options
      );
      if (response.ok) {
        const participant = await response.json();
        dispatch({
          type: EDIT_ONE_TOURNAMENT_PARTICIPANT,
          payload: participant,
        });
        setTimeout(() => {
          dispatch({
            type: EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING,
          payload: false,
        });
        dispatch({
          type: EDIT_ONE_TOURNAMENT_PARTICIPANT_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: EDIT_ONE_TOURNAMENT_PARTICIPANT_LOADING,
        payload: false,
      });

      dispatch({
        type: EDIT_ONE_TOURNAMENT_PARTICIPANT_ERROR,
        payload: true,
      });
    }
  };
};
export const editOneTournamentParticipant = (
  // accessToken,
  tournamentId,
  participantId,
  data
) => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_PROD_URL;
    // const URL = process.env.REACT_APP_BE_DEV_URL;
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      let response = await fetch(
        `${URL}/tournaments/${tournamentId}/participants/${participantId}`,
        options
      );
      if (response.ok) {
        const participant = await response.json();
        // dispatch(getOneTournamentParticipant(tournamentId, participantId));
        dispatch(getTournaments());
        dispatch({
          type: GET_ONE_TOURNAMENT_PARTICIPANT,
          payload: participant,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ONE_TOURNAMENT_PARTICIPANT_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ONE_TOURNAMENT_PARTICIPANT_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ONE_TOURNAMENT_PARTICIPANT_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_ONE_TOURNAMENT_PARTICIPANT_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ONE_TOURNAMENT_PARTICIPANT_ERROR,
        payload: true,
      });
    }
  };
};
export const getUsers = (accessToken) => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_PROD_URL;
    const options = {
      method: "GET",
    };

    try {
      let response = await fetch(`${URL}/users`, options);
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
export const putMe = (accessToken, updatedMe) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${accessToken}`,
      },
      body: JSON.stringify(updatedMe),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;

    try {
      let response = await fetch(`${URL}/users/me`, options);
      if (response.ok) {
        const me = await response.json();
        dispatch({
          type: PUT_ME,
          payload: me,
        });
        setTimeout(() => {
          dispatch({
            type: PUT_ME_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: PUT_ME_LOADING,
          payload: false,
        });
        dispatch({
          type: PUT_ME_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: PUT_ME_LOADING,
        payload: false,
      });

      dispatch({
        type: PUT_ME_ERROR,
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
