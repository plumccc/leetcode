/*
 * @lc app=leetcode.cn id=1912 lang=javascript
 *
 * [1912] 设计电影租借系统
 * 
 * https://leetcode.cn/problems/design-movie-rental-system/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function (n, entries) {
  this.movieMap = new Map();
  this.priceMap = new Map();
  this.rentSet = new Set();
  for ([shop, movie, price] of entries) {
    this.priceMap.set([shop, movie].toString(), price);
    const queue = this.movieMap.get(movie);
    if (!queue) {
      this.movieMap.set(movie, new Set());
    }
    this.movieMap.get(movie).add([shop, price].toString());
  }
};

/** 
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function (movie) {
  const queue = [...(this.movieMap.get(movie) || [])];

  if (!queue.length) {
    return [];
  }

  queue.sort((a, b) => {
    const [shop1, price1] = a.split(',');
    const [shop2, price2] = b.split(',');
    if (+price1 === +price2) {
      return +shop1 - +shop2
    }
    return +price1 - +price2;
  })

  return queue.slice(0, 5).map(v => {
    const item = v.split(',');
    return +item[0];
  })
};

/** 
 * @param {number} shop 
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function (shop, movie) {
  const price = this.priceMap.get([shop, movie].toString());
  this.movieMap.get(movie).delete([shop, price].toString());
  this.rentSet.add([shop, movie, price].toString());
};

/** 
 * @param {number} shop 
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function (shop, movie) {
  const price = this.priceMap.get([shop, movie].toString());
  this.movieMap.get(movie).add([shop, price].toString());
  this.rentSet.delete([shop, movie, price].toString());
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function () {
  const res = [...this.rentSet];

  res.sort((a, b) => {
    const [shop1, movie1, price1] = a.split(',');
    const [shop2, movie2, price2] = b.split(',');

    if (+price1 !== +price2) {
      return +price1 - +price2;
    }
    if (+shop1 !== +shop2) {
      return +shop1 - +shop2;
    }
    return +movie1 - movie2;
  })

  return res.slice(0, 5).map((v) => {
    const item = v.split(',');
    return [+item[0], +item[1]]
  });
};
// @lc code=end

