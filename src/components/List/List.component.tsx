import { FC } from "react";
import { ListProps } from "../../types";
import ListItem from "../ListItem/ListItem.component";

const List: FC<ListProps> = ({ list }) => (
  <div className="flex flex-col gap-2">
    {list.map((item) => (
      <ListItem item={item} key={item.date} />
    ))}
  </div>
);

export default List;
