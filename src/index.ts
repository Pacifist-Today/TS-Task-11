//Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. 
//Як параметр типу повинен обов'язково виступати функціональний тип.

type TReturnFuncType<T> = T extends (arg: any) => infer R ? R : any

function foo (a: number): string {
    return a.toString()
}

type res = TReturnFuncType<typeof foo>


//Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж,
//де перше значення - це тип, що функція повертає, а другий - тип її параметру

type TSignatureFuncType<T> = T extends (arg: infer U) => infer R ? [R, U] : any

type res2 = TSignatureFuncType<typeof foo>

//Створіть тип, який об'єднує властивості двох об'єктів тільки в тому випадку, якщо їхні значення мають спільний тип. 
//Наприклад: { a: number; b: string } та { b: string; c: boolean } => { b: string; }

type TUniting <T, U> = K in keyof T & typeof T[K] extends K in U & typeof U[K] ? {K: T[K]} : never

type TUniting1 = {b: string; a: number; }
type TUniting2 = {b: string; c: boolean}

const checkingForUnity:TUniting<TUniting1, TUniting2> = {
    b: 'lol',
}
