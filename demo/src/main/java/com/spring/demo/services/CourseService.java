package com.spring.demo.services;

import java.util.List;

import com.spring.demo.entities.Course;

public interface CourseService {
	
	public List<Course> getCourses();
	public Course getCourses(long courseId);
	public Course add(Course course);
	public Course getUpdate(Course course);
	
	public void deleteCourse(long courseId);
}
