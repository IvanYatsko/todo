import { FC } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { Button } from "antd";
import { ListItemProps } from "../../types";
import InputField from "../InputField/InputField.component";

const ListItem: FC<ListItemProps> = ({
  item,
  deleteItem,
  editItem,
  isEdit,
  saveIssue,
}) => (
  <div className="flex justify-between">
    <span>{item.date}</span>
    <span>{isEdit ? <InputField saveIssue={saveIssue} editItem={item} /> : item.value}</span>
    <div>
      <Button
        className="bg-cyan-700"
        onClick={() => editItem(item)}
        type="primary"
        shape="circle"
        icon={<EditOutlined />}
        size={"middle"}
      />
      <Button
        className="bg-cyan-700"
        onClick={() => deleteItem(item)}
        type="primary"
        shape="circle"
        icon={<DeleteOutlined />}
        size={"middle"}
      />
    </div>
  </div>
);

export default ListItem;
