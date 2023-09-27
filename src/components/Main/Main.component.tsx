import { useState } from "react";
import InputField from "../InputField/InputField.component";
import List from "../List/List.component";
import moment from "moment";
import { IItem } from "../../types";

const Main = () => {
  const [list, setList] = useState<IItem[]>([]);
  const [editListItem, setEditListItem] = useState<IItem | null>(null);

  const saveIssue = (value: string) => {
    setList((prev) =>
      editListItem
        ? prev.map((item) =>
            item.date === editListItem.date
              ? { value, date: editListItem.date }
              : item
          )
        : [{ value, date: moment().format("MMM Do YY, h:mm:ss") }, ...prev]
    );
    editListItem && setEditListItem(null);
  };

  const deleteItem = (listItem: IItem) => {
    setList((prev) => prev.filter((item) => item.date !== listItem.date));
  };

  const editItem = (listItem: IItem) => {
    setEditListItem(listItem);
  };

  return (
    <div className="App">
      <InputField saveIssue={saveIssue} />
      <List
        list={list}
        editItem={editItem}
        deleteItem={deleteItem}
        saveIssue={saveIssue}
        editListItem={editListItem}
      />
    </div>
  );
};

export default Main;
