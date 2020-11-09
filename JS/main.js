// get all class 'container' elements.
// Loop and add <a> item within <li> item. 



function createLiElements() {
    const containers = document.getElementsByClassName('container');
    const menuUL = document.getElementById('main-ul');
    
    for(const cont of containers )
        {
        
            let liItem = document.createElement('li');
            liItem.className = "nav-item";
            liItem.innerHTML = `<div class="menu-container"><a href="#${cont.id}">${cont.id}</a></div>`;  
            menuUL.appendChild(liItem);
        }

}


createLiElements()


function isOnTop(yprop) 
    {
        if(yprop > -100 && yprop < 250 )
        {
            return true;
        }
        else
            {
                return false
            }
    } 


// This function is used to test the position of the containers
// We can use it then to troubleshoot when to set a container as active
function displayContainerInfo()
    {
    const containers = document.getElementsByClassName('container');
    console.clear();
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
