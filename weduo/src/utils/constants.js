const YOUR_API_KEY = "AIzaSyAZhifM13hAUKc4-P_dJhhS5IPfTclCrw4";

export const YOUTUBE_VIDEO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUR_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
