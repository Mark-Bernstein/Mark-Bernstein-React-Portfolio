import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PortfolioCard from "../components/PortfolioCard"
import Header from "../components/Header/index"
import musicConnoisseurs from "../images/musicConnoisseursScreenshot.JPG"
import burger from "../images/burgerScreenshot.JPG"
import noteTaker from "../images/noteTakerScreenshot.JPG"
import cityScout from "../images/cityScoutScreenshot.jpg"
import weatherDashboard from "../images/weatherDashboardScreenshot.jpg"
import workDayPlanner from "../images/dayPlannerScreenshot.jpg"

function Portfolio() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Header header="Portfolio" />
                </Col>
            </Row>
            <Row class="portfolio">
                <Col size="md-6 sm-12">
                    <PortfolioCard href="https://music-connoisseurs.herokuapp.com/" src={musicConnoisseurs} alt="music-connoisseurs" title="music-connoisseurs" />
                </Col>
                <Col size="md-6 sm-12">
                    <PortfolioCard href="https://mvc-burger-app.herokuapp.com/" src={burger} alt="burger" title="burger" />
                </Col>
                <Col size="md-6 sm-12">
                    <PortfolioCard href="https://note-taker-web-app.herokuapp.com/" src={noteTaker} alt="note-taker" title="note-taker" />
                </Col>
                <Col size="md-6 sm-12">
                    <PortfolioCard href="https://mark-bernstein.github.io/cityScout/" src={cityScout} alt="cityScout" title="cityScout" />
                </Col>
                <Col size="md-6 sm-12">
                    <PortfolioCard href="https://mark-bernstein.github.io/weather-dashboard/" src={weatherDashboard} alt="weather-dashboard" title="weather-dashboard" />
                </Col>
                <Col size="md-6 sm-12">
                    <PortfolioCard href="https://mark-bernstein.github.io/work-day-planner/" src={workDayPlanner} alt="work-day-planner" title="work-day-planner" />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;