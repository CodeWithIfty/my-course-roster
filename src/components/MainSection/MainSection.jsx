import { useState } from "react";
import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";
import Toast from "../Toast/Toast";

const MainSection = () => {

    const [selectedCourse, setSelectedCourse ] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type, color) => {
      setAlert({
        message: message,
        type: type,
        color: color

      })

      setTimeout(() =>{
        setAlert(null)
      },1500)
    } 

    const showSelectedCourse = course => {

        const {course_name, price, credit} = course;

        if(selectedCourse.includes(course_name)){
          setSelectedCourse(selectedCourse.filter(selectedCourse => selectedCourse !== course_name))

          const newTotalCredit = totalCredit - credit;
          setTotalCredit(newTotalCredit)

          const newTotalPrice = totalPrice - price;
          setTotalPrice(newTotalPrice)
          showAlert(course_name, 'has been removed', 'red')
        }else{
          setSelectedCourse([...selectedCourse, course_name]);

          const newTotalCredit = totalCredit + credit;
          setTotalCredit(newTotalCredit)

          const newTotalPrice = totalPrice + price;
          setTotalPrice(newTotalPrice)
          showAlert(course_name, 'has been added', 'green')
        }
        
      } 
      


  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row mt-7 xl:gap-2 px-5">
      <Courses 
      showSelectedCourse= {showSelectedCourse}
      selectedCourse= {selectedCourse}
      />
      <Sidebar
      selectedCourse= {selectedCourse}
      totalCredit={totalCredit}
      totalPrice={totalPrice}
      />
      <Toast alert={alert}/>
    </div>
  )
}

export default MainSection;
