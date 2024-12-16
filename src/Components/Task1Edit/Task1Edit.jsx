import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsncy } from '../../Services/Action/studentAction';
import { useNavigate } from 'react-router';

function Task1Edit() {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        phone: '',
        imge: '',
        address: ''
    })

    const { studentt } = useSelector(state => state.studentReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleForm = (e) => {
        const { name, value } = e.target;

        console.log("SetForm", name, value);

        setFormInput({ ...formInput, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit", formInput);

        dispatch(updateAsncy(formInput))
    }

    useEffect(() =>{
        if(!studentt){

            navigate('/view')

        }
    },[studentt])

    useEffect(() =>{
        if(studentt){

            console.log("editdata");
            
            setFormInput(studentt)

        }
    },[studentt])

    return (
        <>
            <Container>
                <h1 className='text-center fw-bold mt-4'>Edit</h1>
                <form class="row g-3 mt-2" onSubmit={handleSubmit}>
                    <div class="col-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Your Name" name='name' value={formInput.name} onChange={handleForm} />
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder='Enter Your Email' name='email' value={formInput.email} onChange={handleForm} />
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="phone" placeholder='Enter Your Number' name='phone' value={formInput.phone} onChange={handleForm} />
                    </div>
                    <div class="col-6">
                        <label for="imge" class="form-label">Imges</label>
                        <input type="url" class="form-control" id="imge" placeholder="Enter Your Url" name='imge' value={formInput.imge} onChange={handleForm} />
                    </div>
                    <div class="col-12">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" name='address' value={formInput.address} onChange={handleForm} />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Task1Edit
