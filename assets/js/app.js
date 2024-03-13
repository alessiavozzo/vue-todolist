
const { createApp } = Vue

createApp({
    data() {
        return {
            
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
            console.log("delete", index);
            this.toDoTasks.splice(index, 1)
        }
    }
}).mount('#app')
