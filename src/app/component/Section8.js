import React from 'react'
import { Col, Container, Form, FormGroup, Input, Row, Button } from 'reactstrap'
import '../../assets/styles/_section_8.scss'

const Section7 = () => {
    return (
        <section id="section_8">
            <Container>
                <Row className="row">
                    <Col xs={{size: 12, order: 2}} lg={{size: 6, order: 1}}>
                        <div className="px-0 px-lg-4">
                            <div className="section_title">
                                <h2>Contact Us.</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque
                                </p>
                            </div>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="name" id="your-name" placeholder="Your Name *" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email" name="email" id="your-email" placeholder="Your email *" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="subject" id="subject" placeholder="Write a Subject" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" name="text" id="text" placeholder="Your Message" />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col className="mb-5" xs={{size: 12, order: 1}} lg={{size: 6, order: 2}}>
                        <img className="w-100 rounded" src="/images/about/about-6.jpg" alt="about_6" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section7
