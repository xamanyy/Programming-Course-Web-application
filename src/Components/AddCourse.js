import React,{useEffect,useState} from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios'
import base_url from './../Api/BootApi'
import { toast } from 'react-toastify';

const AddCourse = () =>{

  useEffect(() =>{
    document.title = 'Add Course';
  })

  const [course,setCourse] = useState({})

  //function to handle the form.
  const formHandle =(e)=>{
    console.log(course)
    postDataIntoSever(course);
    e.preventDefault();
  }

    //creating function to senf the data into server.

    const postDataIntoSever = (data) =>{
        axios.post(`${base_url}/courses`,data).then(
          (response)=>{

            toast.success("Data Sucessfully Added");
          },
          (error)=>{
            console.log(error)
            toast.error("Failed")
          }
        )
    }


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1 style={{ color: "white", marginLeft: "280px", marginTop: "20px" }}>
        Enter the Course Detail
      </h1>
      <Form
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: "1 1 300px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          color: "white",
        }}

        onSubmit={formHandle}
      >
        <FormGroup>
          <label htmlFor="userid">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userid"
            id="userid"
            style={{ width: 600 }}

            onChange ={(e) =>{
              setCourse({...course,id: e.target.value})
            }}

          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title"
            name="title"
            id="title"
            style={{ width: 600 }}

            onChange ={(e) =>{
              setCourse({...course,title: e.target.value})
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="desc">Description</label>
          <Input
            type="textarea"
            name="desc"
            id="desc"
            placeholder="Right here"
            style={{ height: 200, width: 600 }}

            onChange ={(e) =>{
              setCourse({...course,desc: e.target.value})
            }}
          />
        </FormGroup>
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
              paddingTop: "6px",
              backgroundColor: "#23C4ED",
              paddingBottom: "6px",
            }}

            type ="submit"
          >
            Add Course
          </button>
          <button
            style={{
              marginLeft: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              borderRadius: "4px",
              border: "none",
              paddingTop: "6px",
              backgroundColor: "#EDC126",
              paddingBottom: "6px",
            }}

            type ="reset"
          >
            Clear
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddCourse;