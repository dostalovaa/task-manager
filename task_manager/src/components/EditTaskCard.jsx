import React, { useState } from "react";
import { format } from "date-fns";

const EditTaskCard = ({ taskTitle, onClose, onSave, task }) => {
  const [text, setText] = useState(taskTitle);

  const handleSave = () => {
    onSave(text);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#010001] bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#15101C] rounded-xl p-8 w-3/4 sm:w-1/2 lg:w-1/3 text-white">
        <h2 className="text-xl mb-4">Edit Task</h2>

        <textarea
          className="w-full h-40 p-4 border rounded-xl bg-[#1D1825] border-none outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#9E78CF]  text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskCard;
