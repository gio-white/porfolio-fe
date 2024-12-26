import React from "react";

interface DropdownProps {
  name: string;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ name, options, onChange }) => {
  return (
      <select
        name={name}
        onChange={onChange}
        className="w-44 p-2 border rounded-md shadow-sm text-indigo-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
};
export default Dropdown;
