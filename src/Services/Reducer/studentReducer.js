const initial = {
    students: JSON.parse(localStorage.getItem("data")) || [],
    studentt: null,
    serachData: JSON.parse(localStorage.getItem("data")) || [],
    searchTerm: '',
    isLoading: false,
    isError: false,
    errorMsg: 'soming error occured',
    deletedStudents: JSON.parse(localStorage.getItem("deletedStudents")) || [],
};

const studentReducer = (state = initial, action) => {
    switch (action.type) {
        case "setData":
            const allData = action.payload;

            localStorage.setItem("data", JSON.stringify(allData));
            return {
                ...state,
                students: allData,
                studentt: null,
                isLoading: false,
                isError: false,
                serachData: allData,
            };
        case "setSingleData":
            return {
                ...state,
                studentt: action.payload,
                isLoading: false,
                isError: false
            }
        case "setSerach":
            const filtered = state.students.filter((student) =>
                student.name.toLowerCase().includes(action.payload.toLowerCase()) 
            );
            return {
                ...state,
                serachData: filtered,
                searchTerm: action.payload, 
            };
        case "setDelete":
            const updatedStudents = state.students.filter(student => student.id !== action.payload);
            const deletedStudent = state.students.find(student => student.id === action.payload);

            const updatedDeletedStudents = [...state.deletedStudents, deletedStudent];

            localStorage.setItem("data", JSON.stringify(updatedStudents));            
            localStorage.setItem("deletedStudents", JSON.stringify(updatedDeletedStudents));

            return {
                ...state,
                students: updatedStudents,
                deletedStudents: updatedDeletedStudents,
            };

        case "setError":
            return {
                ...state,
                isError: true,
                errorMsg: "Network error"
            }

        default:
            return state;
    }
};

export default studentReducer;
