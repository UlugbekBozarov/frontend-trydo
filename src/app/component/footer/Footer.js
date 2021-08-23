import React from 'react'
import { Col, Row, Button, List, ListInlineItem } from 'reactstrap'
// import { Container } from 'reactstrap'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <Row className="align-items-end m-0">
                <Col className="p-0" xs="12" xl="6">
                    <div className="footer_left">
                        <div className="inset" style={{ zIndex: "9999", backgroundImage: "url('/images/footer/big-logo.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right" }}>
                            <p>Ready To Do This</p>
                            <h2>Let's get<br/> to work</h2>
                            <Button>Contact us</Button>
                        </div>
                    </div>
                </Col>
                <Col className="p-0" xs="12" xl="6">
                    <div className="footer_right">
                        <Row className="m-0">
                            <Col xs="12" sm="6">
                                <h4>Quick Link</h4>
                                <List className="p-0" type="none">
                                    <ListInlineItem className="w-100">Work</ListInlineItem>
                                    <ListInlineItem className="w-100">About</ListInlineItem>
                                    <ListInlineItem className="w-100">Let's Talk</ListInlineItem>
                                </List>
                            </Col>
                            <Col xs="12" sm="6">
                                <h4>Say Hello</h4>
                                <List className="p-0" type="none">
                                    <ListInlineItem className="w-100">admin@example.com</ListInlineItem>
                                    <ListInlineItem className="w-100">hr@example.com</ListInlineItem>
                                    <ListInlineItem className="w-100">
                                        <List className="messenger p-0">
                                            <ListInlineItem>fa</ListInlineItem>
                                            <ListInlineItem>in</ListInlineItem>
                                            <ListInlineItem>t</ListInlineItem>
                                        </List>
                                    </ListInlineItem>
                                </List>
                            </Col>
                            <Col xs="12">
                                <div className="ff mt-4">
                                    <p>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer
