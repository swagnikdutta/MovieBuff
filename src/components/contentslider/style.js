import styled from 'styled-components'

export const SlideCastImage = styled.div`
  width: 800px;
  overflow: hidden;
  position: relative;
`
export const SlideCastImageContent = styled.div`
  display: flex;
  height: 100%;
  transform:  translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: 800px;
`
export const CastImageContainer = styled.div`
  width: 248px;
  height: 345px;
  margin-bottom: 10px;
  margin-right: 20px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const Name = styled.div`
  color: rgba(0,0,0,0.5); 
  font-weight: 600;
`

export const Character = styled.div`
  color: rgba(0,0,0,0.5); 
  font-weight: 600;
  font-size: 12px;
  margin-top: 5px;
`
export const Arrow = styled.div`
    display: flex;
    position: absolute;
    bottom: 18%;
    ${props => props.direction ===  'right' ? `right: 30px` : `left: 15px`};
    height: 25px;
    width: 25px;  
    justify-content: center;
    background: #fff;
    border-raius: 50%;
    cursor: pointer;
    align-items: center;
    border-radius: 50%;
    color: rgba(0,0,0,0.4);   
`