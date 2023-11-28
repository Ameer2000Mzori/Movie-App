// selecting our elements
const loadingAnimation = document.getElementsByClassName(
  "loading-Animation"
)[0] as HTMLElement;
const headWrap = document.getElementsByClassName("head-Wrap")[0] as HTMLElement;

// getting our api keys
const API_KEY: string = `https://api.themoviedb.org/3/movie/popular?api_key=8dbad61c621c6aded1acf7750c8edc2a`;
const SEARCH_API_KEY: string = ` https://api.themoviedb.org/3/search/movie?api_key=8dbad61c621c6aded1acf7750c8edc2a&query=`;
const IMG_PATH_API: string = `https://image.tmdb.org/t/p/w500/`;

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
    movieImg.src = `${IMG_PATH_API + el.backdrop_path}`;
    cardWrap.appendChild(movieImg);

    const overText = document.createElement("div");
    overText.classList.add("over-Text");

    const pText = document.createElement("p");
    pText.textContent = `${el.overview}`;
    overText.appendChild(pText);
    cardWrap.appendChild(overText);

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

    // appending our elemtns to headWrap
    headWrap.appendChild(cardWrap);
  });
};

// here is our search function
const searchFunction = (e) => {
  const textBox = document.getElementsByClassName("text-Box")[0] as any;
  const sreachWord = textBox.value;
  if (sreachWord) {
    console.log(sreachWord);

    requestMovie(SEARCH_API_KEY + sreachWord);
    loadingAnimation.style.display = `Flex`;
    headWrap.innerHTML = `        <img
    class="loading-Animation"
    src="asset/animation-Loading.svg"
    alt=""
  />`;
  }
  console.log(e);
};

// our event lisnters
window.addEventListener("load", () => {
  requestMovie(API_KEY);
});

// our eventlisner for search box
addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    var enterValue = e.key;
    searchFunction(enterValue);
  } else {
    console.log("please please enter");
  }
});

// our dynamic html tree
// <div class="card-wrap">
// <img
//   class="movie-Img"
//   src="https://images.freeimages.com/images/large-previews/5eb/movie-clapboard-1184339.jpg?fmt=webp&w=350"
//   alt=""
// >
// </img>
// <div class="over-Text">
// <p>
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
// </p>
// </div>
// <div class="text-Rate-Wrap">
//   <h3 class="title-H3">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//   </h3>
//   <h3 class="rating-H3">7.1</h3>
// </div>
