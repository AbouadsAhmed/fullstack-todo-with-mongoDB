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
    <div className="w-full flex justify-center">
      <Table className="w-full max-w-screen-sm sm:max-w-full mx-auto">
        <TableCaption>your todolist</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium hidden sm:table-cell">
                {todo.id}
              </TableCell>
              <TableCell>{todo.title}</TableCell>
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
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
