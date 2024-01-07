
export default function proyectPage(){
    const second = document.getElementById('second')
    const pageContent = document.createElement('div')
    pageContent.setAttribute('id', 'pageCont')
    second.appendChild(pageContent)

    //H2
    const h2Proyect = document.createElement('h2')
    h2Proyect.textContent  = 'Projects'
    pageContent.appendChild(h2Proyect)


    //add Proyect
    const addProyect = document.createElement('input')
    addProyect.setAttribute('id', 'addProyect')
    addProyect.placeholder = 'Add Proyect'
    pageContent.appendChild(addProyect)

    //add Proyect
    const btnCreate = document.createElement('button')
    btnCreate.classList.add('btnCreate')
    btnCreate.textContent  = 'Add Proyect'
    pageContent.appendChild(btnCreate)

    //container proyects
    const containerProyects = document.createElement('div')
    containerProyects.setAttribute('id','contProyects')
    pageContent.appendChild(containerProyects)

    function addProyectPage(){
        const nameProyect = document.getElementById('addProyect').value
        let proyectFolder = document.createElement('div')
        const pageContent = document.getElementById('pageCont')
        proyectFolder.classList.add('proyectFolder')

        //text Container
        let textContainer = document.createElement('div')
        textContainer.innerHTML = nameProyect
        textContainer.classList.add('textContainer')
        proyectFolder.appendChild(textContainer)
        
        //btnContent
        const btnTaskContent = document.createElement('div')
        btnTaskContent.setAttribute('id', 'btnTaskContent')
        proyectFolder.appendChild(btnTaskContent)

        //btn finished
        let status = document.createElement('button')
        status.innerHTML = '<i class="bi bi-check-lg"></i>'
        status.classList.add('status')
        btnTaskContent.appendChild(status)

        let finished = false
        status.addEventListener('click',()=>{
            if(finished == true){
                status.innerHTML = '<i class="bi bi-x-lg"></i>'
                proyectFolder.setAttribute('id', 'finished')
                
            }if(finished == false){
                status.innerHTML = '<i class="bi bi-check-lg"></i>'
                proyectFolder.setAttribute('id', '')
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
            proyectFolder.remove()
        })


        proyectFolder.addEventListener('click', ()=>{
           
            clear()
            newSection()
        })

        function newSection(){
            document.getElementById('addProyect')
            const second = document.getElementById('second')
            let newSect = document.createElement('div')
            newSect.setAttribute('id','newSect')
            second.appendChild(newSect)

            

            //header part of NS
            const headerSec = document.createElement('div')
            headerSec.classList.add('headerSec')
            newSect.appendChild(headerSec)

             //back button
            const backBtn = document.createElement('button')
            backBtn.classList.add('backBtn')
            backBtn.innerHTML = '<i class="bi bi-arrow-left"></i>'
            headerSec.appendChild(backBtn)

            //title
            const titleOfNewSec = document.createElement('h2')
            titleOfNewSec.textContent = nameProyect
            titleOfNewSec.setAttribute('id', 'ToN')
            headerSec.appendChild(titleOfNewSec)

            backBtn.addEventListener('click', ()=>{
                clear()
                newSect.remove()
                proyectPage()
            })

            //h2
            const h2Proyect = document.createElement('h2')
            h2Proyect.textContent  = 'Tasks'
            newSect.appendChild(h2Proyect)

            //add task
            let addTask = document.createElement('input')
            addTask.setAttribute('id', 'addTask')
            addTask.placeholder = 'Add Task'
            newSect.appendChild(addTask)

            //btnCreate
            const btnCreate = document.createElement('button')
            btnCreate.classList.add('btnCreate')
            btnCreate.textContent  = 'Add Task'
            newSect.appendChild(btnCreate)

            function addingTask(){
                let addTask = document.getElementById('addTask').value
                let newSect = document.getElementById('newSect')
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
                
                document.getElementById('addTask').value = ''
                newSect.appendChild(task)
            }

            btnCreate.addEventListener('click', addingTask)
            
        }


        document.getElementById('addProyect').value = ''
        pageContent.appendChild(proyectFolder)
    }

    function clear(){
    const second = document.getElementById('second')
    const pageContent = document.getElementById('pageCont')

    if(pageContent){
        second.removeChild(pageContent)
    }
    }

    btnCreate.addEventListener('click', addProyectPage)

}


