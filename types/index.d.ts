declare module "csharp-enumeration-functions" {
    export function toDictionary<T, V = T>([] : T[], keySelector : (obj : T) => number, elemSelector? : (obj : T) => V, skipElementsWithNoKeys? : boolean) : {
        [key : number] : V
    };
    export function toDictionary<T, V = T>([] : T[], keySelector : (obj : T) => string, elemSelector? : (obj : T) => V, skipElementsWithNoKeys? : boolean) : {
        [key : string] : V
    };

    export function toLookup<T, V = T>([] : T[], keySelector : (obj : T) => number, elemSelector? : (obj : T) => V, skipElementsWithNoKeys? : boolean) : {
        [key : number] : V[]
    };

    export function toLookup<T, V = T>([] : T[], keySelector : (obj : T) => string, elemSelector? : (obj : T) => V, skipElementsWithNoKeys? : boolean) : {
        [key : string] : V[]
    };
}