
// select the "banner" <div>
// select all <section> as they all have a class of "section"
//return array of IDs

function getMenuCLassesIDs()
    {
        let IdsArray = [];
        const elements = document.querySelectorAll('.banner,.section');
        for(const elm of elements)
            {
                IdsArray.push(elm.id);
            }
        
        return IdsArray;
    };


//iterate through the IdsArray and create and append <li> items

function createLiElements(meunItems) {
    
    // select the <ul> element already in the menu. it has class of "main-ul"
    const menuUL = document.getElementById('main-ul');

    // Create and append an <li> item with a <a> tag in it.
    // Append it to the <ul> element

    for(const item of meunItems)
        {
            console.log(item);
            let liItem = document.createElement('li');
            liItem.className = "nav-item";

            //use the container id to create an anchor
            liItem.innerHTML = `<a href="#${item}">${item}</a>`;  
            menuUL.appendChild(liItem);
        }
}



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
    };


//This functions finds the first <li> item in the navigation, the home tab, 
//and sets it active by default.

function InitialHomeMenuState()
    {
        homeMenuLi = document.getElementsByClassName("nav-item");
        console.log(homeMenuLi)
        homeMenuLi[0].firstChild.classList.add("active-menu");
        homeMenuLi[0].firstChild.style.color = "#000839";
    };



// This function is used to test the position of the containers
// We can use it then to troubleshoot when to set a container as active

function displayContainerInfo()
    {
    const containers = document.querySelectorAll('.banner,.section')
    console.clear();
    for(let cont of containers)
        {
            const props = cont.getBoundingClientRect();
            console.log(props);
            if (isOnTop(props.y)) 
                {
                    const elem = document.getElementById(cont.id);
                    // console.log(elem);
                    elem.classList.add("active");
                    getMenuLiElement(cont.id);
                    break;

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

const meunItems = getMenuCLassesIDs();
createLiElements(meunItems);
InitialHomeMenuState();

