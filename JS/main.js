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


function isOnTop(yprop) 
    {
        if(yprop > 60 && yprop <300 )
        {
            return true;
        }
        else
            {
                return false
            }
    } 



function displayContainerInfo()
    {
    const containers = document.getElementsByClassName('container');
    for(let cont of containers)
        {
            const props = cont.getBoundingClientRect();
            console.log(cont.id)
            console.log(props.y);
            console.log(`${cont.id} is on top: ${isOnTop(props.y)}`)
        }

    }



document.addEventListener('scroll', function() {
    displayContainerInfo();
});




// const navvItems = document.getElementById('main-ul');


// for(const item of navvItems.children) 
//     {
//         console.log(item.getElementsByTagName('a')[0])
//     }
