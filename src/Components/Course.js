import React from 'react'
import axios from 'axios'
import base_url from './../Api/BootApi'

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { toast} from 'react-toastify';

const Course = ({course,update}) =>{

  const deleteCourse = (data) =>{
    axios.delete(`${base_url}/courses/${data}`).then(
      (response) =>{
          toast.success("Deleted Sucessfully")
          update(data);
      },
      (error) =>{
        toast.error("Failed to delete")
      })
  }


  const updatingCourse = () =>{
    axios.update(`${base_url}/courses`).then(
      (response) =>{

      },
      (error) =>{
        toast.error("Failed to Update");

      }
    )
  }

  return (
    <div>
      <Card
        style={{ marginBottom: "20px", width: "40vw", marginLeft: "180px" }}
      >
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold"> {course.title}</CardTitle>
          <CardText>{course.desc}</CardText>
        </CardBody>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            marginRight: "10px",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "4px",
            border: "none",
            marginBottom: "15px",
            paddingTop: "6px",
            fontWeight: "500",
            backgroundColor: "#6EC72D",
            paddingBottom: "6px",
          }}
          onClick={updatingCourse}
        >
          Update
        </button>
        <button
          style={{
            marginLeft: "10px",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "4px",
            marginBottom: "15px",
            border: "none",
            paddingTop: "6px",
            color: "#fff",
            fontWeight: "500",
            backgroundColor: "#E21717",
            paddingBottom: "6px",
          }}
          onClick={() => {
            deleteCourse(course.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;