import React from 'react'

import { withRouter } from 'react-router-dom'

import getRating from '../../utils/getRating'

import {
    CardContainer,
    CardContent,
    CardImage,
    CardDescription,
    Image,
    CardTitle,
    CardStar,
    CardGenre,
    CardGenreItem,
    CardOverview
} from './style'

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

    handleClick = (id) => {
        this.props.history.push(`/movie/${id}`)
    }

    render(){
        const  searchResultCard  = this.props.searchResult.slice(0,10)
        
        console.log('props received', searchResultCard)
        return(
            <CardContainer>
                {
                    searchResultCard && searchResultCard.map((item)=>(
                            <CardContent onClick={()=>this.handleClick(item.id)}>
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

export default  withRouter(Card)