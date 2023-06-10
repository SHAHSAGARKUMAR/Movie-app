const Api_Key='api_key=a1980b127a2fb5389509a998fa0b6095';
const base_url='https://api.themoviedb.org/3';
const api_url=base_url + '/discover/movie?sort_by=popularity.desc&'+Api_Key;
const img_url='https://image.tmdb.org/t/p/w500'

const search_url=base_url + '/search/movie?' + Api_Key;

const main=document.getElementById('main');
const form=document.getElementById('form');
const search=document.getElementById('search');

getMovies(api_url);

function getMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        });
}



function showMovies(data) {
    main.innerHTML = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, genre_ids} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${img_url + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getcolor(vote_average)}">${vote_average}</span>
                <span class="genre">${getGenre(genre_ids[0])}</span>
            </div>
            <div class="movie-des">
                <p>${overview}</p>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

function getcolor(vote) {
    if (vote >= 8)
        return 'green';
    else if (vote >= 5)
        return 'orange';
    else
        return 'red';
}

function getGenre(genre) {
    if (genre === 28)
    return 'Action';
    else if (genre === 12)
    return 'Adventure';
    else if (genre === 16)
    return 'Animation';
    else if (genre === 35)
    return 'Comedy';
    else if (genre === 80)
    return 'Crime';
    else if (genre === 99)
    return 'Documentary';
    else if (genre === 18)
    return 'Drama';
    else if (genre === 10751)
    return 'Family';
    else if (genre === 14)
    return 'Fantasy';
    else if (genre === 36)
    return 'History';
    else if (genre === 27)
    return 'Horror';
    else if (genre === 10402)
    return 'Music';
    else if (genre === 9648)
    return 'Mystery';
    else if (genre === 10749)
    return 'Romance';
    else if (genre === 878)
    return 'Science Fiction';
    else if (genre === 10770)
    return 'TV Movie';
    else if (genre === 53)
    return 'Thriller';
    else if (genre === 10752)
    return 'War';
    else if (genre === 37)
    return 'Western';
    else
    return 'Unknown Genre';
    }


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchKey = search.value;
    if (searchKey) {
        getMovies(search_url + '&query=' + searchKey);
    } else {
        getMovies(api_url);
    }
});



