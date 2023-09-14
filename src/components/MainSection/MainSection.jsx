import { useState } from "react";
import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";

const MainSection = () => {

    const [selectedCourse, setSelectedCourse ] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    const showSelectedCourse = course => {
        const {course_name, price, credit} = course;
        setSelectedCourse([...selectedCourse, course_name]);

        const newTotalCredit = totalCredit + credit;
        setTotalCredit(newTotalCredit)

        const newTotalPrice = totalPrice + price;
        setTotalPrice(newTotalPrice)
        console.log(totalCredit)
    } 

  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row mt-7 xl:gap-2 px-5">
      <Courses 
      showSelectedCourse= {showSelectedCourse}
      />
      <Sidebar
      selectedCourse= {selectedCourse}
      totalCredit={totalCredit}
      totalPrice={totalPrice}
      />
    </div>
  )
}

export default MainSection;
