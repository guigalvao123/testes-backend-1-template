import {pratica3} from '../src/pratica3'

describe("Teste o arquivo pratica3.ts",()=>{
    test("A funcao recebe dois numeros e retorna um objeto com duas propriedades: soma e multi ",()=>{
        const result = pratica3(3,5)
        const expectResult = {
            soma: 8,
            multi: 15
        }
        expect(result).toEqual(expectResult)
    })
})