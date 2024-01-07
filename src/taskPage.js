
export default function taskPage(){
    const second = document.getElementById('second')
    const pageContent = document.createElement('div')
    pageContent.setAttribute('id', 'pageCont')
    second.appendChild(pageContent)

    //h2
    const h2Proyect = document.createElement('h2')
    h2Proyect.textContent  = 'Tasks'
    pageContent.appendChild(h2Proyect)


    //add task
    let addTask = document.createElement('input')
    addTask.setAttribute('id', 'addTask')
    addTask.placeholder = 'Add Task'
    pageContent.appendChild(addTask)

    //create btn
    const btnCreate = document.createElement('button')
    btnCreate.classList.add('btnCreate')
    btnCreate.textContent  = 'Add Task'
    pageContent.appendChild(btnCreate)


    function validationInput(){
        let addTask = document.getElementById('addTask').value

        if(addTask === ''){
            alert('complete')
            return
        }
        addingTask()

        document.getElementById('addTask').value = ''


    }

    //creat the tasks
    function addingTask(){
        let addTask = document.getElementById('addTask').value
        const pageContent = document.getElementById('pageCont')
        let task = document.createElement('div')
        task.classList.add('task')

        

        //text Container
        let textContainer = document.createElement('div')
        textContainer.innerHTML = addTask
        textContainer.classList.add('textContainer')
        task.appendChild(textContainer)
        
        //btnContent
        const btnTaskContent = document.createElement('div')
        btnTaskContent.setAttribute('id', 'btnTaskContent')
        task.appendChild(btnTaskContent)

        //btn finished
        let status = document.createElement('button')
        status.innerHTML = '<i class="bi bi-check-lg"></i>'
        status.classList.add('status')
        btnTaskContent.appendChild(status)

        let finished = false
        status.addEventListener('click',()=>{
            if(finished == true){
                status.innerHTML = '<i class="bi bi-x-lg"></i>'
                task.setAttribute('id', 'finished')
                
            }if(finished == false){
                status.innerHTML = '<i class="bi bi-check-lg"></i>'
                task.setAttribute('id', '')
            }

            finished = !finished
        })

        //btn Edit
        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>'
        btnEdit.classList.add('btnEdit')
        btnTaskContent.appendChild(btnEdit)

        btnEdit.addEventListener('click', ()=>{
            textContainer.contentEditable = true
            textContainer.focus()
        })

        //btn Trash
        let trash = document.createElement('button')
        trash.innerHTML = '<i class="bi bi-trash-fill"></i>'
        trash.classList.add('trash')
        btnTaskContent.appendChild(trash)

        trash.addEventListener('click', ()=>{
            task.remove()
        })

        pageContent.appendChild(task)
    }

    btnCreate.addEventListener('click' , validationInput)
}