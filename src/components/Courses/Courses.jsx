import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
const [courses, setCourses] = useState([]);
useEffect(() =>{
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
}, [])
console.log(courses)
  return (
    <div className="grid grid-cols-3 gap-3 w-[70%]">
      {
        courses.map(course => <Course key={course.slug} course={course}/>
        )
      }
    </div>
  )
}

export default Courses;
