
const buttonCard = document.querySelector('.btn-block')


let id = 0
buttonCard.addEventListener('click', function(){
    const list = document.getElementById('task-list')

    const tasks = document.createElement('div');
    
    tasks.id = "task-" + id;
    tasks.className = "task";
    id++;

    const input = document.createElement('input');
    

    const icon2 = document.createElement('span');
    icon2.className = ('material-symbols-outlined');
    icon2.id = "circle"
    icon2.textContent = 'check_circle'; 
    icon2.style.cursor = 'pointer'; 


    const iconColumn = document.createElement('div');
    iconColumn.style.display = 'flex';
    iconColumn.style.flexDirection = 'column';
    iconColumn.style.alignItems = 'center';
    iconColumn.style.justifyContent = 'center';
    iconColumn.style.gap = '4px';


    const icon = document.createElement('span');
    icon.className = ('material-symbols-outlined');
    icon.textContent = 'close'; 
    icon.style.cursor = 'pointer'; 

    
    const icon3 = document.createElement('span');
    icon3.className = ('material-symbols-outlined');
    icon3.id = "play_circle"
    icon3.textContent = 'play_circle'; 
    icon3.style.cursor = 'pointer'; 

    iconColumn.append(icon,icon3)

    tasks.append(icon2,input,iconColumn)
    list.append(tasks)

})