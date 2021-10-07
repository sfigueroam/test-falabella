function itemsSort(items) {

    const itemsSort = items.sort(function(a, b){return a-b}); 
    var number = [], count = [], result = [], prev;
    
    for (let i = 0; i < itemsSort.length; i++) {
        if (itemsSort[i] !== prev ) {
            number.push(itemsSort[i]);
            count.push(1);
        } else 
            count[count.length-1]++;
        prev = itemsSort[i];
    }

    for (let i = count.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (count[j] > count[j + 1]) {
                let tempCount = count[j]
                count[j] = count[j + 1]
                count[j + 1] = tempCount
                let tempNumber = number[j]
                number[j] = number[j + 1]
                number[j + 1] = tempNumber
            }
        }
    }

    for(let i = 0; i < count.length; i++){
        for (let j = 0; j < count[i]; j++)
            result.push(number[i])
    }

    return result;
}

const elements = [4, 5, 6, 5, 4 ,3, 7, 7, 7, 1, 2, 2, 2, 2, 2, 2]

const result = itemsSort(elements)

console.log(result)