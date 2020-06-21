const getValidValues = (dataList) => {
    let validData = [];
    dataList.forEach(data => {
        if(data.data()) {
            validData.push(data.data());
        }
    });
    return validData;
}

const getValidValue = (value) => {
    if(value.data()) {
        return value.data();
    }
    throw Error('Element introuvable');
}

module.exports = { getValidValues, getValidValue }