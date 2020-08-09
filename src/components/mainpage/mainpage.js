import React from 'react'

import Carousel from '../carousel/slider'
import Navbar from '../navbar/navbar'
import CardMain from '../cardMain/cardMain'

import {
    MainPageContainer,
    MainPageContentContainer,
    MainPageBanner,
    TopRatedContainer,
    TopRatedTitle,
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

  render(){
    const { topRatedResult } = this.state 
    const  fewtopRatedResult = topRatedResult.slice(0,12)
    return(
      <MainPageContainer>
          <Navbar  />
        <MainPageContentContainer>
            <MainPageBanner>
               <Carousel autoPlay={null}/>
            </MainPageBanner>
            <TopRatedContainer>
                   <TopRatedTitle> Top Rated Movies</TopRatedTitle>
                   <CardMain cardMaindata={fewtopRatedResult} />
            </TopRatedContainer>
        </MainPageContentContainer>
      </MainPageContainer>
    )
  }
}

export default MainPage