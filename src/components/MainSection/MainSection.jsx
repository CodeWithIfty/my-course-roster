import Courses from "../Courses/Courses";
import Sidebar from "../Sidebar/Sidebar";

const MainSection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row mt-7 xl:gap-2 px-5">
      <Courses/>
      <Sidebar/>
    </div>
  )
}

export default MainSection;
