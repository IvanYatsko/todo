import { createContext, useContext, useState } from "react";
import { AppContextData, AppProviderProps, IItem } from "../types";
import moment from "moment";

const AppContext = createContext<AppContextData | null>(null);

export const useAppProvider = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: AppProviderProps) => {
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
    <AppContext.Provider
      value={{
        list,
        setList,
        editListItem,
        setEditListItem,
        deleteItem,
        editItem,
        saveIssue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
