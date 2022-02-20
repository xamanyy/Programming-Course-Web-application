import './App.css';
import {ToastContainer} from 'react-toastify';
import {Row,Col} from 'reactstrap';
import Home from './Components/Home.js'
import Courses from './Components/Courses';
import AddCourse from './Components/AddCourse';
import Header from './Components/Header'
import ListGroups from './Components/ListGroups';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

 
function App() {
// const btnHandle = () =>{
//   toast("Hello")
// }

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />
        <Row>
          <Col md={4}>
            <ListGroups />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/add-course" element={<AddCourse />} exact />
              <Route path="/view-courses" element={<Courses />} exact />
            </Routes>
            {/* <Home /> */}
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
