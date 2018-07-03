// @flow

export type Unit = []
export type Singleton<a> = [a]
export type Tuple<a, b> = [a, b]
export type Triple<a, b, c> = [a, b, c]
export type Quadruple<a, b, c, d> = [a, b, c, d]
export type Quintuple<a, b, c, d, e> = [a, b, c, d, e]
export type Sextuple<a, b, c, d, e, f> = [a, b, c, d, e, f]
export type Septuple<a, b, c, d, e, f, g> = [a, b, c, d, e, f, g]
export type Octuple<a, b, c, d, e, f, g, h> = [a, b, c, d, e, f, g, h]

export type Tuple0 = Unit
export type Tuple1<a> = Singleton<a>
export type Tuple2<a, b> = Tuple<a, b>
export type Tuple3<a, b, c> = Triple<a, b, c>
export type Tuple4<a, b, c, d> = Quadruple<a, b, c, d>
export type Tuple5<a, b, c, d, e> = Quintuple<a, b, c, d, e>
export type Tuple6<a, b, c, d, e, f> = Sextuple<a, b, c, d, e, f>
export type Tuple7<a, b, c, d, e, f, g> = Septuple<a, b, c, d, e, f, g>
export type Tuple8<a, b, c, d, e, f, g, h> = Octuple<a, b, c, d, e, f, g, h>

type Min1<a, b, c, d, e, f, g, h> = Tuple1<a> | Min2<a, b, c, d, e, f, g, h>

type Min2<a, b, c, d, e, f, g, h> = Tuple2<a, b> | Min3<a, b, c, d, e, f, g, h>

type Min3<a, b, c, d, e, f, g, h> =
  | Tuple3<a, b, c>
  | Min4<a, b, c, d, e, f, g, h>

type Min4<a, b, c, d, e, f, g, h> =
  | Tuple4<a, b, c, d>
  | Min5<a, b, c, d, e, f, g, h>

type Min5<a, b, c, d, e, f, g, h> =
  | Tuple5<a, b, c, d, e>
  | Min6<a, b, c, d, e, f, g, h>

type Min6<a, b, c, d, e, f, g, h> =
  | Tuple6<a, b, c, d, e, f>
  | Min7<a, b, c, d, e, f, g, h>

type Min7<a, b, c, d, e, f, g, h> =
  | Tuple7<a, b, c, d, e, f, g>
  | Tuple8<a, b, c, d, e, f, g, h>

export const first = <a, b, c, d, e, f, g, h>(
  tuple: Min1<a, b, c, d, e, f, g, h>
): a => tuple[0]
export const second = <a, b, c, d, e, f, g, h>(
  tuple: Min2<a, b, c, d, e, f, g, h>
): b => tuple[1]
export const third = <a, b, c, d, e, f, g, h>(
  tuple: Min3<a, b, c, d, e, f, g, h>
): c => tuple[2]
export const fourth = <a, b, c, d, e, f, g, h>(
  tuple: Min4<a, b, c, d, e, f, g, h>
): d => tuple[3]
export const fifth = <a, b, c, d, e, f, g, h>(
  tuple: Min5<a, b, c, d, e, f, g, h>
): e => tuple[4]
export const sixth = <a, b, c, d, e, f, g, h>(
  tuple: Min6<a, b, c, d, e, f, g, h>
): f => tuple[5]
export const seventh = <a, b, c, d, e, f, g, h>(
  tuple: Min7<a, b, c, d, e, f, g, h>
): g => tuple[6]
export const eighth = <a, b, c, d, e, f, g, h>(
  tuple: Tuple8<a, b, c, d, e, f, g, h>
): h => tuple[7]

export const mapFirst = <a1, a2, b>(
  f: a1 => a2,
  tuple: Tuple<a1, b>
): Tuple<a2, b> => [f(tuple[0]), tuple[1]]

export const mapSecond = <a, b1, b2>(
  f: b1 => b2,
  tuple: Tuple<a, b1>
): Tuple<a, b2> => [tuple[0], f(tuple[1])]

export const theUnit = Object.freeze([])
export const unit = () => theUnit
export const singleton = <a>(value: a): Singleton<a> => [value]
export const tuple = <a, b>(first: a, second: b): Tuple<a, b> => [first, second]
export const triple = <a, b, c>(
  first: a,
  second: b,
  third: c
): Triple<a, b, c> => [first, second, third]
export const quadruple = <a, b, c, d>(
  first: a,
  second: b,
  third: c,
  fourth: d
): Quadruple<a, b, c, d> => [first, second, third, fourth]

export const quintuple = <a, b, c, d, e>(
  first: a,
  second: b,
  third: c,
  fourth: d,
  fifth: e
): Quintuple<a, b, c, d, e> => [first, second, third, fourth, fifth]

export const sextuple = <a, b, c, d, e, f>(
  first: a,
  second: b,
  third: c,
  fourth: d,
  fifth: e,
  sixth: f
): Sextuple<a, b, c, d, e, f> => [first, second, third, fourth, fifth, sixth]

export const septuple = <a, b, c, d, e, f, g>(
  first: a,
  second: b,
  third: c,
  fourth: d,
  fifth: e,
  sixth: f,
  seventh: g
): Septuple<a, b, c, d, e, f, g> => [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh
]

export const octuple = <a, b, c, d, e, f, g, h>(
  first: a,
  second: b,
  third: c,
  fourth: d,
  fifth: e,
  sixth: f,
  seventh: g,
  eighth: h
): Octuple<a, b, c, d, e, f, g, h> => [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth
]

export const tuple0 = unit
export const tuple1 = singleton
export const tuple2 = tuple
export const tuple3 = triple
export const tuple4 = quadruple
export const tuple5 = quintuple
export const tuple6 = sextuple
export const tuple7 = septuple
export const tuple8 = octuple
