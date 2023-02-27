import {pratica2} from '../src/pratica2' 

describe("Teste do arquivo pratica2.ts", () =>{
    test("A funcao recebe um parametro e retorna null caso seja diferente de 'number'", ()=>{
        const result = pratica2("1" as any)

        //expect(result).toBeNull()
        //expect(result).not.toBe(true)
        expect(result).toBe(null)
    })

    test("A funcao recebe um numero e que se for diferente de um numero inteiro, deve retornar null", ()=>{
        const result = pratica2(101.1)

        expect(result).toBeNull()
    })
    test("Se o numero for impar, retorne false", ()=>{
        const result = pratica2(1)

        expect(result).toBeFalsy()
    })
    test("Se o numero for par, retorne true", ()=>{
        const result = pratica2(2)

        expect(result).toBeTruthy()
    })
})