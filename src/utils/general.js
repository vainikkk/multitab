export const getId = (link) => {
  if (link.includes("youtube.com") && link.includes("v=")) {
    const youtubeParams = link.split("v=")[1];
    const finalId = youtubeParams.includes("&")
      ? youtubeParams.split("&")[0]
      : youtubeParams;
    return finalId?.slice(0, 11);
  } else if (link.includes("youtu.be")) {
    const finalId = link.split("youtu.be/")[1];
    return finalId?.slice(0, 11);
  } else if (link.includes("youtube.com") && link.includes("embed")) {
    const finalId = link.split("embed/")[1];
    return finalId?.slice(0, 11);
  }
};
