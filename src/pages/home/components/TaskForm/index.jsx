import moment from "moment";
import React, { useEffect, useState } from "react";

export default function TaskForm({ task, onSave, onEdit }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();

  const submitData = (event) => {
    event.preventDefault();

    const data = {
      id: task ? task.id : undefined,
      date: moment(date).format("YYYY-MM-DD"),
      description,
      checked: task ? task.checked : false,
    };

    task ? onEdit(data) : onSave(data);

    clearForm();
  };

  const clearForm = () => {
    setDate(undefined);
    setDescription("");
  };

  useEffect(() => {
    if (task) {
      setDate(task.date);
      setDescription(task.description || "");
    }
  }, [task]);

  return (
    <form className="flex justify-center mt-10" onSubmit={submitData}>
      <div className="bg-gray-50 p-8 rounded-lg">
        <h1 className="text-center mb-4">Nova tarefa</h1>
        <input
          type="date"
          className="border-2 rounded-md p-2 border-gray-500/50 outline-none mb-2"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <textarea
          className="border-2 rounded-md p-2 border-gray-500/50 w-full outline-none"
          placeholder="Escreva aqui..."
          name=""
          id=""
          cols="30"
          rows="2"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
        />
        <button
          type="submit"
          className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
