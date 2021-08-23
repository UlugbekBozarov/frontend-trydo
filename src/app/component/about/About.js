import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './about.scss'

const About = () => {
    return (
        <section id="about">
            <Container>
                <Row className="m-0">
                    <Col sm="12" lg="5">
                        <div>
                            <img className="w-100" src="/images/about/about-3.jpg" alt="user" style={{borderRadius: "10px"}} />
                        </div>
                    </Col>
                    <Col sm="12" lg="7" className="d-flex align-items-center my-4">
                        <Row className="m-0 p-0 p-lg-5">
                            <Col sm="12" lg="12">
                                <h1>About</h1>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                </p>
                            </Col>
                            {
                                [...new Array(2)].map((a, i) => {
                                    return (
                                        <Col sm="12" lg="6" className="mt-3 mt-lg-5" key={i}>
                                            <h2>Who we are</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
