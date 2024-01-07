

export default  function header (){
    const content = document.getElementById('content')
    const header = document.createElement('header')
    header.setAttribute('id', 'header')
    content.appendChild(header);

    
    //button list
    const btnList = document.createElement('button')
    btnList.setAttribute('id', 'btnList')
    btnList.innerHTML = '<i class="bi bi-list"></i>'
    header.appendChild(btnList)


    //title
    const title = document.createElement('h1')
    title.textContent = 'To-do List'
    header.appendChild(title)

    //Dark button
    const btnMode = document.createElement('button')
    btnMode.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'
    btnMode.setAttribute('id', 'btnMode')
    header.appendChild(btnMode)

    
    let active = false

    btnMode.addEventListener('click', ()=>{
        if(active == true){
             btnMode.innerHTML = '<i class="bi bi-moon-fill"></i>'
        }else if(active == false){
             btnMode.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'
            
        }
        active = !active
    })

    let expand = false
    btnList.addEventListener('click', ()=>{
        const navigation = document.getElementById('nav')
        if(expand == true){
            navigation.setAttribute('style', 'display: none;')
        }else if(expand == false){
            navigation.setAttribute('style', 'display: block;')
        }

        expand = !expand
        
    })
}
