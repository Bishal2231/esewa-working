import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import './App.css'
import Failure from "./components/Failure"
import Success from "./components/Success"
import PaymentForm from "./components/PaymentForm"

function App() {

  return (
    <Router>
    <>
<Routes>
    <Route path='/' element={<PaymentForm/>}/>
    <Route path='/payment-success' element={<Success/>}/>
    <Route path='/payment-failure' element={<Failure/>}/>



</Routes>
    </>
    </Router>
  )
}

export default App
