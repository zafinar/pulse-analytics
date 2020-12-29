export default function uniqueBy(data, key) {

  // instantiate object checking for new keys
  var checkObj = {};

  // instantiate array
  var newData = [];

  // set up for loop to iterate through data based on array length
  for (let i = 0; i < data.length ; i++){
    // set value variable to currently examined dataset value
    let value = data[i][key];

    // check if the dataset value has already been included in the object
    if(typeof(checkObj[value]) == "undefined"){
      // if not included push the data to the new array and set the index of the array to the check object value for future replacements
      newData.push(data[i]);
      checkObj[value] = i

    }
    else{
      // if a value has previously occured replace it with the current data which is later in the array.
      let index = checkObj[value]
      newData[index] = data[i]
    };

  };

  // return the new data.
  return newData

}
