// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

import { assertEquals } from "@std/assert";
import { toText } from "./to_text.ts";

Deno.test("toText()", async () => {
  const strings = ["hello", " js ", "fans", " 中文♥"];
  const expected = "hello js fans 中文♥";

  const byteStream = ReadableStream.from(strings)
    .pipeThrough(new TextEncoderStream());
  assertEquals(await toText(byteStream), expected);

  const stringStream = ReadableStream.from(strings);
  assertEquals(await toText(stringStream), expected);
});
