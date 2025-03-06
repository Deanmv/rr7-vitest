//External
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router";

//Routes
import TodosPage from "~/routes/todos";
import { createMemoryHistory } from "history";

describe("Todos Page", async() => {

	const history = createMemoryHistory();
	
	test("it renders", async() => {
		render(
			<Router location={history.location} navigator={history}>
				<TodosPage loaderData={[
					{
						userId: 1,
						id: 1,
						title: "test",
						completed: false
					},
				]}/>
			</Router>
		);

		expect(await screen.getByText("Todos - 200 of them")).toBeDefined();

	});

	test("there is a list of 1 item", async() => {
		render(
			<Router location={history.location} navigator={history}>
				<TodosPage loaderData={[
					{
						userId: 1,
						id: 1,
						title: "test",
						completed: false
					}
				]}/>
			</Router>
		);
		
		expect(await screen.getByTestId('todos-list').children.length).toBe(1);
	});
})