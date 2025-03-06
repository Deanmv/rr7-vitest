//External
import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";

//Components
import { Welcome } from "~/welcome/welcome";

describe("Welcome Component", () => {
	test("it renders", () => {
		render(<Welcome />);

		expect(screen.getByText("React Router Docs")).toBeDefined();
	})
})