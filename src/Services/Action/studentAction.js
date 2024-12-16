import axios from "axios"

export const addData = (data) => {
    return {
        type: "setData",
        payload: data
    }
}

const singleData = (id) => {
    return {
        type: "setSingleData",
        payload: id
    }
}

export const serachName = (serachh) =>{
    return{
        type: "setSerach",
        payload: serachh

    }
}

// export const serachName = (searchTerm) => {
//     return {
//         type: 'serachName',
//         payload: searchTerm
//     };
// };

export const error = (err) =>{
    return {
        type: "setError",
        payload: err
    }
}

export const deleteData = (id) =>{
    return{
        type: "setDelete",
        payload: id
    }
}
export const stuAsncy = (stuData) => {

    return (dispatch) => {

        axios.post("http://localhost:3003/student", stuData).then((res) => {

            console.log("res", res);
            dispatch(getAsncy())

        }).catch((err) => {

            console.log("err", err);
            dispatch(error(err))

        })

    }
}

export const getAsncy = () => {

    return (dispatch) => {
        axios.get("http://localhost:3003/student").then((res) => {

            console.log("res", res);
            dispatch(addData(res.data))

        }).catch((err) => {
            console.log("err", err);
            dispatch(error(err))

        })
    }
}

export const singleAsncy = (id) => {

    return (dispatch) => {
        axios.get(`http://localhost:3003/student/${id}`).then((res) => {

            console.log("res", res);

            dispatch(singleData(res.data))

        }).catch((err) => {

            console.log("err", err);
            dispatch(error(err))

        })
    }

}

export const updateAsncy = (formInput) => {

    return (dispatch) => {
        axios.put(`http://localhost:3003/student/${formInput.id}`, formInput).then((res) => {

            console.log("res", res);

            dispatch(getAsncy())

        }).catch((err) => {

            console.log("err", err);
            dispatch(error(err))

        })
    }

}

export const deleteAsncy = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3003/student/${id}`).then((res) => {

            console.log("res", res);

            // dispatch(getAsncy())
            dispatch(deleteData(id))

        }).catch((err) => {

            console.log("err", err);
            dispatch(error(err))

        })
    }
}