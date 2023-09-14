const Sidebar = () => {
  return (
    <div className="lg:w-[30%] xl:w-[20%] md:w-[40%] mb-5 ">
        <div className="bg-white p-3 rounded-lg">
          <h1 className="text-xl text-center font-semibold px-4 border-b-2 p-2 w-5/6 mx-auto text-[#2F80ED]">Credit Hour Remaining 7 hr</h1>
          <div className="mt-3 border-b-2 pb-4">
          <h1 className="text-xl font-bold px-4" >Course Name</h1>
              <ul className="list-decimal text-sm px-8 mt-3 font-medium text-gray-600">
                <li>Introduction to C Programming</li>
                <li>Introduction to Algorithms</li>
                <li>Introduction to C Programming</li>
              </ul>
          </div>
          <div className="p-3 border-b-2">
          <h1 className="text-md font-medium" >Total Credit Hour : 13</h1>
          </div>
          <div className="p-3">
          <h1 className="text-md font-bold" >Total Price : 48000 USD</h1>
          </div>
      </div>
    </div>
  )
}

export default Sidebar;
