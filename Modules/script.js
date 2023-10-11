// Ralph Godkin

// Get the document from the DOM
let movieForm = document.getElementById("frmMovies");
let getMovieForm = document.getElementById("frmGetMovie");

// Create an array to contain the movie objects
let movieArray = []

// Listen for the submit button to be clicked
movieForm.addEventListener("submit", saveMovie);
getMovieForm.addEventListener("submit", getMovie);


// FUNCTIONS //

// Function to create a movie object
function Movie(name, year, note, rating){
    this.name = name;
    this.year = year;
    this.note = note;
    this.rating = rating;
        // Define a method for the object
        this.getAge = function(){
        let currentYear = new Date();
        return currentYear.getFullYear() - this.year;
    } // End Method
} // End Movie function


// Function to execute when submit clicked
function saveMovie(event) {
    event.preventDefault()
    // Get the data from the form
    let varMovieName = document.getElementById("inMovieName").value;
    let varMovieYear = document.getElementById("inMovieYear").value;
    let varMovieNote = document.getElementById("inMovieNote").value;
    let varMovieRating = document.getElementById("inMovieRating").value;
  
    // Call the Movie function to create a movie object with the form data
    let tmpMovie = new Movie(varMovieName, varMovieYear, varMovieNote, varMovieRating)

    // Push the data into the array
    movieArray.push(tmpMovie)

    // Alert & form reset
    movieForm.reset();
    window.alert(`"${varMovieName}" has been saved.`)
    
} // End saveMovie function


// Function to get a random movie from the array
function getMovie(event) {
    event.preventDefault()

    if (!movieArray.length){
        alert("There are no movies entered.")}
    else {
        console.log(`There is/are ${movieArray.length} movie('s) in the array.`)
        let randomMovie = Math.floor(Math.random() * movieArray.length);
        console.log(randomMovie)

        // Show the random movie
        random_movie.innerHTML = "<p class='getMovie'><b>Random Movie from the database:</b><br> " +
                                "<br><b>Movie Name:</b> " + movieArray[randomMovie].name +
                                "<br><b>Release Year:</b> " + movieArray[randomMovie].year +
                                "<br><b>Movie Rating:</b> " + movieArray[randomMovie].rating + " out of 5." +
                                "<br><b>Description:</b> " + movieArray[randomMovie].note + 
                                "<br><b>Movie Age:</b> " + movieArray[randomMovie].getAge() + " year(s) old." +
                                "</p>";

    }// End if...Else

}  // End getMovie function
