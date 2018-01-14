let namesCount = [
    ['John', 15],
    ['Jon', 12],
    ['Chris', 13],
    ['Kris', 4],
    ['Christopher', 19],
    ['Alan', 19]
];

let synonyms = [
    ['Jon', 'John'],
    ['John', 'Johnny'],
    ['Chris', 'Kris'],
    ['Chris', 'Christopher'],
    ['Alan']
];

let final = [
    [['John', 'Jon', 'Johnny'], 27],
    [['Chris', 'Kris', 'Chirstopher'], 100]
];

console.log(babyNames(namesCount, synonyms));

function babyNames(namesCount, synonyms) {
    let aHash = synonyms.reduce((hash, [head, tail]) => {
        let found = hash.find(
            ([eHead, eTail]) =>
                head == eHead || head == eTail || tail == eHead || tail == eTail
        );

        if (!found) {
            hash.push([head, tail]);
        } else {
            if (found.indexOf(head) < 0) {
                found.push(head);
            }
            if (found.indexOf(tail) < 0) {
                found.push(tail);
            }
        }

        return hash;
    }, []);

    return namesCount.reduce((acum, [name, count]) => {
        let [synonym, ...rest] = aHash.find(
            element => element.indexOf(name) >= 0
        );

        if (synonym) {
            if (!acum[synonym]) {
                acum[synonym] = count;
            } else {
                acum[synonym] += count;
            }
        }
        return acum;
    }, {});
}
