/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数,
 * 判断数组中是否含有该整数。
 */

/**
 * @desc 思路一：for循环暴力遍历，在一行中如果数组值大
 *       于该整数就退出该行查找
 * @desc 80ms/102ms 耗时
 * @desc 7828k/8052k 内存占用
 * @param {Number} target
 * @param {Array} array
 * @return {Boolean}
 */
function find(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) return true;
      if (array[i][j] > target) break;
    }
  }
  return false;
}

/**
 * @desc 思路二：some方法,暴力循环
 * @desc 88ms/110ms 耗时
 * @desc 7988k/7988k 内存占用
 * @param {Number} target
 * @param {Array} array
 * @return {Boolean}
 */
function find(target, array) {
  return array.some((item) => item.some((num) => num === target));
}

/**
 * @desc 思路三：从左下角开始找，比他小的在他上边，比他大的在他右边（右上角同理）
 * 然而感觉并没有快多少。。
 * @desc 83ms/112ms 耗时
 * @desc 8124k/7896k 内存占用
 * @param {Number} target
 * @param {Array} array
 * @param {Number} lastIndex
 * @return {Boolean}
 */
function find(target, array, lastIndex) {
  // 如果数组已经为空
  if (Array.isArray(array) && array.length === 0) return false;
  // 存储数组角标
  const index = array.length - 1;
  // 存储之前读取的位数
  const lIndex = lastIndex || 0;
  // 判断是否到了最后一个数字
  const isFin = array[0].length === lIndex;
  // 获取左下角元素
  const first = array[index][lIndex];
  // 如果就是左下角元素
  if (first - target === 0) return true;
  // 如果比左下角元素小，如果是最后一行则false，否则查找对他上面的数进行递归调用
  if (first - target > 0) {
    return isFin ? false : find(target, array.slice(0, index), lastIndex);
  }
  // 如果比左下角元素大，如果是最后一行则直接some查找，否则对他右边的数进行递归调用
  const fun = (item) => item === target;
  return isFin ? array[0].some(fun) : find(target, array, lIndex + 1);
}

// test
find(5, [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]);
