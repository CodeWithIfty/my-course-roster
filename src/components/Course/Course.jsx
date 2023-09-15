import PropTypes from 'prop-types'
import {BsCurrencyDollar, BsBook} from 'react-icons/bs'

const Course = ({course, showSelectedCourse, selectedCourse}) => {
 const {slug, course_name, course_img, price, credit} = course;

 const handleSelectBtnTxt = () => {
  if(selectedCourse.includes(course_name)){
    return <p>Remove</p>
  }
    return <p>Select</p>
}


  return (
    <div className="card w-72 md:w-80 bg-base-100 shadow-xl mx-auto">
  <figure className='mt-3'><img src={course_img} alt={slug}/></figure>
  <div className="card-body">
    <h2 className="card-title text-lg">{course_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className='flex justify-between items-center py-2'>
        <div className='flex items-center gap-2 text-lg '>
        <BsCurrencyDollar/>
        <p className='text-gray-500'>Price: {price}</p>
        </div>
        <div className='flex items-center gap-2 text-lg'>
            <BsBook/>
            <p className='text-gray-500'>Credit: {credit} </p>
        </div>
    </div>
    <div className="card-actions justify-end">
      <button className="p-2 bg-[#2F80ED] w-full rounded-lg text-white text-lg font-semibold" onClick={() =>showSelectedCourse(course)}>
        {
          handleSelectBtnTxt()
        }
        </button>
    </div>
  </div>
</div>
  )
}
Course.propTypes ={
    course: PropTypes.object,
    showSelectedCourse: PropTypes.func
  }
export default Course
