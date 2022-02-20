package com.spring.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.demo.entities.Course;
import com.spring.demo.services.CourseService;

@CrossOrigin
@RestController
public class MyController {
	
	
	//used to create object of its child class who is implmeting it method.
	@Autowired
	private CourseService courseService;
	
	//for testing
	@GetMapping("/home")
	public String home()
	{
		return "Hello bot";
	}

	
	//get all the courses
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		
		//now we want all the courses in the form of array now
		//we will talk to service layer.
		return this.courseService.getCourses();
		
	}
	
	
	//get individual courses using id.
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseService.getCourses(Long.parseLong(courseId));
	}
	
	//add course.
	
	@PostMapping("/courses")
	public Course add(@RequestBody Course course)
	{
		return this.courseService.add(course);
	}
	
	//to update the data.
	
	@PutMapping("/courses")
	public Course getUpdate(@RequestBody Course course)
	{
		return this.courseService.getUpdate(course);
	}
	
	//to delete the data
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try {
			 this.courseService.deleteCourse(Long.parseLong(courseId));
			 return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e){
			 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
