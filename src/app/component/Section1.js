import React, { useState } from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import '../../assets/styles/_section_1.scss'

const Section1 = () => {
    const [s1] = useState([
        {
            title: "Business Stratagy",
            text: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            title: "Website Development",
            text: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            title: "Marketing & Reporting",
            text: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            title: "Mobile Development",
            text: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            title: "Marketing & Reporting",
            text: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            title: "Mobile Development",
            text: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        }
    ])
    return (
        <section id="section_1">
            <Container>
                <Row className="m-0">
                    {
                        s1.map((s, i) => {
                            return (
                                <Col xs="12" sm="6" md="6" lg="4" key={i} className="card_container" >
                                    <Card>
                                        <CardBody>
                                            {
                                                i === 0 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cast"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>
                                                ) : i === 1 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                                ) : i === 2 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                ) : i === 3 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                                ) : i === 4 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                                )
                                            }
                                        </CardBody>
                                        <CardBody>
                                            <CardTitle>{s.title}</CardTitle>
                                            <CardText>{s.text}</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Section1
