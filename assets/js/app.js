
const { createApp } = Vue

createApp({
    data() {
        return {
            
            newTask: null,
            toDoTasks:[
                {
                    text: "fare la spesa",
                    done: false
                },
                {
                    text: "fare l'esercizio di Boolean",
                    done: false
                },
                {
                    text: "portare fuori il cane",
                    done: true
                },
                {
                    text: "chiamare il geometra",
                    done: true
                },
                {
                    text: "portare fuori la spazzatura",
                    done: false
                },
                {
                    text: "preparare la cena",
                    done: true
                },
                {
                    text: "comprare delle penne che scrivono",
                    done: false
                },
            ]


        }
    },

    methods:{
        removeTask(index){
            //console.log("delete", index);
            this.toDoTasks.splice(index, 1)
        },

        addTask(){
            //console.log(this.newTask);
            //aggiungi all'array la nuova task inserita come TEXT dell'oggetto, done: false di default perchè se la sto aggiungendo è perchè devo ancora farla
            
            if(this.newTask.trim().length > 3){
                this.toDoTasks.push({
                    text: this.newTask,
                    done: false
                });
            }
            //svuota l'input
            this.newTask="";
        },

        checkTask(index){
            this.toDoTasks[index].done = !this.toDoTasks[index].done;
            //console.log(this.toDoTasks[index].done);           
        }
    }
    
}).mount('#app')


