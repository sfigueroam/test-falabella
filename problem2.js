function preprocessDate(dates) {
    var resultSplit, day, month, year;
    var result = []

    for (let i = 0; i < dates.length; i++) {
        resultSplit = dates[i].split(" ")
        day = resultSplit[0]
        month = resultSplit[1]
        year = resultSplit[2]
        result.push(year + '-' + processMonth(month) + '-' + processDay(day))
    }

    return result
}

function processDay(day) {
    var newDay
    newDay = day.slice(0, -2)
    if (newDay.length == 1)
        newDay = '0' + newDay

    return newDay
}

function processMonth(month) {
    var numberMonth;
    switch (month) {
        case 'Jan':
            numberMonth = '01'
            break;
        case 'Feb':
            numberMonth = '02'
            break;
        case 'Mar':
            numberMonth = '03'
            break;
        case 'Apr':
            numberMonth = '04'
            break;    
        case 'May':
            numberMonth = '05'
            break;
        case 'Jun':
            numberMonth = '06'
            break;
        case 'Jul':
            numberMonth = '07'
            break;
        case 'Aug':
            numberMonth = '08'
            break;    
        case 'Sep':
            numberMonth = '09'
            break;
        case 'Oct':
            numberMonth = '10'
            break;
        case 'Nov':
            numberMonth = '11'
            break;
        case 'Dec':
            numberMonth = '12'
            break;    
    }

    return numberMonth
}

const dates = ['20th Oct 2052', '6th Jun 1933', '26th May 1960', '20th Sep 1958', '16th Mar 2068', '25th May 1912', '16th Dec 2018', '26th Dec 2061', '4th Nov 2030', '28th Jul 1963'];

const result = preprocessDate(dates)

console.log(result)
