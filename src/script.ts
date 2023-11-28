// selecting our elements
const loadingAnimation = document.getElementsByClassName(
  "loading-Animation"
)[0] as HTMLElement;
const headWrap = document.getElementsByClassName("head-Wrap")[0] as HTMLElement;

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
    // getting single number from our rates
    var newRate = Math.floor(el.vote_average);

    // else if lader to change background color of rate wrappers
    if (newRate >= 7) {
      var rateColor = `green`;
    } else if (newRate >= 4) {
      var rateColor = `#FFF5C2`;
    } else {
      var rateColor = `red`;
    }

    // creating our elements dynamclly
    const cardWrap = document.createElement("div");
    cardWrap.classList.add("card-wrap");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-Img");
    // movieImg.src = `${el.backdrop_path}`;
    cardWrap.appendChild(movieImg);

    const textRateWrap = document.createElement("div");
    textRateWrap.classList.add("text-Rate-Wrap");
    cardWrap.appendChild(textRateWrap);

    const titleH3 = document.createElement("h3");
    titleH3.classList.add("title-H3");
    titleH3.textContent = `${el.original_title}`;
    textRateWrap.appendChild(titleH3);

    const ratingH3 = document.createElement("h3");
    ratingH3.classList.add("rating-H3");
    ratingH3.style.color = `black`;
    ratingH3.style.backgroundColor = `${rateColor}`;
    ratingH3.textContent = `${newRate}`;
    textRateWrap.appendChild(ratingH3);

    headWrap.appendChild(cardWrap);
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

// .innerHTML = `

//         <div class="card-wrap">
//     <img class="movie-Img"
//     src="https://images.freeimages.com/images/large-previews/5eb/movie-clapboard-1184339.jpg?fmt=webp&w=350"
//     alt=""
//     />
//     <div class="text-Rate-Wrap">
//     <h3 class="title-H3"> ${el.original_title}</h3>
//     <h3 class="rating-H3" style="background-color: ${rateColor}">${newRate}</h3>
//     </div>
//     </div>
//     `;
