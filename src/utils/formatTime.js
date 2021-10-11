export const formatTime = (par) => {
  if (par == undefined || isNaN(par) || par < 0){
    return null;
  } else {
    const seconds = Math.floor(par % 60).toString().padStart(2, '0');
    const minutes = Math.floor((par / 60) % 60).toString().padStart(2, '0');
    const hours = Math.floor(par / 3600).toString().padStart(2, '0');
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
  }
};