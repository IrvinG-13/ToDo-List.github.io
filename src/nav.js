import proyectPage from "./proyectPage"
import taskPage from "./taskPage"

export default function nav(){
    const content = document.getElementById('content')
    const second = document.createElement('div')
    second.setAttribute('id', 'second')
    content.appendChild(second)

    //nav
    const navigation = document.createElement('nav')
    navigation.setAttribute('id', 'nav')
    second.appendChild(navigation)

    //proyects tab
    const proyects = document.createElement('p')
    proyects.setAttribute('id', 'proyectsFolder')
    proyects.innerHTML = '<i class="bi bi-briefcase"></i> Projects'
    navigation.appendChild(proyects)

    //proyects tab
    const tasks = document.createElement('p')
    tasks.setAttribute('id', 'tasksFolder')
    tasks.innerHTML = '<i class="bi bi-file-earmark"></i> Tasks'
    navigation.appendChild(tasks)

    tasks.addEventListener('click', ()=>{
        clear()
        taskPage()
    })

    proyects.addEventListener('click', ()=>{
        clear()
        proyectPage()
    })

    




}

function clear(){
    const second = document.getElementById('second')
    const pageContent = document.getElementById('pageCont')

    if(pageContent){
        second.removeChild(pageContent)
    }
}

