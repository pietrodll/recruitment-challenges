export const fibonacci = (index: number): number => {
    if (index === 0) return 0;
    if (index === 1) return 1;

    let a = 1;
    let b = 0;

    for (let i = 1; i < index; ++i) {
        const tmp = a;
        a = a + b;
        b = tmp;
    }

    return a;
}

// export const fibonacci = (index: number): number => {
//     const memo = [0, 1];

//     function aux (index: number) {
//         if (index < memo.length) {
//             return memo[index];
//         }

//         memo[index] = aux(index - 1) + aux(index - 2);
//         return memo[index];
//     }

//     return aux(index);
// };
