import { Form, Formik } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    load();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (value, actions) => {
          if (params.id) {
            await updateTask(params.id, value);
            navigate("/");
          } else {
            await createTask(value);
            navigate("/");
          }
          setTask({
            title: "",
            description: "  ",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-sm p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {" "}
              {params.id ? "Edit" : "Create"}{" "}
            </h1>
            <label className="block font-bold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block font-bold">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Description"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block  
            bg-gray-800 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving...." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
