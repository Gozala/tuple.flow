/* @flow */

import * as tuple from "../"
import test from "blue-tape"

test("test unit", async test => {
  test.isEquivalent(tuple.unit(), [], "unit() returns []")
  test.equal(tuple.unit(), tuple.unit(), "unit() returns same constant")
  test.equal(
    tuple.unit(),
    tuple.tuple0(),
    "unit() & tuple0() returns same constant"
  )
})

test("test singleton", async test => {
  test.isEquivalent(tuple.singleton(), [undefined], "singleton() -> [void]")
  test.isEquivalent(tuple.singleton(1), [1], "singleton(1) -> [1]")
  test.isEquivalent(tuple.singleton(1), [1], "singleton(1) -> [1]")
  test.isEquivalent(tuple.tuple1(1), [1], "tuple1(1) -> [1]")
})

test("test tuple", async test => {
  test.isEquivalent(
    tuple.tuple(),
    [undefined, undefined],
    "tuple() -> [void, void]"
  )
  test.isEquivalent(tuple.tuple(1), [1, undefined], "tuple(1) -> [1, void]")
  test.isEquivalent(tuple.tuple(1, 2), [1, 2], "tuple(1, 2) -> [1, 2]")
  test.isEquivalent(tuple.tuple2(1, 2), [1, 2], "tuple2(1, 2) -> [1, 2]")
})

test("test triple", async test => {
  test.isEquivalent(
    tuple.triple(),
    [undefined, undefined, undefined],
    "triple() -> [void, void, void]"
  )
  test.isEquivalent(
    tuple.triple(1),
    [1, undefined, undefined],
    "triple(1) -> [1, void, void]"
  )
  test.isEquivalent(
    tuple.triple(1, 2),
    [1, 2, undefined],
    "triple(1, 2) -> [1, 2, void]"
  )
  test.isEquivalent(
    tuple.triple(1, 2, 3),
    [1, 2, 3],
    "triple2(1, 2, 3) -> [1, 2, 3]"
  )
  test.equal(tuple.triple, tuple.tuple3)
})

test("test quadruple", async test => {
  test.isEquivalent(
    tuple.quadruple(),
    [undefined, undefined, undefined, undefined],
    "quadruple() -> [void, void, void, void]"
  )
  test.isEquivalent(
    tuple.quadruple(1),
    [1, undefined, undefined, undefined],
    "quadruple(1) -> [1, void, void, void]"
  )
  test.isEquivalent(
    tuple.quadruple(1, 2),
    [1, 2, undefined, undefined],
    "quadruple(1, 2) -> [1, 2, void, void]"
  )
  test.isEquivalent(
    tuple.quadruple(1, 2, 3),
    [1, 2, 3, undefined],
    "quadruple(1, 2, 3) -> [1, 2, 3, void]"
  )
  test.isEquivalent(
    tuple.quadruple(1, 2, 3, 4),
    [1, 2, 3, 4],
    "quadruple(1, 2, 3, 4) -> [1, 2, 3, 4]"
  )
  test.equal(tuple.quadruple, tuple.tuple4)
})

test("test quintuple", async test => {
  test.isEquivalent(
    tuple.quintuple(),
    [undefined, undefined, undefined, undefined, undefined],
    "quintuple() -> [void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.quintuple(1),
    [1, undefined, undefined, undefined, undefined],
    "quintuple(1) -> [1, void, void, void]"
  )
  test.isEquivalent(
    tuple.quintuple(1, 2),
    [1, 2, undefined, undefined, undefined],
    "quintuple(1, 2) -> [1, 2, void, void]"
  )
  test.isEquivalent(
    tuple.quintuple(1, 2, 3),
    [1, 2, 3, undefined, undefined],
    "quintuple(1, 2, 3) -> [1, 2, 3, void]"
  )
  test.isEquivalent(
    tuple.quintuple(1, 2, 3, 4),
    [1, 2, 3, 4, undefined],
    "quintuple(1, 2, 3, 4) -> [1, 2, 3, 4, void]"
  )
  test.isEquivalent(
    tuple.quintuple(1, 2, 3, 4, 5),
    [1, 2, 3, 4, 5],
    "quintuple(1, 2, 3, 4, 5) -> [1, 2, 3, 4, 5]"
  )
  test.equal(tuple.quintuple, tuple.tuple5)
})

