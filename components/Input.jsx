import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <div className="flex gap-4 w-full">

      <div className="flex flex-col w-1/2">
        <label htmlFor="name" className="text-sm font-medium">
          Link Name
        </label>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={onChange}
          placeholder="YouTube"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <label htmlFor="url" className="text-sm font-medium">
          URL
        </label>
        <input
          type="text"
          name="url"
          value={value.url}
          onChange={onChange}
          placeholder="https://youtube.com"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

    </div>
  );
};

export default Input;