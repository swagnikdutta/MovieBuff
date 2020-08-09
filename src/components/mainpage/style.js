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
  font-size: 32px;
  color:  #a72693;
  font-weight: 400;
  margin:25px 0px;
`
export const Item = styled.div`
  width: 385px;
  height: 350px;
  display: flex;
  flex-direction: column;
  // border:1px solid #c0c0c0;
  // box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.35);
  margin-right: 40px;
  margin-bottom: 70px;

  &:hover{
    background: rgba(0,0,0,0.25);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ItemImage = styled.div`
  width: 385px;
  height: 280px;
  position: relative;
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

export const Img = styled(Image)`
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  backdrop-filter: blur(10px);
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