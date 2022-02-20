import React from 'react'
import { ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './ListGroup.css'

const ListGroups = () =>{
  return (
    <div
      style={{
        backgroundColor: "#E07C24",
        height: "80%",
        paddingTop: "15px",
        paddingBottom: "15px",
        marginTop: "75px",
        marginLeft: "80px",
        width: "300px",
        borderRadius: "12px",
      }}
    >
      <ul>
          <Link tag ="a" className="a" to="/" action>
            Home
          </Link>

          <Link tag ="a" className="a" to="/add-course" action>
            Add Course
          </Link>
     
          <Link tag ="a" className="a" to="/view-courses" action>
            View Course
          </Link>

          <Link tag ="a" className="a" to="!#" action>
            About Us
          </Link>

          <Link tag ="a" className="a" to="!#" action>
            Contact Us
          </Link>
 
      </ul>
    </div>
  );
}

export default ListGroups;