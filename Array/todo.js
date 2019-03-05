// create an array with five todos

// you have x todos

// print the first and second to last items -> TODO : walk the dog


let todos = ['Js array', 'Js Dom', 'cse425', 'book reading', 'day summary'];

// delete 3rd item
//todos.splice(2,1);
 
//Add a new item onto the end

//todos.push('Listening to song');

// remove the first item from the list

//todos.splice(0,1);

//console.log(`you have todos ${todos.length} left`);
//console.log(todos);

//forEach loop

//todos.forEach(function(item, index){

  //  console.log(`${index+1}. ${item}`)

//})


//convert array to array of objects -> text, compeleted

const todoitems =[
    {
        text: 'Order food',
        compeleted : false             
},
{
       text : 'Sing a song',
       compeleted :false

} ,
{
      text : 'Eat launch',
      compeleted: true
}


]

// create a function to remove  a todo by text value 

const deleteToDo = function(todos, text){
    const index = todos.findIndex(function(todo, item){
        return todo.text.toLowerCase() === text.toLowerCase() ;

    })
    if(index >= 0){
        todos.splice(index,1);

    }
    
}
const name = deleteToDo(todoitems,'Eat launch');
console.log(todoitems);