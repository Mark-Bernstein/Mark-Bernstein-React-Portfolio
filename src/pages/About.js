import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header/index"
import profileImage from "../images/MarkProfilePicture.JPG"

function About() {
    return (
        <Container fluid>
            <Row name="about">
                <Col size="md-12">
                    <Header header="About Me" />
                </Col>
                <Col size="md-4">
                    <img src={profileImage} className="img-fluid profile" alt="Mark Bernstein" />
                </Col>
                <Col size="md-8">
                    <p>
                        After attending Cal State University of San Marcos and receiving a Bachelor's Degree in
                        Visual and Performing Arts,
                        I decided to go back to school again and pursue something I felt to be much more
                        challenging: programming.
                        I then studied computer science at San Diego Mesa College for 2 years with a 3.8GPA.
                        My last major step was deciding to take my learning to the next level by joining the
                        UCSD Coding Bootcamp.
                        In my free time, I love to play guitar, make electronic music, go to the beach, and play
                        volleyball, and of course spend time with friends and family.
                        I am 28 years young and I was born in San Diego, California.
                        Although that is where I still currently live, I do enjoy traveling to new destinations
                        whenever given the chance.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;