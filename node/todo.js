const fs = require("fs")

let command = process.argv[2]
let arg = process.argv[3]
let filePath = "./task.json"

const loadTasks = ()=>{
    try{
        let bufferData = fs.readFileSync(filePath)
        let dataJson = bufferData.toString()
        return JSON.parse(dataJson)
    }
    catch{
return []
    }
}

const saveTask = (tasks)=>{
    let dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task)=>{
    let tasks = loadTasks()
    tasks.push(task)
    saveTask(tasks)
}

const listTasks = ()=>{
   let tasks =  loadTasks()
   if(tasks.length > 0) {
       
       tasks.forEach((task, index)=>{
           console.log(`${index+1} : ${task}`)
        })
    }
    else {
        console.log("list is empty :: add atleast one task!")
    }
}

const delTask =(index)=>{
    let tasks = loadTasks()
    let newListTask = tasks.filter((task, i) => {
      if (i != index){
        return task
      }
    })
    saveTask(newListTask)

}



if(command == "add"){
    addTask(arg)
}
else if(command == "list"){
    listTasks()
}
else if(command == "del"){
    delTask(parseInt(arg)-1)
}

else {
    console.log("wrong command input!")
}