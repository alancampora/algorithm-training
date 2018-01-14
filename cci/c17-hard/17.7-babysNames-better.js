let namesCount = {
    John: 15,
    Jon: 12,
    Chris: 13,
    Kris: 4,
    Christopher: 19,
    Johnny: 100,
    Alan: 19
};

let synonyms = [
    ['Jon', 'John'],
    ['John', 'Johnny'],
    ['Chris', 'Kris'],
    ['Chris', 'Christopher']
];

//let result = {
//Jonh: {count: 15, synonyms: ['Jon', 'John']}
//};

function babyNames(namesCount, synonyms) {
    let result = {},
        alternates;

    for (let i = 0; i < synonyms.length; i++) {
        sumElement(synonyms[i], namesCount, result);
    }

    for (var key in namesCount) {
        if (namesCount[key] > 0) {
            result[key] = {
                count: namesCount[key],
                synonyms: []
            };
        }
    }

    return result;
}

function sumElement([element, relatedElement], namesCount, result) {
    for (let key in result) {
        let oName = result[key];

        if (
            oName.synonyms.indexOf(element) >= 0 ||
            oName.synonyms.indexOf(relatedElement) >= 0
        ) {
            let found = oName;

            found.count += namesCount[element];
            found.count += namesCount[relatedElement];

            if (found.synonyms.indexOf(relatedElement) < 0) {
                found.synonyms.push(relatedElement);
            }

            if (found.synonyms.indexOf(element) < 0) {
                found.synonyms.push(element);
            }

            namesCount[element] = 0;
            namesCount[relatedElement] = 0;

            return;
        }
    }

    result[element] = {
        count: namesCount[element] + namesCount[relatedElement],
        synonyms: [element, relatedElement]
    };

    namesCount[element] = 0;
    namesCount[relatedElement] = 0;
}

console.log(babyNames(namesCount, synonyms));
