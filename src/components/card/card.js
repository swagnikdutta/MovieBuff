import React from 'react'

import star from '../../images/star1.png'

import {
    CardContainer,
    CardContent,
    CardImage,
    CardDescription,
    Image,
    CardTitle,
    CardStar,
    CardRating,
    CardGenre,
    CardGenreItem,
    CardOverview
} from './style'

const getRating = (vote) => {
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

class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            genreArray : []
        }
    }

    getGenre = (id) => {
        let genre = []   
        const movieDetailApi = `https://api.themoviedb.org/3/movie/${id}?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US`
        fetch(movieDetailApi)
        .then(data => data.json())
        .then(data =>  this.setState({
            genreArray : data.genres
        })
        )
    }

    render(){
        const  searchResultCard  = this.props.searchResult.slice(0,10)
        
        console.log('props received', searchResultCard)
        return(
            <CardContainer>
                {
                    searchResultCard && searchResultCard.map((item)=>(
                            <CardContent>
                                <CardImage>
                                    <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                                </CardImage>
                                <CardDescription>
                                    <CardTitle>{item.original_title}</CardTitle>
                                    <CardStar>
                                       {getRating(item.vote_average)}
                                    </CardStar>
                                    {item.id && 
                                    <CardGenre>
                                        {/* {this.getGenre(item.id)} */}
                                    </CardGenre>
                                    }
                                    <CardOverview>{item.overview}</CardOverview>
                                </CardDescription>
                            </CardContent>
                        )
                    )
                }
            </CardContainer>
        )
    }
}

export default Card