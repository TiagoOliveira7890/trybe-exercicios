// loginValidation.test.js
const sum = require("./sum.js");
  
describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    test("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4,5)).toBe(9);
}) 
 test("Teste se o retorno de sum(0, 0) é 0", () => {
      expect(sum(0,0)).toBe(0);
    })

    test("Teste se a função sum lança um erro quando os parametros são 4 e 5(string)", () => {
      expect(() => { sum(4, "5") }).toThrow();
    })

    test("Teste se a função sum lança um erro quando os parametros são 4 e 5(string)", () => {
      expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
    })
    
  });


