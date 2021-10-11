const data = "Some random data";

//EXO 1
export const Hello = (Hello) => Hello

// EXO 2

export const Calculs = (Calculs) => Calculs * 2


// EXO 3


export let stringB = (stringB = 'example') => stringB
export const stringA = (stringA = 'example') => stringA
export const test = (test = 'test') => test

//EXO 4

export const objectA = {}
objectA.example = "valeur"

//EXO 5

objectA.example = "otherValue"

//EXO 6

// plus tard

//EXO 7 pas fini comprend pas

export const objectB = {}
objectB.example = "value"
    ?.valueOf(objectB.example)
    .valueOf(objectB.example)

//EXO 8

//plus tard

//EXO 9

const condition = 2;
export const resultat = condition == 2 ? 'istrue' : condition != 2 ? 'isFalse' : 'error';

//EXO 10

export const secretMessage = () => {

    const obj = [
        'first message',
        {
            secret: {
                secretMessage: 'something very secret',
                publics: 'something public',
            }
        }
    ]
    const [
        firstMessage,
        {
            secret:
                {
                secretMessage,
                publics,
            }
        }
    ]= obj;
    console.log(firstMessage)
    console.log(secretMessage)
    console.log(publics)

}

//EXO 11

export const exo11 = (param1, param2, param3) => {
    console.log(param1)
    console.log(param2)
    console.log(param3)
}

//EXO 12
export const afficher = (callback)=>{
    console.log(...callback)
}

export const simulatedNetworkFetchWithCallback = (callback) =>
    setTimeout(
        () =>
            callback([
                {
                    day: "MONDAY",
                    hours: [
                        { from: "8:30", to: "12:00" },
                        { from: "14:00", to: "18:00" },
                    ],
                },
            ]),
        1000
    );



        export default data;