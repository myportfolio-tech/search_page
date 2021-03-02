# search_page

A landing page that uses JavaScript to create and style elements

## Live Page
https://myportfolio-tech.github.io/search_page/

### JS Functions

```js

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
'''

'''python

def calculate_image_sizes (shape):
    height = 150
    width = int(150 * shape[1] / shape[0])

    return width, height 

```