import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { PiTrashSimpleLight } from "react-icons/pi";

const CompletedTasksCard = () => {
  const { tasksDone, deleteTask } = useContext(TasksContext);
  return (
    <div className="w-[90%] lg:w-[70%] m-auto mt-12">
      <h2 className="text-white text-[36px] mb-10">
        All Completed Tasks - {tasksDone.length}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {tasksDone.length > 0 ? (
          tasksDone.map((task, index) => {
            return (
              <div key={index} className="bg-[#15101C] p-6 rounded-xl mb-2">
                <div className="text-[#78CFB0] bg-[#1D1825] rounded-xl p-5 shadow-lg h-[200px] max-h-[200px] hover:scale-[1.05] transition-transform duration-300 ease-in-out flex justify-between relative overflow-hidden">
                  <span className="w-[70%] break-words overflow-y-auto custom-scrollbar">
                    {task.title}
                  </span>

                  <div className="flex space-x-2 justify-center items-end mt-4">
                    <PiTrashSimpleLight
                      size={24}
                      onClick={() => deleteTask(task.title)}
                      className="text-[#9E78CF] cursor-pointer hover:text-[#3E1671]"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white text-[14px]">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTasksCard;
