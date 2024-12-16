import React, { useEffect } from 'react';
import { Container, Card, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsncy, getAsncy, serachName, singleAsncy } from '../../Services/Action/studentAction';
import { useNavigate } from 'react-router';
import ErrorImg from '../../assets/error.png';
import Header from '../Header/Header';

function Task1View() {
    const { students, studentt, serachData, searchTerm, isError, errorMsg } = useSelector(state => state.studentReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleEdit = (id) => {
        console.log("id", id);
        
        dispatch(singleAsncy(id));
    };

    const handleDelete = (id) => {

        dispatch(deleteAsncy(id));
        // navigate('/deleteRec')
    };

     // Filter the students based on the search term
     const filteredStudents = searchTerm
     ? serachData.filter((student) =>
           student.name.toLowerCase().includes(searchTerm.toLowerCase()) 
       )
     : students;

     
    useEffect(() => {
        if (studentt) {
            navigate('/edit');
        }
    }, [studentt]);

    return (
        <>
            <Header />
            <Container>
                <h1 className="text-center fw-bold my-4">View</h1>

                {isError ? (
                    <h1 className='text-center '>{errorMsg}</h1>
                ) : (
                    <Row>
                        {filteredStudents.length === 0 ? (
                            <h4 className="text-center mt-5">
                                <img src={ErrorImg}  width={"800px"}/>
                            </h4>
                        ) : (
                            filteredStudents.map((rec, index) => (
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
                                        <Card.Footer className="text-center">
                                            <button className="me-3 btn btn-primary" onClick={() => handleEdit(rec.id)}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => handleDelete(rec.id)}>
                                                Delete
                                            </button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))
                        )}
                    </Row>


                )}
            </Container>
        </>
    );
}

export default Task1View;
