const sortByPoints = (listObjects) => {
    const list = [];
    Object.keys(listObjects).forEach(key => {
        listObjects[key].key = key;
        list.push(listObjects[key]);
    })

    list.sort((a,b) => b.points - a.points);

    return list;
}


export default sortByPoints;