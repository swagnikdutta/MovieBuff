import styled from 'styled-components'

export const MainPageSearchContainer = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
`
export const MainPageTitle = styled.div`
  font-size: 28px;
  padding-left: 20px;
  color: #a72693;
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

  &:hover{
    border: inherit;
  }
`
export const FontAwesome = styled.i`
  font-size: 22px;
  position: absolute;
  top: 14px;
  right: 10px;
  color: #24a19c;
`