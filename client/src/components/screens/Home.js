import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Videos from "../videos/Videos";
import Categories from "../categories/Categories";

const Home = () => {
    return (
        <Container>
            <Categories />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                        <Videos />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
