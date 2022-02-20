import React, {useEffect} from 'react'
import { Container,Button } from "reactstrap";
import './Home.css'

const Home = () =>{

  useEffect(() =>{
    document.title = 'Home || Programming Courses'
  })

  return (
    <div className="container">
      <div className="Jumbotron">
        <h1 className="head">Programinng Courses</h1>
        <p className="txt">
          Programming is the process of creating a set of instructions that tell
          a computer how to perform a task. Programming can be done using a
          variety of computer programming languages, such as JavaScript, Python,
          and C++.
        </p>
        <Container>
          <Button className ="btn" color="primary">Start Here</Button>
        </Container>
      </div>
    </div>
  );
}

export default Home;