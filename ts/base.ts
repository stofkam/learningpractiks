
type Status = 'todo' | 'done'
type Task = {
    title: string,
    priority: number,
    status: Status,
    notes?: string
}
interface Task2 {
    title: string,
    priority: number,
    status: Status,
    notes?: string
}
type TaskWithDue = Task & {
    due: string
}
const Task: Task[] = [
    {
    title: 'Buy groceries',
    priority: 1,
    status: 'todo',
    notes: 'Buy groceries from the store'
}
]
const newTask = [
    {
    title: 'Buy groceries',
    priority: 1,
    status: 'todo',
    notes: 'Buy groceries from the store'
}
]
const TaskWithDue: TaskWithDue[] = [
    {
        title: 'Buy groceries',
        priority: 1,
        status: 'todo',
        notes: 'Buy groceries from the store',
        due: '2023-01-01'
    }
]

function setStatus(status: Status){
    console.log(`My status is ${status}`)
}

function addTask(title: string,priority: number){
    console.log(`My task is ${title} with priority ${priority}`)
}

function logTask(task: Task):void{
    console.log(`My task is ${task.title} with priority ${task.priority}`)
    if(task.notes){
        console.log(task.notes)
    }
}

function formatId(id:string | number){
    if(typeof id === 'string'){
        return id.toUpperCase()
    }
    return id.toString()
}
   
const text = {
    "title": "Buy groceries",
    "priority": 1,
    "status": "todo",
    "notes": "Buy groceries from the store"
}
const data:unknown= JSON.parse(JSON.stringify(text))
// const task = data as Task
if(typeof data === 'object' && data !==null && 'title' in data) {
    // console.log(data.title)
} else {
    console.log('Invalid data')
}

// Generik



function first<T>(items:T[]):T | undefined{
    return items[0]
}
const firstTask = first(newTask)
const firstNumber = first([1,2,3])
// console.log(firstTask)
// console.log(firstNumber)

type MyTask = {
    id: number,
    title: string,
    priority: number,
    status: Status,
    notes?: string
}
type NewMyTask = Omit<MyTask,'id'>

const draft: NewMyTask = {
    title: 'Buy groceries',
    priority: 1,
    status: 'todo',
    notes: 'Buy groceries from the store'
}

const changes: Partial<MyTask> = {
    priority: 2,
    status: 'done',
  
}

type MyTaskPreview = Pick<MyTask,'id' | 'title' >
const preview: MyTaskPreview = {
    id: 1,
    title: 'Buy groceries'
}

type MyFullTasl = Required<MyTask>
const fullTask: MyFullTasl = {
    id: 1,
    title: 'Buy groceries',
    priority: 1,
    status: 'todo',
    notes: 'Buy groceries from the store'
}
