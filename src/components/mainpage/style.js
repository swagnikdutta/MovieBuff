import styled from 'styled-components'

export const MainPageContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
`
export const MainPageContentContainer = styled.div`
   padding: 0px 100px;
`
export const MainPageBanner = styled.div`
   height: 500px;
`
export const ImageContainer = styled.div`
  height: 500px;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const TopRatedContainer = styled.div`
`
export const TopRatedTitle = styled.div`
  font-size: 40px;
  color: #ba68c8;
  font-weight: 400;
  margin: 90px 0 40px 0;
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
export const Item = styled.div`
  margin-bottom: 50px;
  box-shadow: 0px 0px 1px #BBBBBB;
  transition: box-shadow 300ms;
  &:hover{
    cursor: pointer;
    background: rgba(0,0,0,0.25);
    box-shadow: 3px 3px 40px #A5A5A5;  
    transition: box-shadow 600ms;
  }
`
export const ItemImage = styled.div`
  width: 385px;
  height: 280px;
  position: relative;
`
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: url(${props => (props.imageUrl)});
  background-size: cover;
  height: 100%;
  width: 100%;
`;
export const Img = styled(Image)`
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
`
export const ItemTitle = styled.div`
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 auto;
  text-align: center;
}
`
export const ItemTitleContainer = styled.div`
  background: #f5f5f5;
  padding:15px;
  color: rgba(0,0,0,0.7);
  min-height: 55px;
  font-weight: 600;
  position: relative;
`
export const ItemYear = styled.div`
  position: absolute;
  bottom: 15px;
  left: 19px;
  font-size: 17px;
  color: rgba(3,201,169,1);
`

export const ItemRating = styled.div`
   position: absolute;
   bottom: 15px;
   right: 19px;
   font-size: 17px;
   color: rgba(3,201,169,1);
`
export const CardRating = styled.i`
     color: ${props => props.active ? `rgba(3,201,169,1)`:`rgba(0,0,0,0.1)`}
`