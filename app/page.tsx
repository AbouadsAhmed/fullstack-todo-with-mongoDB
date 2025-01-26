import { getTodolistAction } from "@/actions/todo.action";
import AddTodo from "@/components/AddTodo";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodolistAction({ userId });

  return (
    <main className="container ">
      <div className="mx-auto flex lg:w-3/4 flex-col justify-center space-y-4">
        <AddTodo userId={userId} />
        <TodoTable todos={todos} />
      </div>
    </main>
  );
}
