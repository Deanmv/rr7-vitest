//Types
import type { Route } from "./+types/todos";
import type { Todo } from "~/definitions/todos";

export async function loader() {
	let todos = await fetch('https://jsonplaceholder.typicode.com/todos');
	todos = await todos.json();
	return todos
} 

export default function TodosPage({
	loaderData
}: Route.ComponentProps) {
	const todos = loaderData;

	return (
		<>
			<h1>Todos - 200 of them</h1>
			<ul data-testid="todos-list">
				{todos.map((todo: Todo) => (
					<li key={todo.id}><input type="checkbox" defaultChecked={todo.completed}/>{todo.title}</li>
				))}
			</ul>
		</>
	)
}
