import React from 'react'
import { Container, TransactionContainer, PlusIcon } from './styles'

import { transactions } from './placeholder'

export default function History() {
    return (
        <Container>

            {
                transactions.map(({ id, tipo, quantidade, data, descricao, categoria }) => (
                    <Transaction />

                ))
            }
        </Container>
    )
}

export function Transaction() {
    return (
        <>
            <TransactionContainer>
                <div>
                    <PlusIcon />
                </div>
                <div>
                    <p className="title">Pulmão de fumante</p>
                    <p className="description">7 maços da marlboro</p>
                </div>
                <div>
                    <p className="valor">R$ 70.00</p>
                    <p className="type">Gasto</p>
                </div>
            </TransactionContainer>
        </>
    )
}

