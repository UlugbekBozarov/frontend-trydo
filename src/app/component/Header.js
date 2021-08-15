import React from 'react'
import { Container, Button } from 'reactstrap'
import '../../assets/styles/_header.scss'

const Header = () => {
    return (
        <header id="header">
            <Container>
                <div className="header_block">
                    <div>
                        <h1>Creative</h1>
                        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
                        <div className="d-flex justify-content-center">
                            <Button className="btn_buy_now" outline color="danger">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
