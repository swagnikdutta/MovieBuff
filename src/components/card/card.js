import React from 'react'

import { withRouter } from 'react-router-dom'

import { getRating, getGenre } from '../../utils/getRating'

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

    handleClick = (id) => {
        this.props.history.push(`/movie/${id}`)
    }

    render(){
        const  searchResultCard  = this.props.searchResult.slice(0,10)
        
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
                                        {/* {getGenre(item.id)}    */}
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