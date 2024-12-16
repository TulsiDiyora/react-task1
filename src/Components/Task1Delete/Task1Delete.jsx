    import React from 'react'
    import { Card, Col, Container, Row } from 'react-bootstrap'
    import { useSelector } from 'react-redux';
    import { useNavigate } from 'react-router';
    import Header from '../Header/Header';

    function Task1Delete() {

        const { deletedStudents } = useSelector(state => state.studentReducer);

        // const navigate = useNavigate();

        return (
            <>
            <Header />
                <Container>
                    <Row className="mt-4">
                        <h2 className="text-center py-4 fw-bold">Deleted Students</h2>
                        {deletedStudents.length > 0 ? (
                            deletedStudents.map((rec, index) => (
                                <Col key={index} md={4} className="mb-4">
                                    <Card>
                                        <Card.Img variant="top" src={rec.imge || 'https://via.placeholder.com/300x300?text=No+Image+Available'} style={{ height: '200px', objectFit: 'cover' }} />
                                        <Card.Body>
                                            <Card.Text>
                                                <strong>Name:</strong> {rec.name} <br />
                                                <strong>Email:</strong> {rec.email} <br />
                                                <strong>Phone:</strong> {rec.phone} <br />
                                                <strong>Address:</strong> {rec.address}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <h4 className="text-center">No deleted students.</h4>
                        )}
                    </Row>
                </Container>
            </>
        )
    }

    export default Task1Delete
