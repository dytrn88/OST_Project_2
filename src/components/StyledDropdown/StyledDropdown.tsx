import { Select } from "@radix-ui/themes";
import React from "react";
import "./StyledDropdown.css";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  label?: string;
  id: string;
}

const StyledDropdown: React.FC<Props> = ({
  options,
  onChange,
  defaultValue,
  label,
  id,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <Select.Root>
        <Select.Trigger placeholder="select an abo">
          {label && label}
        </Select.Trigger>
        <Select.Content
          id={id}
          className="styled-dropdown"
          value={defaultValue}
          onChange={handleChange}
        >
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export { StyledDropdown };
