import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap'
import Styles from './styles'

export function LoginModal() {
    const [login, setLogin] = useState(false)

    const toggle = () => setLogin(!login)

    return (
        <div>
            <Button color="primary" onClick={toggle}>Login</Button>
            <Modal isOpen={login} toggle={toggle}>
                <ModalHeader toggle={toggle} style={Styles.ModalHeader}>Entrar no Finanças.</ModalHeader>
                <ModalBody style={Styles.ModalBody}>
                    <Form>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="Email" placeholder="Insira seu e-mail.." />

                        <Label for="Password">Senha</Label>
                        <Input type="password" name="Password" placeholder="Insira a sua senha" />
                    </Form>
                </ModalBody>
                <ModalFooter style={Styles.ModalFooter}>
                    <Button color="primary" onClick={toggle}>Entrar</Button>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

export function CadastroModal() {
    const [cadastro, setCadastro] = useState(false)

    const toggle = () => setCadastro(!cadastro)

    return (
        <div>
            <Button color="primary" onClick={toggle}>Cadastro</Button>
            <Modal isOpen={cadastro} toggle={toggle}>
                <ModalHeader toggle={toggle} style={Styles.ModalHeader}>Cadastrar-se no Finanças.</ModalHeader>
                <ModalBody style={Styles.ModalBody}>
                    <Form>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="Email" placeholder="Insira seu e-mail" />

                        <Label for="Username">Nome do usuário</Label>
                        <Input type="text" name="Username" placeholder="Insira seu nome" />

                        <Label for="Password">Senha</Label>
                        <Input type="password" name="Password" placeholder="Insira sua senha" />
                    </Form>
                </ModalBody>
                <ModalFooter style={Styles.ModalFooter}>
                    <Button color="primary" onClick={toggle}>Cadastrar</Button>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}