let movies = [
    {
        title: "The Princess Bride",
        year: "1987",
        genre: "Fantasy"
    }, 
    {
        title: "Jurassic Park",
        year: "1993",
        genre: "Adventure"
    },
    {
        title: "Die Hard",
        year: "1988",
        genre: "Action"
    },
    {
        title: "The Rope",
        year: "1948",
        genre: "Thriller"
    },
    {
        title: "Life of Brian",
        year: "1979",
        genre: "Comedy"
    },
    {
        title: "The Shining",
        year: "1980",
        genre: "Horror" 
    },
    {
        title: "Star Wars",
        year: "1977",
        genre: "Sci-Fi" 
    },
    {
        title: "Harry Potter",
        year: "2001",
        genre: "Fantasy"
    },
    {
        title: "Aliens",
        year: "1986",
        genre: "Action"
    },
    {
        title: "Coming to America",
        year: "1988",
        genre: "Comedy" 
    },
    {
        title: "Pulp Fiction",
        year: "1994",
        genre: "Cult" 
    },
    {
        title: "The Truman Show",
        year: "1998",
        genre: "Drama"
    }, 
    {
        title: "The Big Lebowski",
        year: "1998",
        genre: "Cult" 
    },
    {
        title: "The Rocky Horror Picture Show",
        year: "1975",
        genre: "Cult" 
    },

    {
        title: "The Lord of the Rings",
        year: "2001",
        genre: "Fantasy" 
    },
    {
        title: "Serenity",
        year: "2005",
        genre: "Sci-Fi" 
    }
]

let genres = [
    "Fantasy", 
    "Adventure", 
    "Sci-Fi", 
    "Cult", 
    "Drama", 
    "Comedy", 
    "Action", 
    "Horror", 
    "Thriller"
]; 

let filterMovies = genres.map(function(genre) {
    return (movies.filter(function(movie) {
        return (movie.genre === genre); 
        }
    ))
}); 

console.log(filterMovies); 
