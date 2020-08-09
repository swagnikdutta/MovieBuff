import React from 'react'
import { withRouter } from 'react-router';

import { getRating } from '../../utils/getRating'

import {
    ItemContainer,
    Item,
    ItemImage,
    ItemTitleContainer,
    Img,
    ItemTitle,
    ItemYear,
    ItemRating,
    Background
} from './style'

class CardMain extends React.Component{

    constructor(props){
        super(props)
    }    

    handleClick = (id) => {
        this.props.history.push(`/movie/${id}`)
    }


    render(){
        const {cardMaindata} = this.props
        console.log('receied', cardMaindata)
        return(
            <ItemContainer>
            {
              cardMaindata && cardMaindata.map((item)=>  
              <Item onClick={()=>this.handleClick(item.id)}>
                <ItemImage>
                   <Background imageUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></Background>
                   <Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                 </ItemImage>
                <ItemTitleContainer>
                   <ItemTitle>{item.original_title}</ItemTitle>
                   <ItemYear>{item.release_date.split('-')[0]}</ItemYear>
                   <ItemRating>{getRating(item.vote_average)}</ItemRating>
                 </ItemTitleContainer>
              </Item>)
            }
            </ItemContainer>

        )
    }
}

export default withRouter(CardMain)