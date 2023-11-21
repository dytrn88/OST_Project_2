import { useState } from "react";
import Switch from "react-switch";

const Switcher = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <span>student</span>
      <Switch
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      ></Switch>
    </div>
  );
};

export { Switcher };
