export interface OperacaoAritimetica {
    soma: number,
    multi: Number
}

export const pratica3 = (num1:number, num2:number):OperacaoAritimetica =>{
    const operacao = {
        soma: num1 + num2,
        multi: num1 * num2
    }
    return operacao
}