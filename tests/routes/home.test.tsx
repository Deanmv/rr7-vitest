//External
import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

//Routes
import Home from "~/routes/home";

describe("Home Page", () => {

	const history = createMemoryHistory();

	test("it renders", () => {
		render(
			<Router location={history.location} navigator={history}>
				<Home />
			</Router>
		);

		expect(screen.getByText("React Router Docs")).toBeDefined();
	})
})