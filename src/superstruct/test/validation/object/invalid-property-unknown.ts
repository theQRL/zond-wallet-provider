import { number, object, string } from "../../../";

export const Struct = object({
  name: string(),
  age: number(),
});

export const data = {
  name: "john",
  age: 42,
  unknown: true,
};

export const failures = [
  {
    value: true,
    type: "never",
    refinement: undefined,
    path: ["unknown"],
    branch: [data, data.unknown],
  },
];
