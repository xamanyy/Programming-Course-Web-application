package com.spring.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.demo.Dao.CourseDao;
import com.spring.demo.entities.Course;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseDao courseDao;

//	List<Course> list;
	
	public CourseServiceImpl()
	{
//		list = new ArrayList<>();
//		
//		list.add(new Course(121,"Maths","Numbers"));
//		list.add(new Course(221,"Science","Compounds"));
	}
		
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		
		return courseDao.findAll();
//		return list;
	}
	
	
	
	//method for searching the course
	public Course getCourses(long courseId)
	{
//		Course temp = null;
//		
//		for(Course c : list)
//		{
//			if(c.getId() == courseId)
//			{
//				temp = c;
//				break;
//			}
//		}
//		return temp;
		
		return courseDao.getOne(courseId);
		
	}

	
	//to update the existing data.
	@Override
	public Course getUpdate(Course course) {
		
		//we are updating the existing data .
		
//		list.forEach(e ->{
//			if(e.getId() == course.getId())
//			{
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//				
//			}
//		});
//		return course;
		
		return courseDao.save(course);
	}
	
	
	
//??to add new data
	@Override
	public Course add(Course course) {
		// TODO Auto-generated method stub
//		list.add(course);
//		return course;
		
		return courseDao.save(course);
	}

	@Override
	public void deleteCourse(long courseId) {
		// TODO Auto-generated method stub
//		list = this.list.stream().filter(e-> e.getId() != courseId).collect(Collectors.toList());
		
		Course entity = courseDao.getOne(courseId);
		courseDao.delete(entity);
	}

}
