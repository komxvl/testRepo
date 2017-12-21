function digitize(n) {
    var arrayChar = (""+n).split('');
    console.log("arrayChar",arrayChar);
    var newArray = [];
    for(var i = newArray.length-1; i>=0;i--){
        newArray[i] = parseInt(arrayChar.shift(),10)
    }
    return  newArray
}

digitize(348597);