import React from 'react'

import Carousel from '../carousel/slider'
import Navbar from '../navbar/navbar'

import getRating from '../../utils/getRating'

import {
    MainPageContainer,
    MainPageContentContainer,
    MainPageBanner,
    TopRatedContainer,
    TopRatedTitle,
    ItemContainer,
    Item,
    ItemImage,
    ItemTitleContainer,
    Img,
    ItemTitle,
    ItemYear,
    ItemRating
} from './style'


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

  handleClick = (id) => {
    this.props.history.push(`/movie/${id}`)
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
                   <TopRatedTitle> Top Rated Movies</TopRatedTitle>
                   <ItemContainer>
                   {
                     fewtopRatedResult && fewtopRatedResult.map((item)=>  
                     <Item onClick={()=>this.handleClick(item.id)}>
                       <ItemImage><Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/></ItemImage>
                       <ItemTitleContainer>
                          <ItemTitle>{item.original_title}</ItemTitle>
                          <ItemYear>{item.release_date.split('-')[0]}</ItemYear>
                          <ItemRating>{getRating(item.vote_average)}</ItemRating>
                        </ItemTitleContainer>
                     </Item>)
                   }
                   </ItemContainer>
            </TopRatedContainer>

        </MainPageContentContainer>
      </MainPageContainer>
    )
  }
}

export default MainPage