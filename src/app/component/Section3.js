import React, { useState } from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row, Button } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import '../../assets/styles/_section_3.scss'

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Section3 = () => {
    const [s3] = useState([
        {
            img: "/images/portfolio/portfolio-1.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        },
        {
            img: "/images/portfolio/portfolio-2.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        },
        {
            img: "/images/portfolio/portfolio-3.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        },
        {
            img: "/images/portfolio/portfolio-4.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        },
        {
            img: "/images/portfolio/portfolio-1.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        },
        {
            img: "/images/portfolio/portfolio-2.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        },
        {
            img: "/images/portfolio/portfolio-3.jpg",
            text: "Development",
            title: "Getting tickets to the big show"
        }
    ])
    return (
        <section id="section_3">
            <Container>
                <Row className="title m-0">
                    <Col>
                        <h1>
                            Our Portfolio
                        </h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </Col>
                </Row>
                <div className="slide">
                    <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                        "clickable": true
                    }} breakpoints={{
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        }
                    }} className="mySwiper">
                        {
                            s3.map((s, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Card>
                                            <img src={s.img} alt={"portfolio_" + i} />
                                            <CardBody>
                                                <CardText>
                                                    {s.text}
                                                </CardText>
                                                <CardTitle>
                                                    {s.title}
                                                </CardTitle>
                                                <Button>Case Study</Button>
                                            </CardBody>
                                        </Card>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Section3
