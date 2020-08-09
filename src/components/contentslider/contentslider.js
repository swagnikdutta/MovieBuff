import React from 'react'

import {
    SlideCastImage,
    SlideCastImageContent,
    CastImageContainer,
    Image,
    Name,
    Character,
    Arrow,
} from './style'

class ContentSlider extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        disableNext: false,
        disablePrev: false,
      }
    }

    nextSlide = () => {
      const { activeIndex, disablePrev } = this.state

      if( activeIndex === 7){
        this.setState({
            disableNext : true
        })
      }
      else{
        if( disablePrev === true){
            this.setState({
                disablePrev : false
            })
        }

        this.setState({
            activeIndex: activeIndex + 1,
            translate : (activeIndex + 1 ) * 268
        })
      }
    }

    prevSlide = () => {
        const { activeIndex, disableNext } = this.state

        if( activeIndex === 0){
            this.setState({
                disablePrev: true
            })
        }
        else{
            if( disableNext === true ){
               this.setState({
                   disableNext : false
               })
            }

            this.setState({
                activeIndex: activeIndex - 1,
                translate: (activeIndex - 1) * 268
            })
        }

    }

    render(){
        const { sliderArray } = this.props
        const { translate, transition, activeIndex, disableNext, disablePrev} = this.state
        return(
            <SlideCastImage>
                <SlideCastImageContent
                  translate={translate}
                  transition={transition}
                >
                {
                    sliderArray && sliderArray.map(item=>{
                        return(
                                <div>
                                <CastImageContainer><Image src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} /></CastImageContainer>
                                <Name>{item.name}</Name>
                                <Character>as {item.character}</Character>
                                </div>
                        )
                    })
                }
                </SlideCastImageContent>
                {!disableNext && <Arrow direction='right' onClick={this.nextSlide}><i class="fa fa-chevron-right" aria-hidden="true"></i></Arrow>}
                {!disablePrev &&<Arrow direction='left' onClick={this.prevSlide}><i class="fa fa-chevron-left" aria-hidden="true"></i></Arrow>}

            </SlideCastImage>
        )
    }
}

export default ContentSlider