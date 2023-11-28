// selecting our elements
const loadingAnimation = document.getElementsByClassName(
  "loading-Animation"
)[0] as HTMLElement;

// getting our api keys
const API_KEY: string = `https://api.themoviedb.org/3/movie/popular?api_key=8dbad61c621c6aded1acf7750c8edc2a`;
const SEARCH_API_KEY: string = ` https://api.themoviedb.org/3/search/movie?api_key=8dbad61c621c6aded1acf7750c8edc2a&query=`;

// stop displaying our loading animation:
loadingAnimation.style.display = `none`;

// api fetch function
async function requestMovie(Api_Key: string) {
  loadingAnimation.style.display = `flex`;
  try {
    const response = await fetch(Api_Key);
    if (!response) {
      console.log("error with response");
    }
    const data = await response.json();
    const dataArry = data.results;
    loadingAnimation.style.display = `none`;
    console.log(dataArry);
    loadMovies(dataArry);
  } catch (error) {
    console.log(`you got an error ${error}`);
  }
}

// functions
const loadMovies = (data: any) => {
  data.forEach((el: any) => {
    console.log(el.original_title);
  });
};

// our event lisnters
window.addEventListener("load", () => {
  requestMovie(API_KEY);
});

// our dynamic html tree
// <div class="card-wrap">
// <img class="movie-Img"
//   src="https://images.freeimages.com/images/large-previews/5eb/movie-clapboard-1184339.jpg?fmt=webp&w=350"
//   alt=""
// />
// <div class="text-Rate-Wrap">
//   <h3 class="title-H3">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//   </h3>
//   <h3 class="rating-H3">7.1</h3>
// </div>
// </div>
