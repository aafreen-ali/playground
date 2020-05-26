const tasks={
    tasks:[
        {
            text:"Grocery Shopping",
            completed:true
        },
        {
            text:"Clean Yard",
            completed:false
        },
        {
            text:"Film Course",
            completed:false
        },
        {
            text:"Node js Course",
            completed:true
        },
    ],
    getTasksToDo:function(){
        return this.tasks.filter((task)=> task.completed===false)
      
        // return this.tasks.filter((task)=>{
        //     return task.completed===false
        // })
    }

}
console.log(tasks.getTasksToDo());