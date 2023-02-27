import {fixacao} from '../src/fixacao'

describe("Teste do arquivo fixacao.ts",()=>{
    test("A funcao deve separar a palavra DEV em [D,E,V]",()=>{
        const result = fixacao('DEV')
        expect(result).toEqual(["D","E","V"])
    })
})