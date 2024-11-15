import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">Welcome to TechTalks</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
