import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropType from 'prop-types'

const Courses = ({showSelectedCourse}) => {
const [courses, setCourses] = useState([]);
useEffect(() =>{
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
}, [])

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 xl:w-[80%] md:w-[60%] lg:w-[70%]">
      {
        courses.map(course => <Course 
            key={course.slug}
            course={course}
            showSelectedCourse= {showSelectedCourse}
            />
        )
      }
    </div>
  )
}

Courses.propTypes ={
    showSelectedCourse: PropType.func,
}

export default Courses;
