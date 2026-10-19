const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары с направлением 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, "asc");
    expect(result.map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products);
    expect(result.map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] с направлением 'asc' сортируются как [3, 4, 1]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );
    const result = sortProductsByPrice(selectedProducts, "asc");
    expect(result.map((product) => product.id)).toEqual([3, 4, 1]);
  });
  test("все товары с направлением 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, "desc");
    expect(result.map((product) => product.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] с направлением 'desc' сортируются как [1, 4, 3]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [3, 1, 4].includes(id),
    );
    const result = sortProductsByPrice(selectedProducts, "desc");
    expect(result.map((product) => product.id)).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] с направлением 'desc' сортируются как [2, 5, 6]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [5, 2, 6].includes(id),
    );
    const result = sortProductsByPrice(selectedProducts, "desc");
    expect(result.map((product) => product.id)).toEqual([2, 5, 6]);
  });
  test("вызов с направлением 'asc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );
    const originalIds = selectedProducts.map((product) => product.id);
    sortProductsByPrice(selectedProducts, "asc");
    expect(selectedProducts.map((product) => product.id)).toEqual(originalIds);
  });
  test("вызов с направлением 'desc' не меняет исходный массив [1, 3, 4]", () => {
    const selectedProducts = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );
    const originalIds = selectedProducts.map((product) => product.id);
    sortProductsByPrice(selectedProducts, "desc");
    expect(selectedProducts.map((product) => product.id)).toEqual(originalIds);
  });
  test("вызов без направления не меняет исходный массив всех товаров", () => {
    const originalIds = products.map((product) => product.id);
    sortProductsByPrice(products);
    expect(products.map((product) => product.id)).toEqual(originalIds);
  });
});
