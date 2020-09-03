import styled from 'styled-components'
import { FiPlusCircle } from 'react-icons/fi'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const TransactionContainer = styled.div`
    color: #FFF;
    background-color: #333333;
    border-radius: 0.5em;
    
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;

    div{
        margin: 0 4px; 
    }

    p {
        margin: -5px 8px;
    }

    p.title {
        font-size: 20px;
        font-weight: bold;
    }

    p.description {
        font-size: 18px;
        opacity: 0.7;
    }

    p.valor {
        font-size: 20px;
        font-weight:bold;
    }

    p.type {
        font-size: 18px;
        opacity: 0.7;
    }
`

export const PlusIcon = styled(FiPlusCircle)`
    height: 21px;
    width: 21px;
`