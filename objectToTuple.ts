interface Obj {
    a: string,
    b: string,
    c: number,
    d: boolean,
}

type Push<Arr extends any[], El extends any> = [...Arr, El]
type Tuple<O extends Object, Acc extends any[]= []> = O extends keyof O? P: never

type test = Tuple<Obj>
type test2 = Push<Push<[], string>, boolean>