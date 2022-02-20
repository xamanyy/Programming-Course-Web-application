package com.spring.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.demo.entities.Course;

public interface CourseDao extends JpaRepository<Course,Long>{

}
