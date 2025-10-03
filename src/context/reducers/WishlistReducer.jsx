const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      const updatedItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        wishlistItems: updatedItems,
      };

    default:
      return state;
  }
};
export default WishlistReducer;
