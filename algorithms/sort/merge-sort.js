// Example
// List 3 2 7 1
// The idea is to sub-divide the list in sub-arrays
// 3 | 2 | 7 | 1
// 3 2  |  7 1
// compare 3 with 2 | compare 7 with 1
// 2 3 | 1 7
// 1 2 3 7
//
function mergeSort(list) {
    if (list.length === 1) {
        return list;
    }

    let aLeft = [];
    let aRight = [];
    let halfIndex = Math.round(list.length / 2);

    for (let i = 0; i < list.length; i++) {
        let element = list[i];

        if (i < halfIndex) {
            aLeft.push(element);
        } else {
            aRight.push(element);
        }
    }

    aLeft = mergeSort(aLeft);
    aRight = mergeSort(aRight);

    return sort(aLeft, aRight);
}

function sort(left, right) {
    console.log('left:', left, 'right:', right);
    var result = [];

    while (left.length > 0 && right.length > 0) {
        let [headLeft, ...restLeft] = left;
        let [headRight, ...restRight] = right;
        if (headLeft > headRight) {
            result.push(headRight);
            right = restRight;
        } else {
            result.push(headLeft);
            left = restLeft;
        }
    }

    if (left.length > 0) {
        result.push(...left);
    }

    if (right.length > 0) {
        result.push(...right);
    }
    return result;
}

console.log(mergeSort([3, 2, 1, 7, -1]));
