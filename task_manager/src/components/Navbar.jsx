import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClouseBtn = () => {
    setMenu(false);
  };

  return (
    <div className="w-[80%] flex justify-between items-center mx-auto py-8">
      <div className="relative">
        <h1 className="text-white text-[46px] font-semibold">TASKS.</h1>
        <p className="text-[#9E78CF] absolute left-[120px] bottom-[-12px] font-semibold text-[20px]">
          DAILY
        </p>
      </div>
      if
      <div className="flex justify-center items-center ">
        <ul className="hidden lg:flex justify-center items-center">
          <li className="px-4 text-white hover:text-[#9E78CF] text-[20px] cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4 text-white hover:text-[#9E78CF] text-[20px] cursor-pointer">
            <NavLink to="/all-tasks-to-do">All Tasks To Do</NavLink>
          </li>
          <li className="px-4 text-white hover:text-[#9E78CF] text-[20px] cursor-pointer">
            <NavLink to="/completed-tasks">Completed Tasks</NavLink>
          </li>
        </ul>
      </div>
      {menu && (
        <div className="fixed inset-0 z-50">
          <div className="fixed top-11 right-[72px] z-[100]">
            <RxCross2
              size={46}
              className="text-white"
              onClick={handleClouseBtn}
            />
          </div>

          <div className="fixed inset-0 bg-[#010001] bg-opacity-75 z-40 flex justify-center items-center">
            <ul className="flex flex-col items-center p-8 rounded-lg space-y-4">
              <li className="py-2 text-[24px] text-white hover:text-[#9E78CF] cursor-pointer">
                Home
              </li>
              <li className="py-2 text-[24px] text-white hover:text-[#9E78CF] cursor-pointer">
                New Task
              </li>
              <li className="py-2 text-[24px] text-white hover:text-[#9E78CF] cursor-pointer">
                All Tasks
              </li>
            </ul>
          </div>
        </div>
      )}
      {!menu && (
        <div className="lg:hidden">
          <SlMenu
            className="text-white"
            size={36}
            onClick={() => setMenu(!menu)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
