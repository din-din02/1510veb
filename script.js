// 1
const users =   [{name: "Ann", age: 18},
                {name: "Ben", age: 9},
                {name: "Clare", age: 30},
                {name: "David", age: 45}]

let Names = users.filter(user => user.age >= 18).map(user => user.name);

console.log(Names)

// 2
const massiv = [65, [465, [365, [454, 5214]]]];

let massiv1 = massiv.flat(3);
console.log(massiv1); 

// 3
const arr = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];

function towel_sort(arr){
    return arr.reduce((acc, cur, i) => {
    return acc.concat(i % 2 === 0 ? cur : cur.reverse());
}, []);
}

console.log(towel_sort(arr))

// 4
const arr1=[2,3,4,546,76,18,21]
const arr2=[3,4,6,8,89,76,18,31]

let result = Array.from(new Set(arr1)).filter(num => arr2.includes(num));

console.log(result)

// 5
const mas=[1,2,34,5,7562,464,23426,2534,223,8]

let chislo=4

function func(mas, chislo) {
    let result = new Array(mas.length);
    
    for (let i = 0; i < mas.length; i++) {
        let Index = (i + chislo) % mas.length;
        result[Index] = mas[i];
    }
    
    return result;
}
console.log(func(mas, chislo));