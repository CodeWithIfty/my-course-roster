import { useState } from "react";
import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";
import Toast from "../Toast/Toast";

const MainSection = () => {

    const [selectedCourse, setSelectedCourse ] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [alert, setAlert] = useState(null);
    const [remainingCredit, setRemainingCredit] = useState(20)

    const showAlert = (message, color) => {
      setAlert({
        message: message,
        color: color
      })
      setTimeout(() =>{
        setAlert(null)
      },2500)
    } 

    

    const showSelectedCourse = course => {

        const {course_name, price, credit} = course;

      let cost;
      if(selectedCourse.includes(course_name)){
            showAlert('You have already selected this Course.', 'bg-[tomato]')
        }else{
            setSelectedCourse([...selectedCourse, course_name]);

            cost = totalCredit + credit;
            setTotalCredit(cost)
             console.log(cost)

            const newTotalPrice = totalPrice + price;
            setTotalPrice(newTotalPrice)

            const newRemainingCredit = remainingCredit - credit;
            setRemainingCredit(newRemainingCredit);

            showAlert("Course Added", 'bg-[green]')
        }

        if(cost > 20 ){
          setSelectedCourse(selectedCourse.filter(selectedCourse => selectedCourse !== course_name))

            setTotalCredit(totalCredit)

            setTotalPrice(totalPrice)

            setRemainingCredit(remainingCredit)
            showAlert("Your credit limit is 20. You can't add this course.", 'bg-[red]')
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
        remainingCredit = {remainingCredit}
      />
      <Toast alert={alert}/>
    </div>
  )
}

export default MainSection;
