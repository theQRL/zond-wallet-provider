import { assert, isPlainObject } from "../utils";

import { errorCodes, providerErrors, rpcErrors } from ".";
import {
  CUSTOM_ERROR_CODE,
  CUSTOM_ERROR_MESSAGE,
  dummyData,
  dummyDataWithCause,
  dummyMessage,
  SERVER_ERROR_CODE,
} from "./__fixtures__";
import { getMessageFromCode, JSON_RPC_SERVER_ERROR_MESSAGE } from "./utils";

describe("rpcErrors.invalidInput", () => {
  it("accepts a single string argument where appropriate", () => {
    const error = rpcErrors.invalidInput(CUSTOM_ERROR_MESSAGE);
    expect(error.code).toBe(errorCodes.rpc.invalidInput);
    expect(error.message).toBe(CUSTOM_ERROR_MESSAGE);
  });
});

describe("providerErrors.unauthorized", () => {
  it("accepts a single string argument where appropriate", () => {
    const error = providerErrors.unauthorized(CUSTOM_ERROR_MESSAGE);
    expect(error.code).toBe(errorCodes.provider.unauthorized);
    expect(error.message).toBe(CUSTOM_ERROR_MESSAGE);
  });
});

describe("custom provider error options", () => {
  it("throws if the value is not an options object", () => {
    expect(() => {
      // @ts-expect-error Invalid input
      providerErrors.custom("bar");
    }).toThrow(
      "Ethereum Provider custom errors must provide single object argument.",
    );
  });

  it("throws if the value is invalid", () => {
    expect(() => {
      // @ts-expect-error Invalid input
      providerErrors.custom({ code: 4009, message: 2 });
    }).toThrow('"message" must be a nonempty string');

    expect(() => {
      providerErrors.custom({ code: 4009, message: "" });
    }).toThrow('"message" must be a nonempty string');
  });
});

describe("rpcErrors.server", () => {
  it("throws on invalid input", () => {
    expect(() => {
      // @ts-expect-error Invalid input
      rpcErrors.server("bar");
    }).toThrow(
      "Ethereum RPC Server errors must provide single object argument.",
    );

    expect(() => {
      // @ts-expect-error Invalid input
      rpcErrors.server({ code: "bar" });
    }).toThrow('"code" must be an integer such that: -32099 <= code <= -32005');

    expect(() => {
      rpcErrors.server({ code: 1 });
    }).toThrow('"code" must be an integer such that: -32099 <= code <= -32005');
  });

  it("returns appropriate value", () => {
    const error = rpcErrors.server({
      code: SERVER_ERROR_CODE,
      data: Object.assign({}, dummyData),
    });

    expect(error.code <= -32000 && error.code >= -32099).toBe(true);
    expect(error.message).toBe(JSON_RPC_SERVER_ERROR_MESSAGE);
  });
});

describe("rpcErrors", () => {
  it.each(Object.entries(rpcErrors).filter(([key]) => key !== "server"))(
    "%s returns appropriate value",
    (key, value) => {
      const createError = value as any;
      const error = createError({
        message: null,
        data: Object.assign({}, dummyData),
      });
      // @ts-expect-error TypeScript does not like indexing into this with the key
      const rpcCode = errorCodes.rpc[key];
      expect(
        Object.values(errorCodes.rpc).includes(error.code) ||
          (error.code <= -32000 && error.code >= -32099),
      ).toBe(true);
      expect(error.code).toBe(rpcCode);
      expect(error.message).toBe(getMessageFromCode(rpcCode));
    },
  );

  it.each(Object.entries(rpcErrors).filter(([key]) => key !== "server"))(
    "%s propagates data.cause if set",
    (key, value) => {
      const createError = value as any;
      const error = createError({
        message: null,
        data: Object.assign({}, dummyDataWithCause),
      });
      // @ts-expect-error TypeScript does not like indexing into this with the key
      const rpcCode = errorCodes.rpc[key];
      expect(error.message).toBe(getMessageFromCode(rpcCode));
      expect(error.cause.message).toBe(dummyMessage);
    },
  );

  it("serializes a cause", () => {
    const error = rpcErrors.invalidInput({
      data: {
        foo: "bar",
        cause: new Error("foo"),
      },
    });

    const serializedError = error.serialize();
    assert(serializedError.data);
    assert(isPlainObject(serializedError.data));

    expect(serializedError.data.cause).not.toBeInstanceOf(Error);
    expect(serializedError.data).toStrictEqual({
      foo: "bar",
      cause: {
        message: "foo",
        stack: expect.stringContaining("Error: foo"),
      },
    });
  });

  it("serializes a non-Error-instance cause", () => {
    const error = rpcErrors.invalidInput({
      data: {
        foo: "bar",
        cause: "foo",
      },
    });

    const serializedError = error.serialize();
    assert(serializedError.data);
    assert(isPlainObject(serializedError.data));

    expect(serializedError.data.cause).not.toBeInstanceOf(Error);
    expect(serializedError.data).toStrictEqual({
      foo: "bar",
      cause: "foo",
    });
  });
});

describe("providerErrors", () => {
  it.each(Object.entries(providerErrors).filter(([key]) => key !== "custom"))(
    "%s returns appropriate value",
    (key, value) => {
      const createError = value as any;
      const error = createError({
        message: null,
        data: Object.assign({}, dummyData),
      });
      // @ts-expect-error TypeScript does not like indexing into this with the key
      const providerCode = errorCodes.provider[key];
      expect(error.code >= 1000 && error.code < 5000).toBe(true);
      expect(error.code).toBe(providerCode);
      expect(error.message).toBe(getMessageFromCode(providerCode));
    },
  );

  it.each(Object.entries(providerErrors).filter(([key]) => key !== "custom"))(
    "%s propagates data.cause if set",
    (key, value) => {
      const createError = value as any;
      const error = createError({
        message: null,
        data: Object.assign({}, dummyDataWithCause),
      });
      // @ts-expect-error TypeScript does not like indexing into this with the key
      const providerCode = errorCodes.provider[key];
      expect(error.message).toBe(getMessageFromCode(providerCode));
      expect(error.cause.message).toBe(dummyMessage);
    },
  );

  it("custom returns appropriate value", () => {
    const error = providerErrors.custom({
      code: CUSTOM_ERROR_CODE,
      message: CUSTOM_ERROR_MESSAGE,
      data: Object.assign({}, dummyData),
    });
    expect(error.code >= 1000 && error.code < 5000).toBe(true);
    expect(error.code).toBe(CUSTOM_ERROR_CODE);
    expect(error.message).toBe(CUSTOM_ERROR_MESSAGE);
  });

  it("serializes a cause", () => {
    const error = providerErrors.unauthorized({
      data: {
        foo: "bar",
        cause: new Error("foo"),
      },
    });

    const serializedError = error.serialize();
    assert(serializedError.data);
    assert(isPlainObject(serializedError.data));

    expect(serializedError.data.cause).not.toBeInstanceOf(Error);
    expect(serializedError.data).toStrictEqual({
      foo: "bar",
      cause: {
        message: "foo",
        stack: expect.stringContaining("Error: foo"),
      },
    });
  });

  it("serializes a non-Error-instance cause", () => {
    const error = providerErrors.unauthorized({
      data: {
        foo: "bar",
        cause: "foo",
      },
    });

    const serializedError = error.serialize();
    assert(serializedError.data);
    assert(isPlainObject(serializedError.data));

    expect(serializedError.data.cause).not.toBeInstanceOf(Error);
    expect(serializedError.data).toStrictEqual({
      foo: "bar",
      cause: "foo",
    });
  });
});
