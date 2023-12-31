var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// selecting our elements
var loadingAnimation = document.getElementsByClassName("loading-Animation")[0];
var headWrap = document.getElementsByClassName("head-Wrap")[0];
// getting our api keys
var API_KEY = "https://api.themoviedb.org/3/movie/popular?api_key=8dbad61c621c6aded1acf7750c8edc2a";
var SEARCH_API_KEY = " https://api.themoviedb.org/3/search/movie?api_key=8dbad61c621c6aded1acf7750c8edc2a&query=";
var IMG_PATH_API = "https://image.tmdb.org/t/p/w500/";
// stop displaying our loading animation:
loadingAnimation.style.display = "none";
// api fetch function
function requestMovie(Api_Key) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, dataArry, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loadingAnimation.style.display = "flex";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(Api_Key)];
                case 2:
                    response = _a.sent();
                    if (!response) {
                        console.log("error with response");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    dataArry = data.results;
                    loadingAnimation.style.display = "none";
                    loadMovies(dataArry);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log("you got an error ".concat(error_1));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// functions
var loadMovies = function (data) {
    data.forEach(function (el) {
        // getting single number from our rates
        var newRate = Math.floor(el.vote_average);
        // else if lader to change background color of rate wrappers
        if (newRate >= 7) {
            var rateColor = "green";
        }
        else if (newRate >= 4) {
            var rateColor = "#FFF5C2";
        }
        else {
            var rateColor = "red";
        }
        // creating our elements dynamclly
        var cardWrap = document.createElement("div");
        cardWrap.classList.add("card-wrap");
        var movieImg = document.createElement("img");
        movieImg.classList.add("movie-Img");
        // if there is no image for movie take a use this image else use original
        if (!el.backdrop_path) {
            movieImg.src = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
        }
        else {
            movieImg.src = "".concat(IMG_PATH_API + el.backdrop_path);
        }
        cardWrap.appendChild(movieImg);
        var overText = document.createElement("div");
        overText.classList.add("over-Text");
        var pText = document.createElement("p");
        pText.textContent = "".concat(el.overview);
        overText.appendChild(pText);
        cardWrap.appendChild(overText);
        var textRateWrap = document.createElement("div");
        textRateWrap.classList.add("text-Rate-Wrap");
        cardWrap.appendChild(textRateWrap);
        var titleH3 = document.createElement("h3");
        titleH3.classList.add("title-H3");
        titleH3.textContent = "".concat(el.original_title);
        textRateWrap.appendChild(titleH3);
        var ratingH3 = document.createElement("h3");
        ratingH3.classList.add("rating-H3");
        ratingH3.style.color = "black";
        ratingH3.style.backgroundColor = "".concat(rateColor);
        ratingH3.textContent = "".concat(newRate);
        textRateWrap.appendChild(ratingH3);
        // appending our elemtns to headWrap
        headWrap.appendChild(cardWrap);
    });
};
// here is our search function
var searchFunction = function (e) {
    // selecting our input text
    var textBox = document.getElementsByClassName("text-Box")[0];
    // getting the value and putting it in varible
    var sreachWord = textBox.value;
    // checking if there is value else dont file the code
    if (sreachWord) {
        requestMovie(SEARCH_API_KEY + sreachWord);
        loadingAnimation.style.display = "Flex";
        headWrap.innerHTML = "        <img\n    class=\"loading-Animation\"\n    src=\"asset/animation-Loading.svg\"\n    alt=\"\"\n  />\n  ";
        textBox.value = "";
    }
};
// our event lisnters
window.addEventListener("load", function () {
    requestMovie(API_KEY);
});
// our eventlisner for search box
addEventListener("keypress", function (e) {
    // if pressed ETNER  then fire searchFunction else not
    if (e.key === "Enter") {
        var enterValue = e.key;
        searchFunction(enterValue);
    }
});
