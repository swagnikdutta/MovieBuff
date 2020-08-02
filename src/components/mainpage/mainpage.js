import React from 'react'

import Carousel from '../carousel/slider'
import Navbar from '../navbar/navbar'


import {
    MainPageContainer,
    MainPageContentContainer,
    MainPageBanner,
    TopRatedContainer,
    TopRatedTitle,
    ItemsContainer,
    Item,
    Background,
    ItemImage,
    ItemTitleContainer,
    Img,
    ItemTitle,
    ItemYear,
    ItemRating,
    CardRating
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


class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      topRatedResult : '',
      searchIconClicked: false,
      searchResult: ''
    }
  }

  componentDidMount(){
     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US&page=1')
     .then(data => data.json())
     .then(data => this.setState({
      topRatedResult : data.results
     }))
  }


  render(){
    const { topRatedResult } = this.state 
    const  fewtopRatedResult = topRatedResult.slice(0,12)
   
    console.log('type', this.state.searchResult)
    return(
      <MainPageContainer>
          <Navbar  />
        <MainPageContentContainer>
            <MainPageBanner>
               <Carousel autoPlay={null}/>
            </MainPageBanner>
            <TopRatedContainer>
                   <TopRatedTitle>Top rated</TopRatedTitle>
                   <ItemsContainer>
                   {
                     fewtopRatedResult && fewtopRatedResult.map((item)=>  
                     <Item>
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
                   </ItemsContainer>
            </TopRatedContainer>

        </MainPageContentContainer>
      </MainPageContainer>
    )
  }
}

export default MainPage