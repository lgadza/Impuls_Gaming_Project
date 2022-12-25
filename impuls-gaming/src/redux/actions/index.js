export const GIFT_CARD_DATA = " GIFT_CARD_DATA";
export const GIFT_CARD_DATA_ERROR = " GIFT_CARD_DATA_ERROR";
export const GIFT_CARD_DATA_LOADING = " GIFT_CARD_DATA_LOADING";

export const giftCardInf = (data) => {
  return {
    type: GIFT_CARD_DATA,
    payload: data,
  };
};
