import React, { useState } from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import '../../assets/styles/_section_5.scss'

const Section5 = () => {
    const [s5] = useState([
        {
            img: "/images/team/team-01.jpg",
            name: "Jone Due",
            profession: "Sr. Web Developer"
        },
        {
            img: "/images/team/team-02.jpg",
            name: "Jone Due",
            profession: "Sr. Web Developer"
        },
        {
            img: "/images/team/team-03.jpg",
            name: "Jone Due",
            profession: "Sr. Web Developer"
        },
        {
            img: "/images/team/team-04.jpg",
            name: "Jone Due",
            profession: "Sr. Web Developer"
        },
        {
            img: "/images/team/team-05.jpg",
            name: "Jone Due",
            profession: "Sr. Web Developer"
        },
        {
            img: "/images/team/team-06.jpg",
            name: "Jone Due",
            profession: "Sr. Web Developer"
        }
    ])
    return (
        <section id="section_5">
            <Container>
                <Row className="title m-0">
                    <Col xs="12" md="6">
                        <h1>Skilled Team</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Col>
                </Row>
                <Row className="m-0 mt-5">
                    {
                        s5.map((s, i) => {
                            return (
                                <Col xs="12" md="6" lg="4" className="mb-4" key={i}>
                                    <Card className="border-0">
                                        <img className="w-100 rounded" src={s.img} alt="team_member" />
                                        <CardBody>
                                            <CardTitle>
                                                <h4>{s.name}</h4>
                                            </CardTitle>
                                            <CardText>
                                                <p>{s.profession}</p>
                                            </CardText>
                                        </CardBody>
                                        <ul className="messenger">
                                            <li className="1">f</li>
                                            <li className="2">in</li>
                                            <li className="3">t</li>
                                            <li className="4">i</li>
                                        </ul>
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

export default Section5
