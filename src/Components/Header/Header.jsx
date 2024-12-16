import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { serachName } from '../../Services/Action/studentAction';


function Header() {
    
    const { searchTerm } = useSelector(state => state.studentReducer); 
    
        const dispatch = useDispatch();
        const navigate = useNavigate();

    const handleSearch = (e) => {
        const value = e.target.value;

        console.log("value", value);
        
        dispatch(serachName(value)); 
    };


    return (
        <>
            <nav class="navbar navbar-expand-lg header py-3 px-5">
                <div class="container-fluid">
                    <a class="navbar-brand form-title fw-bold" href="#" style={{ fontSize: '30px' }}>Task1</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex mx-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} 
                                onChange={handleSearch}/>
                        </form>
                        <button className='btn header-btn ms-3 fw-bold' onClick={() => navigate('/')}> Add Data</button>
                        <button className='btn header-btn ms-3 fw-bold' onClick={() => navigate('/view')}> View Data</button>
                        <button className='btn header-btn ms-3 fw-bold' onClick={() => navigate('/deleteRec')}> Delete Data</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header



