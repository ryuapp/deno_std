// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
import { assert, AssertionError, assertThrows } from "./mod.ts";

Deno.test("assert() throws if expr is falsy", () => {
  const FALSY_VALUES = [false, 0, "", null, undefined, NaN];
  for (const value of FALSY_VALUES) {
    const msg = crypto.randomUUID();
    assertThrows(() => assert(value, msg), AssertionError, msg);
  }
});
