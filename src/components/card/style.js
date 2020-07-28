import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CardContent = styled.div`
  width: 600px;
  height: 350px;
  margin-right:70px;
  margin-bottom: 70px;
  display: flex;
  box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);
`
export const CardImage = styled.div`
  flex: 1;
`
export const Image = styled.img`
   width: 100%;
   height: 100%;
`

export const CardDescription = styled.div`
  flex: 1;
  color: rgba(0,0,0,0.7);
  padding: 20px;

`

export const CardTitle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;
`

export const CardStar = styled.div`
     display: flex;
     padding:10px 0px;
`

export const CardRating = styled.i`
     color: ${props => props.active ? `rgba(3,201,169,1)`:`rgba(0,0,0,0.1)`}
`

export const CardGenre = styled.div``

export const CardGenreItem = styled.div``

export const CardOverview = styled.div`
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  margin-top: 10px;
`