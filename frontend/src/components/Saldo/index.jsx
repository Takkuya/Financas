import React from 'react'
import { Button } from 'reactstrap'

import { Container, ButtonContainer, CategoryIcon, MinusIcon, PlusIcon } from './styles'

export default function Saldo() {
    return (
        <Container>
            <h1>Seu saldo é:</h1>
            <p>R$ 9021</p>
            <ButtonContainer>
                <Button color="danger"><MinusIcon />Gastos</Button>
                <Button color="success"><PlusIcon />Ganhos</Button>
                <Button color="primary"><CategoryIcon />Categoria</Button>
            </ButtonContainer>
        </Container>

    )
}