

function randColor()
{
    const option = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++)
    {
        color+=option[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeScale()
{
    var gridContainer = document.getElementById('grid-container');
    let amount=16;
    gridContainer.innerHTML = '';
    const gridSize = parseInt(document.getElementById('gridSizeInput').value);
    if(gridSize<101 &&gridSize>0)
    {
        const containerSize = gridSize * 20;
        gridContainer.style.width = `${containerSize}px`;
        gridContainer.style.height = `${containerSize}px`;

        for (let i = 0; i < gridSize*gridSize; i++) 
            {
                const div = document.createElement('div');
                div.classList.add('grid-item');
                
                div.addEventListener('mouseover', function() {
                    div.style.backgroundColor = 'lightcoral'; // Change color on hover
                });
        
                div.addEventListener('mouseout', function() {
                    div.style.backgroundColor = randColor(); // Revert color when hover ends
                });
                
                gridContainer.appendChild(div);
        }
    }
    else
    {
        gridContainer.innerHTML = "Invalid Input try again(1-100)";
    }
}
var gridContainer = document.getElementById('grid-container');
let amount=16;
for (let i = 0; i < amount*amount; i++) 
    {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'lightcoral'; // Change color on hover
        });

        div.addEventListener('mouseout', function() {
            div.style.backgroundColor = randColor(); // Revert color when hover ends
        });
        
        gridContainer.appendChild(div);
}

