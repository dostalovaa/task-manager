import { useContext, useState } from "react";
import { TasksContext } from "../Context/TasksContext";
import { PiTrashSimpleLight } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";
import EditTaskCard from "./EditTaskCard";

const AllTasksCards = () => {
  const { tasks, moveTaskDone, deleteTask, updateTask } =
    useContext(TasksContext);
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const handleEdit = (index) => {
    setEditTaskIndex(index);
  };

  const handleCloseEdit = () => {
    setEditTaskIndex(null);
  };

  const handleSaveEdit = (newTitle) => {
    updateTask(tasks[editTaskIndex].title, newTitle);
  };

  return (
    <div className="w-[90%] lg:w-[70%] m-auto mt-12">
      <h2 className="text-white text-[36px] mb-10">
        Tasks to do - {tasks.length}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <div key={index} className="bg-[#15101C] p-6 rounded-xl mb-2">
                <div className="text-white bg-[#1D1825] rounded-xl p-5 shadow-lg h-[200px] max-h-[200px] hover:scale-[1.05] transition-transform duration-300 ease-in-out flex justify-between relative overflow-hidden">
                  <span className="w-[70%] break-words overflow-y-auto">
                    {task.title}
                  </span>
                  <div className="flex flex-col justify-between items-center relative">
                    <RxDotsHorizontal
                      size={28}
                      className="text-gray-400 mb-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 ease-in-out"
                      onClick={() => handleEdit(index)}
                    />

                    <div className="flex space-x-2 mt-4">
                      <MdDone
                        size={24}
                        onClick={() => moveTaskDone(task.title)}
                        className="text-[#9E78CF] cursor-pointer hover:text-[#3E1671]"
                      />
                      <PiTrashSimpleLight
                        size={24}
                        onClick={() => deleteTask(task.title)}
                        className="text-[#9E78CF] cursor-pointer hover:text-[#3E1671]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white text-[14px]">No tasks available.</p>
        )}
      </div>

      {editTaskIndex !== null && (
        <EditTaskCard
          taskTitle={tasks[editTaskIndex].title}
          onClose={handleCloseEdit}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default AllTasksCards;
