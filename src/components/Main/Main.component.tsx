import { useAppProvider } from "../../context/AppProvider.context";
import InputField from "../InputField/InputField.component";
import List from "../List/List.component";

const Main = () => {
  const data = useAppProvider();
  if (!data) return null;

  const { list, saveIssue } = data;

  return (
    <div className="max-w-2xl mx-auto my-40 flex flex-col gap-y-4">
      <h1 className="text-center text-3xl text font-bold">TODO-list</h1>
      <InputField saveIssue={saveIssue} />
      <List list={list} />
    </div>
  );
};

export default Main;
