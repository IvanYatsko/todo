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
}) =>
  isEdit ? (
    <InputField saveIssue={saveIssue} editItem={item} />
  ) : (
    <div className="flex justify-between">
      <div>
        <span className="border mr-2 p-1 border-cyan-700 rounded-md">
          {item.date}
        </span>
        {item.value}
      </div>
      <div className="mx-1 flex gap-x-2">
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
