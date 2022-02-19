function parse(qs) {
    const queryString = qs.substr(0);
    const chunks = queryString.split('&');
    return chunks
        .map((chunk) => {
            const[key, value] = chunk.split('=');
            return {key, value};
        })
        .reduce((result, item) => {
            result[item.key] = item.value;
            return result;
        }, {});
    // const result = chunks.map((chunk) => {
    //     const [key, value] = chunk.split('=');
    //     // const parts = chunk.split('=');
    //     // const key = parts[0];
    //     // const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    //     // result[key] = value;
    //     return { key, value};
    // });
    // return result;
}

let qs = 'banana=10&apple=20&orange=30'
let fruits = parse(qs);
console.log(fruits);
// fruits.forEach(element => console.log(element));
//console.log(fruits[0]);