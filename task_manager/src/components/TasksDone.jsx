import React, { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { PiTrashSimpleLight } from "react-icons/pi";

const TasksDone = () => {
  const { tasksDone, deleteTask } = useContext(TasksContext);

  return (
    <div>
      <h3 className="text-white mt-10 mb-4 text-[16px]">
        Done - {tasksDone.length}
      </h3>
      <div>
        {tasksDone.length > 0 ? (
          tasksDone.map((task, index) => (
            <div key={index} className="bg-[#15101C] p-6 rounded-xl mb-2">
              <div className="text-[#78CFB0] line-through flex justify-between items-center">
                <span className="w-[70%] break-words overflow-y-auto">
                  {task.title}
                </span>

                <div className="flex justify-center items-center gap-3">
                  <PiTrashSimpleLight
                    size={24}
                    onClick={() => deleteTask(task.title)}
                    className="text-[#9E78CF] cursor-pointer hover:text-[#3E1671]"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-[14px]">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TasksDone;
