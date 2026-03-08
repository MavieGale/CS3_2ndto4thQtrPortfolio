let stars = document.querySelectorAll(".star");
let rating = 0;

// star click
stars.forEach(star => {
    star.addEventListener("click", () => {
        rating = star.dataset.value;

        stars.forEach(s => {
        s.classList.remove("active");
        });

        for(let i=0;i<rating;i++){
            stars[i].classList.add("active");
        }
    });

});


document.getElementById("addMovie").addEventListener("click", addMovie);

function addMovie(){

    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;

    let movie = {
    title: title,
    year: year,
    genre: genre,
    rating: rating
    };

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();
    clearForm();
}


function displayMovies(){

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    movies.forEach(movie => {

        let stars = "★".repeat(movie.rating) + "☆".repeat(5 - movie.rating);
        movieList.innerHTML += `
        <div class="movieItem">
        <strong>${movie.title}</strong> (${movie.year}) - ${movie.genre}, 
        Rating: <span class="movieStars">${stars}</span>
        </div>
        `;

});

}


function clearForm(){

    document.getElementById("title").value="";
    document.getElementById("year").value="";
    rating=0;

    stars.forEach(s=>{
    s.classList.remove("active");
    });

}


displayMovies();