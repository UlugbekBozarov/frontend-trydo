import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Button } from 'reactstrap'
import './sidebar.scss'

const Sidebar = () => {
    // let location = useLocation();
    const [links] = useState([
        {
            path: "header",
            link: "Home"
        },
        {
            path: "services",
            link: "Service"
        },
        {
            path: "about",
            link: "About"
        },
        {
            path: "portfolio",
            link: "Portfolio"
        },
        {
            path: "skilled_team",
            link: "Team"
        },
        {
            path: "testimonial",
            link: "Testimonial"
        },
        {
            path: "our_portfolio",
            link: "Blog"
        },
        {
            path: "contact",
            link: "Contact"
        }
    ])
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <nav id="sidebar">
            <Container>
                <Navbar color="faded" light expand="lg" >
                    <NavbarBrand href="/" className="mr-auto">
                        <img src="/images/sidebar/logo.png" alt="logo" />
                    </NavbarBrand>
                    <div className="d-flex align-items-center">
                        <Button className="d-lg-none mx-2 btn_buy_now" outline color="danger">Buy Now</Button>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2 border-0" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather featherMenu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </NavbarToggler>
                    </div>
                    <Collapse isOpen={!collapsed} navbar>
                        <div className="close_btn">
                            <Button onClick={toggleNavbar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </Button>
                        </div>
                        <Nav navbar>
                            {
                                links.map((l, i) => {
                                    return (
                                        <NavItem key={i}>
                                            <NavLink href={"#" + l.path} >{l.link}</NavLink>
                                        </NavItem>
                                    )
                                })
                            }
                            <NavItem>
                                <Button className="btn_buy_now" outline color="danger">Buy Now</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </nav>
    )
}

export default Sidebar
