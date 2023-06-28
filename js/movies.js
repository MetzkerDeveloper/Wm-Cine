  const search = document.getElementById('search');
  search.addEventListener('blur', (e)=>{
    e.preventDefault();
   
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzMwZDBkNzAxNGNmYWU4YmE4NjM2MjU1MDA0ZDIxYiIsInN1YiI6IjY0MTQ1YmE4ZTE4ZTNmMDdhYzU0MzIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7xV7L66TPJJKKBDhu-EFN6Glbk1DXNl9D-2u1NZrb4'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search.value}&include_adult=false&language=en-US&primary_release_year=2023&page=1`, options)
      .then(response => response.json())
      .then(response => console.log(response.results
        ))
      .catch(err => console.error(err));
    
  })
