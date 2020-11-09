// get all class 'container' elements.
// Loop and add <a> item within <li> item. 

function createLiElements() {
    const containers = document.getElementsByClassName('container');
    const menuUL = document.getElementById('main-ul');
    
    for(const cont of containers )
        {
        
            let liItem = document.createElement('li');
            liItem.className = "nav-item";
            liItem.innerHTML = `<a href="#${cont.id}">${cont.id}</a>`;  
            menuUL.appendChild(liItem);
        }

}


createLiElements()

const navvItems = document.getElementById('main-ul');


for(const item of navvItems.children) 
    {
        console.log(item.getElementsByTagName('a')[0])
    }