test("test sextuple", async test => {
  test.isEquivalent(
    tuple.sextuple(),
    [undefined, undefined, undefined, undefined, undefined, undefined],
    "sextuple() -> [void, void, void, void]"
  )
  test.isEquivalent(
    tuple.sextuple(1),
    [1, undefined, undefined, undefined, undefined, undefined],
    "sextuple(1) -> [1, void, void, void]"
  )
  test.isEquivalent(
    tuple.sextuple(1, 2),
    [1, 2, undefined, undefined, undefined, undefined],
    "sextuple(1, 2) -> [1, 2, void, void]"
  )
  test.isEquivalent(
    tuple.sextuple(1, 2, 3),
    [1, 2, 3, undefined, undefined, undefined],
    "sextuple(1, 2, 3) -> [1, 2, 3, void]"
  )
  test.isEquivalent(
    tuple.sextuple(1, 2, 3, 4),
    [1, 2, 3, 4, undefined, undefined],
    "sextuple(1, 2, 3, 4) -> [1, 2, 3, 4, void]"
  )
  test.isEquivalent(
    tuple.sextuple(1, 2, 3, 4, 5),
    [1, 2, 3, 4, 5, undefined],
    "sextuple(1, 2, 3, 4, 5) -> [1, 2, 3, 4, 5, void]"
  )
  test.isEquivalent(
    tuple.sextuple(1, 2, 3, 4, 5, 6),
    [1, 2, 3, 4, 5, 6],
    "sextuple(1, 2, 3, 4, 5, 6) -> [1, 2, 3, 4, 5, 6]"
  )
  test.equal(tuple.sextuple, tuple.tuple6)
})

test("test septuple", async test => {
  test.isEquivalent(
    tuple.septuple(),
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ],
    "septuple() -> [void, void, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.septuple(1),
    [1, undefined, undefined, undefined, undefined, undefined, undefined],
    "septuple(1) -> [1, void, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.septuple(1, 2),
    [1, 2, undefined, undefined, undefined, undefined, undefined],
    "septuple(1, 2) -> [1, 2, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.septuple(1, 2, 3),
    [1, 2, 3, undefined, undefined, undefined, undefined],
    "septuple(1, 2, 3) -> [1, 2, 3, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.septuple(1, 2, 3, 4),
    [1, 2, 3, 4, undefined, undefined, undefined],
    "septuple(1, 2, 3, 4) -> [1, 2, 3, 4, void, void, void]"
  )
  test.isEquivalent(
    tuple.septuple(1, 2, 3, 4, 5),
    [1, 2, 3, 4, 5, undefined, undefined],
    "septuple(1, 2, 3, 4, 5) -> [1, 2, 3, 4, 5, void, void]"
  )
  test.isEquivalent(
    tuple.septuple(1, 2, 3, 4, 5, 6),
    [1, 2, 3, 4, 5, 6, undefined],
    "septuple(1, 2, 3, 4, 5, 6) -> [1, 2, 3, 4, 5, 6, void]"
  )
  test.isEquivalent(
    tuple.septuple(1, 2, 3, 4, 5, 6, 7),
    [1, 2, 3, 4, 5, 6, 7],
    "septuple(1, 2, 3, 4, 5, 6, 7) -> [1, 2, 3, 4, 5, 6, 7]"
  )
  test.equal(tuple.septuple, tuple.tuple7)
})

