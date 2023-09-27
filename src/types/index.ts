export interface IItem {
  value: string;
  date: string;
}

export interface InputFieldProps {
  saveIssue: (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => void;
  editItem?: IItem;
}

export interface ListProps {
  list: IItem[];
  editItem: (listItem: IItem) => void;
  deleteItem: (listItem: IItem) => void;
  saveIssue: (value: string) => void;
  editListItem: IItem | null;
}

export interface ListItemProps {
  item: IItem;
  deleteItem: (listItem: IItem) => void;
  editItem: (listItem: IItem) => void;
  isEdit?: boolean;
  saveIssue: (value: string) => void;
}