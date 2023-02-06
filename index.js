const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

    //...
  ]


function superbowlWin(record){
    const sbObject = record.find(recordObj => {
    return (recordObj.result === 'W')
    })
    if (sbObject.result === 'W') {
        return (sbObject.year) 
    }else {
        return sbObject
    }
}

