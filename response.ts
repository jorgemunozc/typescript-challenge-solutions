interface Response1 {
    type: 'response1',
}

interface Response2 {
    type: 'response2',
}

export type ReturnType<T> = T extends (...args: infer Args) => Promise<infer R>
? [...Args] extends [string, string]
    ? Response1
    : Response2
: never

type Output<Args extends [string, string]> = [...Args] extends [string, string]? Response1 : Response2;
type Algo<T> = T extends [string, string]? true: false
type test2 = Algo<[string, string]>
type F1 = (a: string, b:string) => Promise<any>
type F2 = () => Promise<any>
type F3 = (a: string, b: string, c: string) => Promise<any>
type F4 = (a: number) => Promise<any>
type test = Output<Parameters<F2>>
class MyClass {
        // async myMethod(a?:string): Promise<Response2>
        // async myMethod(a:string, b:string): Promise<Response1>
        async myMethod<T extends [string?, string?]>(a?: T[0], b?: T[1]): Promise<Output<T>> {
        if (a && b) {
            return { type: 'response1' }
        }
        return { type: 'response2' }
    }
}

const myClass = new MyClass();
const shouldBeResponse1 = await myClass.myMethod('pram1', 'b');
const shouldBeResponse2 = await myClass.myMethod();
const should2BeResponse2 = await myClass.myMethod('pram1');