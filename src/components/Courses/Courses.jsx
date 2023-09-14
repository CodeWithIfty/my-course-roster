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
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3 xl:w-[80%] md:w-[60%] lg:w-[70%]">
      {
        courses.map(course => <Course key={course.slug} course={course}/>
        )
      }
    </div>
  )
}

export default Courses;
