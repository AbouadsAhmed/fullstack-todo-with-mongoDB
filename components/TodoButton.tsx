import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteTodolistAction } from "@/actions/todo.action";
import Spiner from "@/components/Spiner";
import { useState } from "react";
import EditTodo from "./EditTodo";
import { ITodo } from "@/interface";
const TodoButton = ({ todo }: { todo: ITodo }) => {
  const [isLoading, setIsloading] = useState(false);
  return (
    <>
      <EditTodo todo={todo} />
      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={async () => {
          setIsloading(true);
          await deleteTodolistAction({ id: todo.id });
          setIsloading(false);
        }}
      >
        {isLoading ? <Spiner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoButton;
