document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value);
    form.reset()
  })

  function buildToDo(new_task) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${new_task} `
    p.appendChild(btn)
    document.querySelector('#tasks').appendChild(p)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }

  // const input = document.getElementById('#new-task-description')
  // input.addEventListener('click', function() {    
  // });
});
