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

let movies = JSON.parse(localStorage.getItem("movies")) || [];
/* check if movie already exists */
let existingMovie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());

if(existingMovie){
    /* average the rating */
    existingMovie.rating = Math.round((parseInt(existingMovie.rating) + parseInt(rating)) / 2);
    /* update year and genre if changed */
    existingMovie.year = year;
    existingMovie.genre = genre;
}

else{
    let movie = {
    title: title,
    year: year,
    genre: genre,
    rating: rating
    };
    movies.push(movie);
}

localStorage.setItem("movies", JSON.stringify(movies));
displayMovies();
clearForm();
}


function displayMovies(){

let movies = JSON.parse(localStorage.getItem("movies")) || [];
let movieList = document.getElementById("movieList");

movieList.innerHTML = "";

movies.forEach((movie, index) => {

    let stars = "★".repeat(movie.rating) + "☆".repeat(5 - movie.rating);

    movieList.innerHTML += `
    <div class="movieItem">
    <strong>${movie.title}</strong> (${movie.year}) - ${movie.genre}, 
    Rating: <span class="movieStars">${stars}</span>

    <br>
    <button onclick="deleteMovie(${index})">Delete</button>
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

function deleteMovie(index){

let confirmDelete = confirm("Are you sure you want to delete this movie?");

if(confirmDelete){
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

}


displayMovies();