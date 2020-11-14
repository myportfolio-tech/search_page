# Landing Page - JavaScript Project

The page uses JS on load to generate menu items.
It determines the active section on screen and highlights the menu tab.

This ficticious page would be for a Bolivian coffee company :coffee:
## JS Functions


### getMenuCLassesIDs()
This functions iterates through containers with specific classes and returns ann array of their ids.
```javascript
    const elements = document.querySelectorAll('.banner,.section');
```
It returns the array
 ```IdsArray```


### createLiElements()
The function iterates through the IDsArray and creates li elements for the menu.
Each element has a button innerHTML of the id value.
Each button has an event listener to scroll the section into view.

```javascript
    // creates the li and gives it a class
    let liItem = document.createElement('li');
    liItem.className = "nav-item";
    
    //creates the buttton, set the text and class. 
    let btn = document.createElement('button');
    btn.innerHTML =`${item}`;
    btn.className = "inactive-btn";

    // adds event listener to the button
    btn.addEventListener('click', function()
        {
            scrolltoSection(item);
        });

    // appends the elementst tp the main ul, menuUL
    liItem.appendChild(btn);
    menuUL.appendChild(liItem);
```


### isOnTop(yprop)
This functions uses each element ```yprop```.<br/>
Returns ```true``` if the elemnet in on the right place on the screen,```false``` otherwise.

```javascript
        if(yprop > -50 && yprop < 200 ){return true;}
        else{return false;}
```

### getMenuLiElement()
This function highlight the menu item based on the content on scree.
It takes ```matchedID```, the id of the item currently on screen.
It iterates through all li items to highligt the appropiate menu item

```javascript
    //it adds/ removes classes accordingly.
    if (matchedID == item.lastChild.innerHTML)
        {
            console.log(item.firstChild.innerHTML);
            item.lastChild.classList.remove("inactive-btn");
            item.lastChild.classList.add("active-btn");

        }
    else
        {
            item.lastChild.classList.remove("active-btn");
            item.lastChild.classList.add("inactive-btn");
```

### InitialHomeMenuState()
Simply ensure the active class is assigned to the home tab on page load.
```javascript
        homeMenuLi[0].lastChild.classList.remove("inactive-btn");
        homeMenuLi[0].lastChild.classList.add("active-btn");
```


### displayContainerInfo()

This function grabs all elements with classes of elements with content.
If the content is on screen, it assigns the 'active' class
```javascript
    const containers = document.querySelectorAll('.banner,.section')
```
The function iterates through the elements to inspect their screen location and determins if it is on top.
```javascript
    const props = cont.getBoundingClientRect();
    if (isOnTop(props.y)) 
                {
                    const elem = document.getElementById(cont.id);
                    elem.classList.add("active");

                    //it runs the function to highlight the correct menu tab
                    getMenuLiElement(cont.id);
                }
            else{const elem = document.getElementById(cont.id)
                elem.classList.remove("active")}
```


### Scroll Event Listener
The ```scroll``` listener triggers the set of functions that check screen position for elements, and ssigns the tab on the menu.

```javascript
document.addEventListener('scroll', function() {displayContainerInfo();});
```


## CSS Classes Overview

A set of classes control ```active``` and ```inactive``` elements.
The menu tabs are formatted using the classes

```css
.inactive-btn { }

.active-btn { }
```

The container look is control by the class and pseudo-selectors:


```css
.active{ }

.active img { }

.active h2 { }


.active svg { } 
```


## What's Next?

Although not part of the assignment, I want to animate the SVG image so it highlits the contour of the map as the page loads.
No idea how to do that but that's why we are here.
:cold_sweat:
