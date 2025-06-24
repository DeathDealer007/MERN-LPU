const searchQueryStr = window.location.search;
console.log("searchQueryStr: ", searchQueryStr);

const queryParts = searchQueryStr.split("=");
console.log(queryParts);
const videoId = queyParts[1];
console.log("videoId: ", videoId);

const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
