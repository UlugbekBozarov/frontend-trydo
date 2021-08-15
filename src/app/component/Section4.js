import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'

import '../../assets/styles/_section_4.scss'

const Section4 = () => {
    const [s4] = useState([
        {
            title: 992,
            text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
        },
        {
            title: 575,
            text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
        },
        {
            title: 69,
            text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
        }
    ])

    return (
        <section id="section_4">
            <Container>
                <h2>Our Fun Facts</h2>
                <Row className="m-0">
                    {
                        s4.map((s, i) => {
                            return (
                                <Col xs="12" sm="6" md="4" key={i}>
                                    <div className="d-flex justify-content-center">
                                        <h1>{s.title}</h1>
                                    </div>
                                    <p>{s.text}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Section4
