import React,{ useState,useEffect } from 'react';
import Course from './Course';
import base_url from './../Api/BootApi'
import axios from 'axios'
import { toast } from 'react-toastify';

const Courses = () =>{

  //It is similar to componenetDid Mount and componenetDid Update.
  useEffect(() =>{
    document.title = 'Courses'
  },[])  //If you want that at time of componenetDid Update it will not work then pass an empty array.


  //function to call server
  const getAllCoursesFromServer = () =>{
    axios.get(`${base_url}/courses`).then(
      (response) =>{
            //success
            console.log(response);
            // toast.success("successfully Loaded")
            setCourses(response.data);
      },
      (error) =>{
        console.log(error)
          toast.error("Failed to load")
      }
    )
  };

  //calling function.

  useEffect(() =>{
    getAllCoursesFromServer();
  },[])

  const [courses, setCourses] = useState([
    // {title: "Java Programming",desc: "This will clear your basics"},
    // {title: "Python Programming",desc: "This will clear your basics"},
    // {title: "C++ Programming",desc: "This will clear your basics"}S
  ]);

  //function to update the list of courses beaciuse of couses which get deleted

  const updatedCourse = (id) =>{
    setCourses(courses.filter(c => c.id !== id));
  }
  return (
    <div className="text-center">
      <h1 style={{ color: "white" }}>All Courses</h1>
      <p style={{ color: "white" }}>List of all free Coures</p>

      {courses.length > 0
        ? courses.map((item) => <Course key ={item.id}course={item} update ={updatedCourse} />)
        : "No Courses Available"}
    </div>
  );
}


export default Courses;