import moment from "moment";
import React from "react";

export default function Task({ data, onEdit, onDelete, onCheck }) {
  return (
    <div className="flex justify-center">
      <div
        className={`${
          data.checked ? "opacity-50" : ""
        } relative justify-center mt-6`}
      >
        <div className="absolute flex top-0 left-0 p-3 space-x-1">
          {moment(data.date).format("DD/MM/YYYY")}
        </div>
        <div className="absolute flex top-0 right-0 p-3 space-x-1">
          <button onClick={() => onEdit(data)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button onClick={() => onDelete(data)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        <span className="absolute -right-3 -top-3 bg-green-500 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold">
          <input
            checked={data.checked}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onChange={(event) => onCheck(data.id, event.target.checked)}
          />
        </span>
        <p
          className={`${
            data.checked ? "line-through" : ""
          } bg-white pt-[3rem] pb-5 px-12 rounded-lg w-80`}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}
