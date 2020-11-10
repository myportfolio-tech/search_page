// get all class 'container' elements.
// Loop and add <a> item within <li> item. 



function createLiElements() {
    
    // select all <section> as they all have a class of "section"
    const containers = document.getElementsByClassName('section');
    
    // select the <ul> element already in the menu. it has class of "main-ul"
    const menuUL = document.getElementById('main-ul');

    // Create and append an <li> item with an <a> element in it.
    // Append it to the <ul> element

    for(const cont of containers )
        {
            let liItem = document.createElement('li');
            liItem.className = "nav-item";
            // liItem.innerHTML = `<div class="menu-container" id="${cont.id}"><a href="#${cont.id}">${cont.id}</a></div>`;  
            
            //use the container id to create an anchor
            liItem.innerHTML = `<a href="#${cont.id}">${cont.id}</a>`;  
            menuUL.appendChild(liItem);
        }
}

createLiElements()

// Determine if a <container> is in the main display range 

function isOnTop(yprop) 
    {
        if(yprop > -100 && yprop < 250 )
        {
            return true;
        }
        else
        {
            return false;
        }
    };


function getMenuLiElement(matchedID)
    {
        //get all <li> under the <ul> element
        const menuListItems = document.getElementsByClassName("nav-item");             
        
        //get the text in the <a> element
        for(const item of menuListItems)
            {
                if (matchedID == item.firstChild.innerHTML)
                    {
                        console.log(item.firstChild.innerHTML);
                        item.firstChild.classList.add("active-menu");
                        item.firstChild.style.color = "#000839";
                    }
                else
                    {
                        item.firstChild.classList.remove("active-menu");
                        item.firstChild.style.color = 'rgba(0, 168, 204, .5)';
                    } 

            }
    }




// This function is used to test the position of the containers
// We can use it then to troubleshoot when to set a container as active

function displayContainerInfo()
    {
    const containers = document.getElementsByClassName('section');
    console.clear();
    for(let cont of containers)

        {
            const props = cont.getBoundingClientRect();
            console.log(props);
            if (isOnTop(props.y)) 
                {
                    const elem = document.getElementById(cont.id);
                    console.log(elem);
                    elem.classList.add("active");
                    getMenuLiElement(cont.id);


                }
            else
                {
                    const elem = document.getElementById(cont.id)
                    elem.classList.remove("active")
                }
        }

    }



document.addEventListener('scroll', function() {
    displayContainerInfo();
});


// CALL FUNCTIONS //

