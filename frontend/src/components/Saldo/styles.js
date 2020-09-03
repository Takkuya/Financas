import styled from 'styled-components'
import { FiMinus, FiPlus, FiList } from 'react-icons/fi'

export const Container = styled.div`
    color: #fff;
    padding: 10px 6px;
    background-color: #333; 
    height: 30vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1{
        font-size: 33px;
        font-weight: bold;
    }

    p {
        font-size: 27px;
        font-weight: bold;
    }
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 350px;

`
export const MinusIcon = styled(FiMinus)`
height: 21px;
width: 21px;
`

export const PlusIcon = styled(FiPlus)`
height: 21px;
width: 21px;
`

export const CategoryIcon = styled(FiList)`
height: 21px;
width: 21px;
`
