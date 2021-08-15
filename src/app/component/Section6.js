import React, { useState } from 'react'
import { Card, Container } from 'reactstrap'
import '../../assets/styles/_section_6.scss'

const Section6 = () => {
    const [s5] = useState([
        "/images/client/testimonial-1.jpg",
        "/images/client/testimonial-2.jpg",
        "/images/client/testimonial-3.jpg",
        "/images/client/testimonial-4.jpg",
        "/images/client/testimonial-5.jpg",
        "/images/client/testimonial-6.jpg",
        "/images/client/testimonial-7.jpg",
        "/images/client/testimonial-8.jpg"
    ])
    const [active, setActive] = useState(0);
    return (
        <section id="section_6">
            <Container>
                <div className="section_title">
                    <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                    <h6>
                        <span>Fatima Asrafy </span>
                        - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                </div>
                <div className="section_body">
                    {
                        s5.map((s, i) => {
                            return (
                                <Card className={i === active ? "active" : ""} key={i} onClick={() => setActive(i)}>
                                    <img src={s} alt={"client_" + i} />
                                </Card>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default Section6
