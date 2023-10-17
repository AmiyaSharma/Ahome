let button= document.querySelector("form")

button.addEventListener("submit", submitform)


function submitform(){

    
 
  let name = document.getElementById("text").value

let obj={
  name:name,};
console.log(obj)

let tasklist =JSON.parse(localStorage.getItem("task-list"))||[]
tasklist.push(obj)
localStorage.setItem("task-list",JSON.stringify(tasklist))

}

let parent = document.getElementById("data1")

let data =JSON.parse(localStorage.getItem("task-list"))||[]
appenddata(data);
function appenddata(data){
parent.innerHTML=""
  data.forEach(function(ele,ind){
    let tr= document.createElement("tr")
    let td1=document.createElement("td")
    td1.textContent=ele.name;
    
    







    let td7=document.createElement("button")
    td7.textContent="Remove";
    td7.addEventListener("click", function(){
let ele = data.splice(ind,1);
let priortylist =JSON.parse(localStorage.getItem("priority-list"))||[]
priortylist.push(ele[0])
localStorage.setItem("priority-list",JSON.stringify(priortylist));
localStorage.setItem("task-list",JSON.stringify(data));
appenddata(data);

    })
    tr.append(td1, td7)
    parent.append(tr);
  })
}























// let user_data = JSON.parse(localStorage.getItem("account-data"))


// let formdata=document.querySelector("form")

// formdata.addEventListener("submit", newdata)

// let data= JSON.parse(localStorage.getItem("Helpers"))||[]

// function newdata(){
    
//     let taskname = document.getElementById("text").value
//     let user = {taskname}

//     data.push(user)
// localStorage.setItem("Helpers",JSON.stringify(data))
    
// }

// let userdata= JSON.parse(localStorage.getItem("Helpers"))||[]

// console.log(userdata)

// let tbody= document.getElementById("data1")


// function showdata(){
  
//     userdata.forEach((user) => {
//         let tr=document.createElement("tr")
//         let taskname= document.createElement("td")
//         let remove=document.createElement("td")
//         remove.addEventListener("click", function(){
//             let ele = data.splice(ind,1);
//             let priortylist =JSON.parse(localStorage.getItem("priority-list"))||[]
//             priortylist.push(ele[0])
//             localStorage.setItem("priority-list",JSON.stringify(priortylist));
//             localStorage.setItem("Helpers",JSON.stringify(userdata));
//             showdata(userdata);
            
//                 })



        
// // taskname.textContent=user.taskname
// // remove.textContent="Delete"
// tr.append(taskname, remove)

// tbody.append(tr)

//     });
// }

// showdata()