test("test octuple", async test => {
  test.isEquivalent(
    tuple.octuple(),
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ],
    "octuple() -> [void, void, void, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1),
    [
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ],
    "octuple(1) -> [1, void, void, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2),
    [1, 2, undefined, undefined, undefined, undefined, undefined, undefined],
    "octuple(1, 2) -> [1, 2, void, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2, 3),
    [1, 2, 3, undefined, undefined, undefined, undefined, undefined],
    "octuple(1, 2, 3) -> [1, 2, 3, void, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2, 3, 4),
    [1, 2, 3, 4, undefined, undefined, undefined, undefined],
    "octuple(1, 2, 3, 4) -> [1, 2, 3, 4, void, void, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2, 3, 4, 5),
    [1, 2, 3, 4, 5, undefined, undefined, undefined],
    "octuple(1, 2, 3, 4, 5) -> [1, 2, 3, 4, 5, void, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2, 3, 4, 5, 6),
    [1, 2, 3, 4, 5, 6, undefined, undefined],
    "octuple(1, 2, 3, 4, 5, 6) -> [1, 2, 3, 4, 5, 6, void, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2, 3, 4, 5, 6, 7),
    [1, 2, 3, 4, 5, 6, 7, undefined],
    "octuple(1, 2, 3, 4, 5, 6, 7) -> [1, 2, 3, 4, 5, 6, 7, void]"
  )
  test.isEquivalent(
    tuple.octuple(1, 2, 3, 4, 5, 6, 7, 8),
    [1, 2, 3, 4, 5, 6, 7, 8],
    "octuple(1, 2, 3, 4, 5, 6, 7, 8) -> [1, 2, 3, 4, 5, 6, 7, 8]"
  )
  test.equal(tuple.octuple, tuple.tuple8)
})

test("test first", async test => {
  test.equal(tuple.first([1]), 1, "first([1]) -> 1")
  test.equal(tuple.first([1, 2]), 1, "first([1, 2]) -> 1")
  test.equal(tuple.first([1, 2, 3]), 1, "first([1, 2, 3]) -> 1")
  test.equal(tuple.first([1, 2, 3, 4]), 1, "first([1, 2, 3, 4]) -> 1")
  test.equal(tuple.first([1, 2, 3, 4, 5]), 1, "first([1, 2, 3, 4, 5]) -> 1")
  test.equal(
    tuple.first([1, 2, 3, 4, 5, 6]),
    1,
    "first([1, 2, 3, 4, 5, 6]) -> 1"
  )
  test.equal(
    tuple.first([1, 2, 3, 4, 5, 6, 7]),
    1,
    "first([1, 2, 3, 4, 5, 6, 7]) -> 1"
  )
  test.equal(
    tuple.first([1, 2, 3, 4, 5, 6, 7, 8]),
    1,
    "first([1, 2, 3, 4, 5, 6, 7, 8]) -> 1"
  )
})

test("test second", async test => {
  test.equal(tuple.second([1, 2]), 2, "second([1, 2]) -> 2")
  test.equal(tuple.second([1, 2, 3]), 2, "second([1, 2, 3]) -> 2")
  test.equal(tuple.second([1, 2, 3, 4]), 2, "second([1, 2, 3, 4]) -> 2")
  test.equal(tuple.second([1, 2, 3, 4, 5]), 2, "second([1, 2, 3, 4, 5]) -> 2")
  test.equal(
    tuple.second([1, 2, 3, 4, 5, 6]),
    2,
    "second([1, 2, 3, 4, 5, 6]) -> 2"
  )
  test.equal(
    tuple.second([1, 2, 3, 4, 5, 6, 7]),
    2,
    "second([1, 2, 3, 4, 5, 6, 7]) -> 2"
  )
  test.equal(
    tuple.second([1, 2, 3, 4, 5, 6, 7, 8]),
    2,
    "second([1, 2, 3, 4, 5, 6, 7, 8]) -> 2"
  )
})

