import React from 'react'
import banner from '../../images/img.jpg'

import {
    MainPageContainer,
    MainPageSearchContainer,
    MainPageTitle,
    SearchBarContainer,
    InputBox,
    FontAwesome,
    MainPageContentContainer,
    MainPageBanner,
    ImageContainer,
    Image,
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
      topRatedResult : ''
    }
  }

  componentDidMount(){
     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US&page=1')
     .then(data => data.json())
     .then(data => this.setState({
      topRatedResult : data.results
     },()=> this.setState({
       topRatedResult : data.results
     })))
  }
  render(){
    const { topRatedResult } = this.state 
    const  fewtopRatedResult = topRatedResult.slice(0,12)
    console.log('few', fewtopRatedResult)
    console.log('type', Array.isArray(fewtopRatedResult))
    return(
      <MainPageContainer>
        <MainPageSearchContainer>
            <MainPageTitle>Movie Buff</MainPageTitle>
            <SearchBarContainer>
                <InputBox type='text' name='search' placeholder='Search....'/>
                <FontAwesome className="fab fa-searchengin"></FontAwesome>
            </SearchBarContainer>
        </MainPageSearchContainer>
        <MainPageContentContainer>
            <MainPageBanner>
               <ImageContainer><Image src={banner} /></ImageContainer>
            </MainPageBanner>
            <TopRatedContainer>
                   <TopRatedTitle> Top Rated Movies</TopRatedTitle>
                   <ItemContainer>
                   {
                     fewtopRatedResult && fewtopRatedResult.map((item)=>  
                     <Item>
                       <ItemImage><Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/></ItemImage>
                       <ItemTitleContainer>
                          <ItemTitle>{item.original_title}</ItemTitle>
                          <ItemYear>{item.release_date.split('-')[0]}</ItemYear>
                          <ItemRating>{item.vote_average}</ItemRating>
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