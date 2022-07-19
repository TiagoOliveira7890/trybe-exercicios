// loginValidation.test.js
const { sum, myRemove, myFizzBuzz } = require("./sum.js");

//Exercicio 1
describe("A função sum(a, b) retorna a soma do parâmetro a com o b", () => {
  test("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  test("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("Teste se a função sum lança um erro quando os parametros são 4 e 5(string)", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  test("Teste se a função sum lança um erro quando os parametros são 4 e 5(string)", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});

//Exercicio 2

describe("A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array", () => {
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
  

//Exercicio 3

describe("Se número for divisível por 3 e 5, retorna fizz", () => {
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  test("Se o número for divisível por 3, retorna fizz", () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  test("Se o número for divisível por 5, retorna buzz", () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  test("Se o número não for divisível por 3 e 5, retorna false", () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  test("Se o parametro num não for numero", () => {
    expect(myFizzBuzz("17")).toBe(false);

});
});
