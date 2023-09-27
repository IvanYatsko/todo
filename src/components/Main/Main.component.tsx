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
    <div className="max-w-2xl mx-auto my-40 flex flex-col gap-y-4">
      <h1 className="text-center text-3xl text font-bold">TODO-list</h1>
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
