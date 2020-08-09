import React  from 'react'

import {
    CardRating,
    GenreTitle
} from './style.js'

export const getRating = (vote) => {
    var rate = []
    const rating = Math.floor(vote/2)
    for(let i=0; i < rating; i++){
        rate.push(<CardRating className="fa fa-star" active></CardRating>)
    }
  
    if( (5-rating) > 0){
        for(let i=0; i < (5-rating); i++){
            rate.push(<CardRating className="fa fa-star" ></CardRating>)
        }
    }
  
    return rate
}

export const getGenre = (id) => {
    var genre = []
    const movieDetailApi = `https://api.themoviedb.org/3/movie/${id}?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US`
    // fetch(movieDetailApi)
    // .then(data => data.json())
    // .then(data => {
    //     for(let i=0; i < data.genres.length ; i++){
    //         genre.push(<GenreTitle>{data.genres[i].name}</GenreTitle>)  
    //     }
    //     console.log('genre', genre)
    //     return genre
    // })
    return <div>hey</div>
    
}

  