test("test third", async test => {
  test.equal(tuple.third([1, 2, 3]), 3, "third([1, 2, 3]) -> 3")
  test.equal(tuple.third([1, 2, 3, 4]), 3, "third([1, 2, 3, 4]) -> 3")
  test.equal(tuple.third([1, 2, 3, 4, 5]), 3, "third([1, 2, 3, 4, 5]) -> 3")
  test.equal(
    tuple.third([1, 2, 3, 4, 5, 6]),
    3,
    "third([1, 2, 3, 4, 5, 6]) -> 3"
  )
  test.equal(
    tuple.third([1, 2, 3, 4, 5, 6, 7]),
    3,
    "third([1, 2, 3, 4, 5, 6, 7]) -> 3"
  )
  test.equal(
    tuple.third([1, 2, 3, 4, 5, 6, 7, 8]),
    3,
    "third([1, 2, 3, 4, 5, 6, 7, 8]) -> 3"
  )
})

test("test fourth", async test => {
  test.equal(tuple.fourth([1, 2, 3, 4]), 4, "fourth([1, 2, 3, 4]) -> 4")
  test.equal(tuple.fourth([1, 2, 3, 4, 5]), 4, "fourth([1, 2, 3, 4, 5]) -> 4")
  test.equal(
    tuple.fourth([1, 2, 3, 4, 5, 6]),
    4,
    "fourth([1, 2, 3, 4, 5, 6]) -> 4"
  )
  test.equal(
    tuple.fourth([1, 2, 3, 4, 5, 6, 7]),
    4,
    "fourth([1, 2, 3, 4, 5, 6, 7]) -> 4"
  )
  test.equal(
    tuple.fourth([1, 2, 3, 4, 5, 6, 7, 8]),
    4,
    "fourth([1, 2, 3, 4, 5, 6, 7, 8]) -> 4"
  )
})

test("test fifth", async test => {
  test.equal(tuple.fifth([1, 2, 3, 4, 5]), 5, "fifth([1, 2, 3, 4, 5]) -> 5")
  test.equal(
    tuple.fifth([1, 2, 3, 4, 5, 6]),
    5,
    "fifth([1, 2, 3, 4, 5, 6]) -> 5"
  )
  test.equal(
    tuple.fifth([1, 2, 3, 4, 5, 6, 7]),
    5,
    "fifth([1, 2, 3, 4, 5, 6, 7]) -> 5"
  )
  test.equal(
    tuple.fifth([1, 2, 3, 4, 5, 6, 7, 8]),
    5,
    "fifth([1, 2, 3, 4, 5, 6, 7, 8]) -> 5"
  )
})

test("test sixth", async test => {
  test.equal(
    tuple.sixth([1, 2, 3, 4, 5, 6]),
    6,
    "sixth([1, 2, 3, 4, 5, 6]) -> 6"
  )
  test.equal(
    tuple.sixth([1, 2, 3, 4, 5, 6, 7]),
    6,
    "sixth([1, 2, 3, 4, 5, 6, 7]) -> 6"
  )
  test.equal(
    tuple.sixth([1, 2, 3, 4, 5, 6, 7, 8]),
    6,
    "sixth([1, 2, 3, 4, 5, 6, 7, 8]) -> 6"
  )
})

test("test seventh", async test => {
  test.equal(
    tuple.seventh([1, 2, 3, 4, 5, 6, 7]),
    7,
    "seventh([1, 2, 3, 4, 5, 6, 7]) -> 7"
  )
  test.equal(
    tuple.seventh([1, 2, 3, 4, 5, 6, 7, 8]),
    7,
    "seventh([1, 2, 3, 4, 5, 6, 7, 8]) -> 7"
  )
})

test("test eighth", async test => {
  test.equal(
    tuple.eighth([1, 2, 3, 4, 5, 6, 7, 8]),
    8,
    "eighth([1, 2, 3, 4, 5, 6, 7, 8]) -> 8"
  )
})

test("mapFirst", async test => {
  test.isEquivalent(
    tuple.mapFirst(inc, [1, 2]),
    [2, 2],
    "mapFirst(inc, [1, 2]) -> [2, 2]"
  )
})

test("mapSecond", async test => {
  test.isEquivalent(
    tuple.mapSecond(inc, [1, 2]),
    [1, 3],
    "mapFirst(inc, [1, 2]) -> [1, 3]"
  )
})

const inc = a => a + 1
const isObject = value => value != null && typeof value === "object"
const isFunction = value => typeof value === "function"
