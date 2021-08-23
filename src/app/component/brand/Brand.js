import React, { useState } from 'react'
import { Card, Container } from 'reactstrap'
import './brand.scss'

const Brand = () => {
    const [s9] = useState([
        "/images/brand/brand-01.png",
        "/images/brand/brand-02.png",
        "/images/brand/brand-03.png",
        "/images/brand/brand-04.png",
        "/images/brand/brand-05.png",
        "/images/brand/brand-06.png",
        "/images/brand/brand-02.png",
        "/images/brand/brand-03.png",
        "/images/brand/brand-04.png"
    ])
    return (
        <section id="brand">
            <Container>
                <div className="section_block">
                    {
                        s9.map((s, i) => {
                            return (
                                <Card key={i}>
                                    <img src={s} alt={"brand_" + i} />
                                </Card>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default Brand
