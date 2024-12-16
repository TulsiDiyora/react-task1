import { Route, Routes } from 'react-router'
import './App.css'
import Task1Form from './Components/Task1Form/Task1Form'
import Task1View from './Components/Task1View/Task1View'
import Task1Edit from './Components/Task1Edit/Task1Edit'
import { Provider } from 'react-redux'
import store from './store'
import PageNot from './assets/pagenot2.png'
import Task1Delete from './Components/Task1Delete/Task1Delete'

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Task1Form />}></Route>
          <Route path='/view' element={<Task1View />}></Route>
          <Route path='/edit' element={<Task1Edit />}></Route>
          <Route path='/deleteRec' element={<Task1Delete />}></Route>
          <Route path='*' element={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <img src={PageNot} width={"900px"} />
            </div>
          } ></Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
