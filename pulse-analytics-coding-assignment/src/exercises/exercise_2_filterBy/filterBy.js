export default function filterBy(data, searchTerm, keys) {
// instantiate new array
let newArray = []


// create for loop to check against dataset based on length
for (let i = 0 ; i < data.length ; i ++){

  // set variable for current object being checked
  let object = data[i]

  // create for loop to check array for each key present
  for( let a = 0 ; a < keys.length; a++){

    // set variable for current key value being checked
    let key = keys[a]

    // check if current key value has matches with the search term.
    if( object[key].toLowerCase().includes(searchTerm.toLowerCase()) ){

    // add object to new array if it matches search terms
    newArray.push(object)
    break;

    }

  }

}

// return new array.
return newArray


}
