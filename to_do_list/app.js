const addtask = document.querySelector('.app-wrapper button')
const deleteTask = document.querySelector('.task-box button')
const taskBox = document.querySelector('.show-tasks-list')
let inputTask = document.querySelector('.app-wrapper input')


addtask.addEventListener('click', () => {
    function addTask() {

        // fetching the value from the user input
        let inputVal = inputTask.value

        // when the user input and submit empty value
        if (inputVal === '') {
            alert('Already completed the tasks? Enjoy your day ')
        } else {
            // creating div with class task-wrapper
            let taskWrapper = document.createElement('Div')
            taskBox.append(taskWrapper)
            taskWrapper.classList.add('task-wrapper')

            // appending the paragrapgh with the task input given by the user
            let taskAdd = document.createElement('p')
            taskAdd.textContent = inputVal
            taskAdd.style.color = '#000000'
            taskWrapper.append(taskAdd)

            // appending the removes task button if user has completed the task
            let removeTask = document.createElement('button')
            removeTask.innerHTML = `&#10006;`
            taskWrapper.append(removeTask)
            removeTask.classList.add('remove-task')

            // functionality of the remove task button
            removeTask.addEventListener('click', () =>{
                taskWrapper.remove()
            })
        }
        inputTask.value = ''
    }
    addTask()
})