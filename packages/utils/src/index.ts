/**
 * @publish-guide/utils — 工具函数库
 *
 * 演示用包，包含了最基本的工具函数。
 * 构建产物为 CJS + ESM 双格式，带 dts 类型声明。
 */

/** 两数相加 */
export function add(a: number, b: number): number {
  return a + b
}

/** 两数相乘 */
export function multiply(a: number, b: number): number {
  return a * b
}

/** 判断是否为偶数 */
export function isEven(n: number): boolean {
  return n % 2 === 0
}

/** 数组去重 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

/** 休眠（毫秒） */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
