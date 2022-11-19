const filterObjectsByDate = (listObjects) => {
    const list = [];
    Object.keys(listObjects).forEach(key => {
        listObjects[key].key = key;
        list.push(listObjects[key]);
    })

    list.sort((a,b) => new Date(convertToValidDate(a.date)) - new Date(convertToValidDate(b.date)));

    return list;
}

function convertToValidDate(date){
    const [day, month, year ] = date.split('-');
 
    return `${year}-${month}-${day}`;
}

export default filterObjectsByDate;