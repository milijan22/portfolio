import {
  faTrash,
  faCheck,
  faPlus,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import "./ToDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [currentSheet, setCurrentSheet] = useState(0);
  const inputRef = useRef(0);

  const tasksPerPage = 10;
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input) {
      const newTask = {
        name: input,
        id: Date.now(),
        completed: false,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setInput("");
      setCurrentSheet(Math.floor(newTasks.length / tasksPerPage));
    }
  };

  const deleteTask = useCallback((id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }, []);

  const handleTaskClick = useCallback((id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const currentTasks = useMemo(() => {
    const startIndex = currentSheet * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    return tasks.slice(startIndex, endIndex);
  }, [tasks, currentSheet]);

  const renderedTasks = useMemo(
    () =>
      currentTasks.map((task) => (
        <li
          id="list"
          key={task.id}
          className={task.completed ? "completed" : ""}
        >
          <FontAwesomeIcon
            icon={faCheck}
            className="icon"
            onClick={() => handleTaskClick(task.id)}
          />
          <span className="task">{task.name}</span>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteTask(task.id)}
            className="icon"
          />
        </li>
      )),
    [currentTasks, handleTaskClick, deleteTask]
  );

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="lists">
        <div className="pagination">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => setCurrentSheet((prev) => Math.max(prev - 1, 0))}
            disabled={currentSheet === 0}
            className="icon"
          />

          <span>
            Page: {currentSheet + 1} / {totalPages}
          </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() =>
              setCurrentSheet((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentSheet >= totalPages - 1}
            className="icon"
          />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Add a new task"
          className="input-field"
          onChange={(event) => setInput(event.target.value)}
          autoComplete="off"
        />
        <FontAwesomeIcon icon={faPlus} onClick={addTask} className="icon" />
        <div>
          <ul>{renderedTasks}</ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
