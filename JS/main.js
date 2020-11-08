// get all class 'container' elements.
// Loop and add <a> item within <li> item. 

function createLi() {
    const containers = document.getElementsByClassName('container');
    const menuUL = document.getElementById('menu');
    
    for(const cont of containers )
        {
        
            let liItem = document.createElement('li');
            liItem.className = "nav-item";
            liItem.innerHTML = `<a href="#${cont.id}">${cont.id}</a>`;  
            menuUL.appendChild(liItem);
        }

}


createLi()