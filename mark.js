const mark = () => {

    const char = (x) => (typeof x == 'number') ? String.fromCharCode(x) : '';
    const int = (c) => (typeof c == 'string') ? c.charCodeAt(0) : -1;

    const newArray = (start, end, step=1) => {
        if (typeof start == typeof end && ['string', 'number'].includes(typeof start)) {
            if (typeof start == 'string') {
                const length = Math.floor((Math.abs(int(end) - int(start)) + step) / step);
                const inc = (end > start) ? 1 : -1;
                const s = int(start);
                return Array(length).fill().map((_, i) => char(s + (i * inc) * step));
            } else {
                const length = Math.floor((Math.abs(end - start) + step) / step);
                const inc = (end > start) ? 1 : -1;
                return Array(length).fill().map((_, i) => start + (i * inc) * step);
            }
        }
    }

    const transpose = (arr) => arr.map((_,i) => arr.map(row => row[i]));

    const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

    const product = (arr) => arr.reduce((acc, x) => acc * x, 1);

    const sort = (arr) => arr.sort((a,b) => a - b);

    const sortc = (arr) => arr.sort((a, b) => int(a) - int(b))

    const max = (arr) => arr.reduce((acc, x) => (acc > x) ? acc : x, arr[0]);

    const min = (arr) => arr.reduce((acc, x) => (acc < x) ? acc : x, arr[0]);

    const count = (arr, elem) => arr.reduce((acc, x) => (x == elem) ? acc + 1 : acc, 0);

    const countAll = (arr) => arr.reduce((acc,x) => {
        acc[x] = (acc[x] || 0) + 1;
        return acc;
    },{});

    const mode = (arr) => arr.reduce((acc, x) => (count(arr, x) > count(arr, acc)) ? x : acc);

    const least = (arr) => arr.reduce((acc, x) => (count(arr, x) < count(arr, acc)) ? x : acc);

    const mean = (arr, round=true) => (round) ? Math.round(sum(arr) / arr.length) : sum(arr) / arr.length;

    const median = (arr, round=true) => (round) ? sort(arr)[Math.floor((arr.length - 1) / 2)] : sort(arr)[Math.ceil((arr.length - 1) / 2)]

    const log = (a, name='') => {
      (name) ? console.log(name, a) : console.log(a);
      return a;
    }



    return {
        newArray,
        transpose,
        product,
        sum,
        sort,
        sortc,
        max,
        min,
        count,
        countAll,
        mode,
        median,
        least,
        mean,
        char,
        int,
        log
    }
}

export default mark();