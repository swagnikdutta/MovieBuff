import React, { useState } from 'react'

import {
    SliderContainer,
    SliderContent,
    Slide,
    Arrow,
    DotContainer,
    Dot
} from './style'

import carousel1 from '../../images/carousel1.jpg'
import carousel6 from '../../images/carousel6.jpg'
import carousel3 from '../../images/carousel3.jpg'
import carousel4 from '../../images/carousel4.jpg'
import carousel7 from '../../images/carousel7.jpg'

const images = [
    carousel1, carousel6, carousel3, carousel4, carousel7
]

const Slider = () => {
   const getWidth = () => window.innerWidth

   const [ state, setState] = useState({
       activeIndex: 0,
       translate: 0,
       transition: 0.45
   })
    
   const { translate, transition, activeIndex } = state

   const nextSlide = () => {
    if(activeIndex === images.length - 1){
        return setState({
            ...state,
            activeIndex: 0,
            translate: 0
        })
    }

    setState({
        ...state,
        activeIndex:  activeIndex + 1,
        translate: (activeIndex + 1) * getWidth()
    })
}

   const prevSlide = () => {
       if(activeIndex === 0){
           return setState({
               ...state,
              activeIndex: (images.length - 1),
              translate: (images.length - 1) * getWidth()
           })
       }

       setState({
           ...state,
           activeIndex:  activeIndex - 1,
           translate: (activeIndex - 1) * getWidth()
       })
       
   }

    return(
        <SliderContainer> 
            <SliderContent 
               translate={translate}
               transition={transition}
               width={getWidth() * images.length}
            >
            {
                images.map((item,i)=> (
                   <Slide key={item+i} content={item}/> 
                ))
            }
            </SliderContent>
            <Arrow direction='right' onClick={nextSlide}><i className="fas fa-caret-right"></i></Arrow>
            <Arrow direction='left' onClick={prevSlide}><i className="fas fa-caret-left"></i></Arrow>
            <DotContainer>
            {
                images.map((item,i) => (
                    <Dot key={item} active={activeIndex === i}/>
                ))
            }
            </DotContainer>
        </SliderContainer>
    )
}

export default Slider