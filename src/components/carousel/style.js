import styled from 'styled-components'

export const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
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
    bottom: 5%;
    ${props => props.direction ===  'right' ? `right: 25px` : `left: 25px`};
    height: 25px;
    width: 25px;  
    justify-content: center;
    background: #fff;
    border-raius: 50%;
    cursor: pointer;
    align-items: center;
    border-radius: 50%;
    color: #a72693;   
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
    width: 10px;
    height: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'darkgray':'#fff'};
`