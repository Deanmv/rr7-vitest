import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("todos", "./routes/todos.tsx"),
	route("form", "./routes/form.tsx")
] satisfies RouteConfig;
