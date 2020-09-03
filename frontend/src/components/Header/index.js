import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // NavbarText
} from 'reactstrap';
import { LoginModal, CadastroModal } from '../Modals'

import './styles.css'

export const Header = () => {
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Finanças</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Opção</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Opção</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Opção</NavLink>
                    </NavItem>
                </Nav>
                <LoginModal />
                <CadastroModal />
                {/* <NavbarText>
                    <button className="Botao">Login</button>
                </NavbarText>
                <NavbarText>
                    <button className="Botao">Cadastro</button>
                </NavbarText> */}
            </Navbar>

        </div>
    )
}