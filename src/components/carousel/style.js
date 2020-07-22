import styled from 'styled-components'

export const SliderContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
`

export const SliderContent = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    width: ${props => props.width}px;
    position: relative;
`
export const Slide = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    backgrund-position: center;

`

export const Arrow = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    ${props => props.direction ===  'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;  
    justify-content: center;
    background: #fff;
    border-raius: 50%;
    cursor: pointer;
    align-items: center;
   
`

export const DotContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Dot = styled.div`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? '#008080':'#fff'};
`