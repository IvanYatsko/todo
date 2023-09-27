import { FC } from "react";
import { ListProps } from "../../types";
import ListItem from "../ListItem/ListItem.component";

const List: FC<ListProps> = ({
  list,
  editItem,
  deleteItem,
  saveIssue,
  editListItem,
}) => (
  <div className="">
    {list.map((item) => (
      <ListItem
        item={item}
        deleteItem={deleteItem}
        editItem={editItem}
        isEdit={editListItem?.date === item.date}
        saveIssue={saveIssue}
        key={item.date}
      />
    ))}
  </div>
);

export default List;
