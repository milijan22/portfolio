import todoPrev from "../../../assets/todo-prev.png";
import currencyPrev from "../../../assets/currency-prev.png";

console.log(todoPrev);
const ProjectsPage = () => {
  const projectsList = [
    {
      name: "To-Do App",
      description: "Manage tasks in a notepad style to-do list",
      preview: todoPrev,
    },
    {
      name: "Currency Converter",
      description: "Currency converter with up-to-date exchange rates",
      preview: currencyPrev,
    },
  ];

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="p-8 mt-8 w-180 grid grid-cols-3 gap-6">
        {projectsList.map((project) => (
          <div className="bg-cover bg-center border-cyan-900 border-[10px] rounded-2xl shadow-lg w-[200px] h-[200px] ">
            <img
              src={project.preview}
              className="h-full hover:blur-sm hover:shadow-none  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
