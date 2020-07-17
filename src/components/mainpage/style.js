import styled from 'styled-components'

export const MainPageContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
`

export const MainPageSearchContainer = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom:2px solid #c0c0c0;
  display: flex;
`
export const MainPageTitle = styled.div`
  font-size: 28px;
  padding-left: 20px;
  color: #7CFC00;
  font-weight: 600;
  margin-top:5px;
`
export const SearchBarContainer = styled.div`
  position: relative;
`

export const InputBox = styled.input`
  margin-left: 91px;
  padding: 5px 10px;
  margin-top: 5px;
  width: 650px;
  height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border:1px solid #c0c0c0;;
  border-radius: 10px;
  font-size: 16px;
  text-transform: capitalize;
`
export const FontAwesome = styled.i`
  font-size: 22px;
  position: absolute;
  top: 14px;
  right: 10px;
  color: #24a19c;
`
export const MainPageContentContainer = styled.div`
   padding: 0px 100px;
`

export const MainPageBanner = styled.div`
   padding:20px 0px;
`

export const ImageContainer = styled.div`
  height: 500px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TopRatedContainer = styled.div``

export const TopRatedTitle = styled.div`
  font-size: 28px;
  color:  #7CFC00;
  font-weight: 400;
  margin:20px 0px;
`
export const Item = styled.div`
  width: 385px;
  height: 350px;
  display: flex;
  flex-direction: column;
  // border:1px solid #c0c0c0;
  // box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.35);
  margin-right: 40px;
  margin-bottom: 40px;
  transition: background 2s;

  &:hover{
    background: rgba(0,0,0,0.4);
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ItemImage = styled.div`
  width: 385px;
  height: 280px;
`

export const ItemTitle = styled.div`
  text-align: center;
`

export const Img = styled(Image)`
  object-fit: contain;
`
export const ItemTitleContainer = styled.div`
  background: #f5f5f5;
  padding:10px;
  color: rgba(0,0,0,0.7);
  height: 45px;
  border-bottom: 2px solid rgba(0,0,0,0.3);
  font-weight: 600;
  position: relative;
`
export const ItemYear = styled.div`
`

export const ItemRating = styled.div`
   position: absolute;
   bottom: 5px;
   right: 19px;
   font-size: 17px;
   color: #01a9b4;
`