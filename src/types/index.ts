import { ReactNode } from "react";
export interface IItem {
  value: string;
  date: string;
}

export interface InputFieldProps {
  saveIssue: (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  editItem?: IItem;
}

export interface ListProps {
  list: IItem[];
}

export interface ListItemProps {
  item: IItem;
}

export interface AppContextData {
  list: IItem[];
  setList: React.Dispatch<React.SetStateAction<IItem[]>>;
  editListItem: IItem | null;
  setEditListItem: React.Dispatch<React.SetStateAction<IItem | null>>;
  deleteItem: (listItem: IItem) => void;
  editItem: (listItem: IItem) => void;
  saveIssue: (value: string) => void;
}

export type AppProviderProps = {
  children: ReactNode;
};
