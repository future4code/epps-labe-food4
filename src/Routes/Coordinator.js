export const goToBack = (history) => {
  history.goBack();
};

export const goToHome = (history) => {
  history.push("/");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToRegister = (history) => {
  history.push("/register/1");
};

export const goToAddressPage = (history) => {
  history.push("/register/2");
};

export const goToRestaurant = (history, id) => {
  history.push(`/restaurant/${id}`);
};

export const goToProfile = (history) => {
  history.push("/profile");
};

export const goToCart = (history) => {
  history.push("/cart");
};

export const goToProfileAddress = (history) => {
  history.push("/edit-profile-address");
};

export const goToProfileInfo = (history) => {
  history.push("/edit-profile-info");
};
