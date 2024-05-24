let dizi = [{title:" read 30 pages", dueDate: "24.05.2024"}, {title:"go for a 30 min run", dueDate: "24.05.2024"},
{title:"do your homework", dueDate: "24.02.2024"},];

render();

document.querySelector('.add-button')
  .addEventListener('click', ()=>{
    addToList();
  })

document.body
  .addEventListener('keydown', (event)=>{
    if (event.key === 'Enter'){
      addToList();
    }
  })


function addToList() {
  let inputElement = document.querySelector('.title');
  let title =inputElement.value;
  const inputDateElement = document.querySelector('.js-duedate')
  const dueDate = inputDateElement.value;
  let b=  dizi.push({

    //title : title, böyle aynı ismi  paylaşıyolarsa bir kere yazmamız yeterli buna shorthand deniyo. isimleri bilerek aynı verdik
    title,
    dueDate
  });
  let c =document.querySelector('.todo-list').innerHTML = dizi;
  console.log(dizi);
  inputElement.value= '';




  
  render();
}
function render() {
  let todoListHTML = '';

  /* forEach method
  
function render() {
  let todoListHTML = '';

  dizi.forEach((todoObject, index) => {
    const {title, dueDate} = todoObject;

    const html = `<div>
        ${title} 
      </div>
      <div> ${dueDate} </div>
      <button class="del-button" onclick="dizi.splice(${i}, 1);
      render()">
        Delete
      </button>
    `;
    todoListHTML+= html;
  });
   console.log(todoListHTML);
  document.querySelector('.todo-list')
    .innerHTML = todoListHTML;

}
  */ 
  
  for (let i = 0; i < dizi.length; i++) {
    const todoObject = dizi[i];
   // let title = todoObject.title; 
    //let dueDate = todoObject.dueDate;
    //this will do the same thing as the above ones
    let {title, dueDate} = todoObject;
    const html = `<div>
      ${title} </div>
      <div> ${dueDate} </div>
      <button class="del-button" onclick="dizi.splice(${i}, 1);
      render()">Delete</button>
     `;
    todoListHTML+= html;

  }
  console.log(todoListHTML);
  document.querySelector('.todo-list')
    .innerHTML = todoListHTML;
}