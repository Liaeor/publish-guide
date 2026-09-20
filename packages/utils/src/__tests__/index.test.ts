import { describe, it } from 'node:test'
import assert from 'node:assert'
import { add, multiply, isEven, unique } from '../index'

describe('@publish-guide/utils', () => {
  it('add', () => {
    assert.strictEqual(add(1, 2), 3)
    assert.strictEqual(add(-1, 1), 0)
  })

  it('multiply', () => {
    assert.strictEqual(multiply(3, 4), 12)
    assert.strictEqual(multiply(0, 5), 0)
  })

  it('isEven', () => {
    assert.strictEqual(isEven(2), true)
    assert.strictEqual(isEven(3), false)
  })

  it('unique', () => {
    assert.deepStrictEqual(unique([1, 2, 2, 3, 1]), [1, 2, 3])
    assert.deepStrictEqual(unique(['a', 'b', 'a']), ['a', 'b'])
  })
})
