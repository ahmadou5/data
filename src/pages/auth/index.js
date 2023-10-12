export default function Auth() {
  return (
    <div className=" min-h-screen items-center justify-between p-24 py-4 px-4  text-black">
      <div className="w-[97%] h-[500px] py-2 px-2 text-center mt-[80px] shadow-2xl drop-shadow-2xl ml-auto mr-auto rounded-2xl ">
        <div className="mt-4">
          <p className="text-3xl font-extralight mt-[20px]">Login</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold mt-[20px]">
            Dont Have an Account? sign up
          </p>
        </div>
        <div className="mt-[40px]">
          <input
            placeholder="ahmadou@email.com"
            className="py-2 px-2 rounded-md w-[90%] h-12  border-black border-r-gray-950"
            type="email"
          />
        </div>
        <div className="mt-[15px]">
          <input
            placeholder="*******"
            className="py-2 px-2 rounded-md w-[90%] h-12  border-black border-r-gray-950"
            type="email"
          />
        </div>
        <div>
          <div className="mt-[40px] mb-10 flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-white  bg-black rounded-lg  w-32 h-8">
            <p className="text-sm  mt-auto mb-auto font-light ml-auto mr-auto">
              {'Login'}
            </p>
          </div>
        </div>
        <div className="w-[90%] ml-auto mr-auto bg-black h-[2px]"></div>
        <div className='mt-[30px] flex  font-light ml-auto mr-auto'>
           <img src='./google.png' className=' className="text-sm rounded-full h-14 w-14 font-light ml-auto mr-auto'/>
        </div>
      </div>
    </div>
  );
}
