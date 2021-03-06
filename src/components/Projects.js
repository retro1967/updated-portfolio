import React, { Component } from 'react'
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';

import Footer from './Footer';
import * as featured from '../assets/images/space.jpg';
import * as car from '../assets/images/car.jpg'
import * as remote from '../assets/images/remote.jpg';

class Projects extends Component {
    render() {

        const projects = [
            {
                name: 'Remote Social',
                link: 'https://github.com/clstanton/remote-social/tree/develop',
                description: 'Users can search for movies and save them to their watchlist. Demonstrates complete use of the MERN Stack.',
                technologies: 'React, MongoDB, GraphQL, Apollo, and Bootstrap.',
                image: remote
            },
            {
                name: 'NEOO',
                link: 'https://github.com/retro1967/NEOO',
                description: 'Track Near-Earth-Orbiting-Objects on any date to see information and hazard level.',
                technologies: 'jQuery, Javascript, NASA\'s NeoWS API, Bootstrap.',
                image: featured
            },
            {
                name: 'Motor Services',
                link: 'https://github.com/retro1967/motor-services',
                description: 'Keep track of maintenance issues using the logbook or see which maintenance needs to be done based on your mileage.',
                technologies: 'Express, Handlebars.js, MySQL, Node.js.',
                image: car
            }
        ];

        return (
            <Container className="project-container" fluid>
                <Row className="project-row">
                    <Col className="display-3 project-header">Projects</Col>
                </Row>
                <Row className="proj-row">
                    <CardColumns lg='4' md='6' sm='12'>
                    {projects.map(thing => (
                        <Col className="projects-column">
                            <Card className="proj-col">
                                <Card.Img className="proj-img" src={thing.image} alt={thing.title} variant="top" />
                                <Card.Body>
                                <Card.Title className="proj-title"><a href={thing.link} rel="noopener noreferrer" target="_blank" className="display-4">{thing.name}</a></Card.Title>
                                <Card.Text className="lead">
                                    <p className="lead">{thing.description}</p>
                                </Card.Text>
                                <Card.Text className="lead">
                                <p className="lead">Features: <span className="bolded">{thing.technologies}</span></p>
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        
                    ))}
                    </CardColumns>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Projects
