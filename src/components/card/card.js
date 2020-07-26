import React from 'react'

import {
    CardContainer,
    CardContent,
    CardImage,
    CardDescription,
    Image,
    CardTitle
} from './style'

class Card extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const  searchResultCard  = this.props.searchResult.slice(0,10)
        
        console.log('props received', searchResultCard)
        return(
            <CardContainer>
                {
                    searchResultCard.map((item)=>{
                        return(
                            <CardContent>
                                <CardImage>
                                    <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                                </CardImage>
                                <CardDescription>
                                    <CardTitle>{item.original_title}</CardTitle>
                                </CardDescription>
                            </CardContent>
                        )
                    })
                }
            </CardContainer>
        )
    }
}

export default Card