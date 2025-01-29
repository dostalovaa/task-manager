import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { TasksContext } from "../Context/TasksContext";
import TasksToDo from "./TasksToDo";
import TasksDone from "./TasksDone";

const TasksCard = () => {
  const { addTaskNew, title, setTitle } = useContext(TasksContext);

  const formSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTaskNew(title);
      setTitle("");
    }
  };

  return (
    <div className="bg-[#1D1825] h-[100%] w-[583px]  ] rounded-[20px] p-10 mt-[60px] mx-auto">
      <div className="w-[90%] m-auto">
        <form
          onSubmit={formSubmit}
          className="flex justify-center items-center gap-2"
        >
          <input
            type="text"
            placeholder="Add a new task"
            className="text-[#777777] bg-transparent border border-[#3E1671] rounded-lg h-[36px] w-[100%] pl-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className=" bg-[#9E78CF] rounded-lg p-0.5">
            <FiPlus color="white" size={30} />
          </button>
        </form>
        <TasksToDo />
        <TasksDone />
      </div>
    </div>
  );
};

export default TasksCard;
