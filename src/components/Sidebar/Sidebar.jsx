import PropType from 'prop-types'
const Sidebar = ({selectedCourse, totalCredit, totalPrice, remainingHour}) => {
  return (
    <div className="lg:w-[30%] xl:w-[20%] md:w-[40%] mb-5 ">
        <div className="bg-white p-3 rounded-lg">
          <h1 className="text-lg text-center font-semibold px-4 border-b-2 p-2  mx-auto text-[#2F80ED]">Credit Hour Remaining {remainingHour} hr</h1>
          <div className="mt-3 border-b-2 pb-4">
          <h1 className="text-xl font-bold px-4" >Course Name</h1>
              <ul className="list-decimal text-sm px-8 mt-3 font-medium text-gray-600">
                {
                  selectedCourse.map((course, idx) => <li key={idx}>{course}</li>)
                }
              </ul>
          </div>
          <div className="p-3 border-b-2">
          <h1 className="text-md font-medium" >Total Credit Hour : {totalCredit}</h1>
          </div>
          <div className="p-3">
          <h1 className="text-md font-bold" >Total Price : {totalPrice} USD</h1>
          </div>
      </div>
    </div>
  )
}

Sidebar.propTypes ={
  selectedCourse: PropType.array,
  totalCredit: PropType.number,
  totalPrice: PropType.number,
  remainingHour: PropType.number

}

export default Sidebar;
