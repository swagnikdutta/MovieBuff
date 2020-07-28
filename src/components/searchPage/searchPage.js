import React from 'react'

import Navbar from '../navbar/navbar'
import Card from '../card/card'

import {
    SearchContainer,
    SearchPageTitle,
    Search,
    CardContent
} from './style'


class SearchPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           searchResult : '',
           location: window.location.pathname,
        }
    }

    apiCall = (searchText) => {
        searchText = searchText.split('/').pop()
        const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=08f31c809a8ba972b87a3748c6885970&language=en-US&query=${searchText}&page=1&include_adult=false`
     
            fetch(searchApi)
            .then(data => data.json())    
            .then(data => this.setState({
               searchResult : data.results
            })
            )
    }
    
    
    componentDidUpdate(){
        if( window.location.pathname !== this.state.location){
            console.log('path has changed')
            this.setState({
                location: window.location.pathname
            },()=>{
                this.apiCall(this.state.location)
            })
        }

       
    }

    componentDidMount(){
        console.log('I m here')
        const searchText = this.state.location
        this.apiCall(searchText)
    }

    render(){
        const { searchResult,  location} = this.state
        
        return(
            <SearchContainer>
                <Navbar />
                {searchResult && 
                    <Search>
                        <SearchPageTitle>{searchResult.length} Search Result for {location.split('/').pop()}</SearchPageTitle>
                        <CardContent><Card searchResult={searchResult} /></CardContent>
                        
                    </Search>
                }
            </SearchContainer>
        )
    }
}

export default SearchPage