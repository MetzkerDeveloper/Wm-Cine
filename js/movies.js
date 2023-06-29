const API_KEY = 'api_key=0c30d0d7014cfae8ba8636255004d21b';
const  BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

// Pegar os filmes
function getMovies(url){
  fetch(url).then(res => res.json()).then(data =>{
    console.log(data)
    showMovies(data.results);
  })
}

//Mostrar os filmes
function showMovies(data){
main.innerHTML='';

data.forEach(movie => {
  const { title, poster_path, vote_average, overview } = movie;
  const movieEl = document.createElement("div");
  movieEl.classList.add("movie");
  movieEl.innerHTML = `
  <img src="${IMG_URL + poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>Overwiew</h3>
               ${overview}
            </div>
  `;

  main.appendChild(movieEl);
});

}
// Dar cor a classificação
function getColor(vote){
  if(vote >= 8){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}
//Utilizar barra de pesquisa
form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm){
    getMovies(searchURL+'&query='+searchTerm)
  }else{
    getMovies(API_URL);
  }
})

