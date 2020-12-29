export default function sortByPriority(data) {

var lowPriority = []

var mediumPriority = []

var highPriority = []

for (let i = 0 ; i < data.length ; i ++){
  if (data[i].priority === "Low"){
    lowPriority.push(data[i])
  }
  else if (data[i].priority === "Medium"){
    mediumPriority.push(data[i])
  }
  else {highPriority.push(data[i])}

}

return highPriority.concat(mediumPriority).concat(lowPriority) 


}
