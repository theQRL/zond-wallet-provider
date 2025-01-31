import { assert, dynamic, literal, number, string, type } from "../../../";

const Entity = type({
  object: string(),
});

const User = type({
  object: literal("USER"),
  username: string(),
});

const Product = type({
  object: literal("PRODUCT"),
  price: number(),
});

const map = {
  USER: User,
  PRODUCT: Product,
};

export const Struct = dynamic((entity) => {
  assert(entity, Entity);
  return (map as any)[entity.object];
});

export const data = {
  object: "PRODUCT",
  price: 1999,
};

export const output = {
  object: "PRODUCT",
  price: 1999,
};
