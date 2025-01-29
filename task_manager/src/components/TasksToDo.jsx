import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { PiTrashSimpleLight } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import { Reorder } from "framer-motion";

const TasksToDo = () => {
  const { tasks, setTasks, moveTaskDone, deleteTask } =
    useContext(TasksContext);

  const handleReorder = (newOrder) => {
    setTasks(newOrder);
  };

  return (
    <div>
      <h3 className="text-white mt-10 mb-4 text-[16px]">
        Tasks to do - {tasks.length}
      </h3>

      <div>
        <Reorder.Group axis="y" values={tasks} onReorder={handleReorder}>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Reorder.Item value={task} key={index}>
                <div className="bg-[#15101C] p-6 rounded-xl mb-2">
                  <div className="text-[#9E78CF] flex justify-between items-center ">
                    <span className="w-[70%] break-words overflow-y-auto">
                      {task.title}
                    </span>
                    <div className="flex justify-center items-center gap-3">
                      <MdDone
                        size={24}
                        onClick={() => moveTaskDone(task.title)}
                        className=" cursor-pointer hover:text-[#3E1671]"
                      />
                      <PiTrashSimpleLight
                        size={24}
                        onClick={() => deleteTask(task.title)}
                        className="cursor-pointer hover:text-[#3E1671]"
                      />
                    </div>
                  </div>
                </div>
              </Reorder.Item>
            ))
          ) : (
            <p className="text-white text-[14px]">No tasks available.</p>
          )}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default TasksToDo;
