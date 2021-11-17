
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  

  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  

  let getDistanceHint = distance => {
    if (distance < 30) {
      return "Demasiado cerca";
    } else if (distance < 40) {
      return "Muy cerca";
    } else if (distance < 60) {
      return "Cerca";
    } else if (distance < 100) {
      return "Te vas acercando";
    } else if (distance < 180) {
      return "Lejos";
    } else if (distance < 360) {
      return "Muy lejos";
    } else {
      return "Demasiado Lejos";
    }
  }
  