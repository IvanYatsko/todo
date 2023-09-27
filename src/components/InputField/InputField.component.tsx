import { useState, FC, useCallback } from "react";
import { Button, Input, Space } from "antd";
import { InputFieldProps } from "../../types";

const SUBMIT = "Submit";

const InputField: FC<InputFieldProps> = ({ saveIssue, editItem }) => {
  const [value, setValue] = useState<string>(editItem?.value ?? "");

  const saveValue = useCallback(() => {
    saveIssue(value, setValue);
    setValue("");
  }, [saveIssue, value]);

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your issue"
      />
      <Button className="bg-cyan-700" onClick={saveValue} type="primary">
        {SUBMIT}
      </Button>
    </Space.Compact>
  );
};

export default InputField;
