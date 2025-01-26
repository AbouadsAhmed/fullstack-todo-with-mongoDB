"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ITodo } from "@/interface";
import { Badge } from "@/components/ui/badge";

import TodoButton from "./TodoButton";

export default function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="table-auto w-full">
        <TableCaption>your todolist</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2 text-left">Title</TableHead>
            <TableHead className="w-1/4 text-left">Completed</TableHead>
            <TableHead className="w-1/4 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="truncate">{todo.title}</TableCell>
              <TableCell>
                {todo.completed ? (
                  <Badge>completed</Badge>
                ) : (
                  <Badge variant={"secondary"}>uncompleted</Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <TodoButton todo={todo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
