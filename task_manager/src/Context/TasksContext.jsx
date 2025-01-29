import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext(null);

const TasksContextProvider = (props) => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [tasksDone, setTasksDone] = useState(() => {
    const savedTasksDone = localStorage.getItem("tasksDone");
    return savedTasksDone ? JSON.parse(savedTasksDone) : [];
  });

  const addTaskNew = (taskTitle) => {
    const newTask = {
      title,
      completed: false,
      dateAdded: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const moveTaskDone = (taskTitle) => {
    const taskToMove = tasks.find((t) => t.title === taskTitle);
    if (taskToMove) {
      setTasksDone([taskToMove, ...tasksDone]);
      setTasks(tasks.filter((t) => t.title !== taskTitle));
    }
  };
  const updateTask = (oldTitle, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.title === oldTitle ? { ...task, title: newTitle } : task
      )
    );
  };

  const deleteTask = (taskTitle) => {
    setTasks(tasks.filter((t) => t.title !== taskTitle));
    setTasksDone(tasksDone.filter((t) => t.title !== taskTitle));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("tasksDone", JSON.stringify(tasksDone));
  }, [tasksDone]);

  return (
    <TasksContext.Provider
      value={{
        title,
        setTitle,
        tasks,
        setTasks,
        tasksDone,
        addTaskNew,
        moveTaskDone,
        deleteTask,
        updateTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
