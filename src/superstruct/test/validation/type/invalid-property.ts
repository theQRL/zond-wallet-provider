import { number, string, type } from "../../../";

export const Struct = type({
  name: string(),
  age: number(),
});

export const data = {
  name: "john",
  age: "invalid",
};

export const failures = [
  {
    value: "invalid",
    type: "number",
    refinement: undefined,
    path: ["age"],
    branch: [data, data.age],
  },
];
