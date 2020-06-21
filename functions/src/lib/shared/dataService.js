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

const putScoreInSeance = (seance, score) => {
    const indexMachine = seance.machines.findIndex(elem => elem.idMachine === score.idMachine);
    indexMachine > 0 ? seance.machines[indexMachine] = score : seance.machines.push(score);
    return seance
  }

module.exports = { getValidValues, getValidValue, putScoreInSeance }