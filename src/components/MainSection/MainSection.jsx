import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";

const MainSection = () => {
  return (
    <div className="container mx-auto flex">
      <Courses/>
      <Sidebar/>
    </div>
  )
}

export default MainSection;
