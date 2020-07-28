import React from 'react'

import { withRouter, BrowserRouter , Link } from "react-router-dom";

import {
    MainPageSearchContainer,
    MainPageTitle,
    SearchBarContainer,
    InputBox,
    FontAwesome,  

} from './style'

class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchText: '',
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleClickSearchIcon = () => {
        const {  searchText } = this.state
        if(searchText){
          this.props.history.push(`/search/${searchText}`)
        }
    }


    render(){
        return(
            <BrowserRouter>    
                <MainPageSearchContainer>
                    <MainPageTitle><a href='/'>Movie Buff </a></MainPageTitle>
                    <SearchBarContainer>
                        <InputBox type='text' name='searchText' placeholder='Search....' onChange={(e)=>this.handleChange(e)} required/>
                        <FontAwesome className="fab fa-searchengin" onClick={this.handleClickSearchIcon}></FontAwesome>
                    </SearchBarContainer>
                </MainPageSearchContainer>
            </BrowserRouter>
        )
    }
}

export default withRouter(Navbar)