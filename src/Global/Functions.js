export const deliveryText = (res) => {
    let deliveryTime = "";
    if (res.deliveryTime <= 15) {
      deliveryTime = "0 - 15 min";
    }
    if (res.deliveryTime > 15 && res.deliveryTime <= 30) {
      deliveryTime = "15 - 30 min";
    }
    if (res.deliveryTime > 30 && res.deliveryTime <= 45) {
      deliveryTime = "30 - 45 min";
    }
    if (res.deliveryTime > 45 && res.deliveryTime <= 60) {
      deliveryTime = "45 - 60 min";
    }
    if (res.deliveryTime > 60) {
      deliveryTime = "60+ min";
    }
    return deliveryTime;
}