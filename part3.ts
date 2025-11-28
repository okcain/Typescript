// The Blueprint (Interface)
interface TodoItem {
    id: number;
    task: string;
    isCompleted: boolean;
}

// The Database (Array of Objects)
let todoList: TodoItem[] = [];

// Function to add a new todo item
function addTodo(taskName: string): void {
    const newId: number = todoList.length + 1;

    const newItem: TodoItem = {
        id: newId,
        task: taskName,
        isCompleted: false,
    };

    todoList.push(newItem); // Adding the new item to the list
    console.log(`[+] Added Task: "${taskName}"`);
}

// Function to mark a todo item as completed
function completeTodo(id: number): void {
    const item = todoList.find(t => t.id === id);

    if (item) {
        item.isCompleted = true;
        console.log(`[✓] Completed Task: ${item.task}`);
    } else {
        console.log(`[!] Error: Task with ID ${id} not found.`);
    }
}

// Function to display all todo items
function listTodos(): void {
    console.log("\n---- Todo List ----");

    if (todoList.length === 0) {
        console.log("No tasks yet. Good Job!");
        return;
    }

    todoList.forEach(todo => {
        const status = todo.isCompleted ? "[✓]" : "[✗]";
        console.log(`${status} (${todo.id}) ${todo.task}`);
    });
    console.log("-------------------\n");
}

// Example Usage

console.log("Welcome to the Todo List Application!\n");
addTodo("Learn TypeScript");
addTodo("Build a Todo App");
addTodo("Push to GitHub");

listTodos(); // Display all tasks

completeTodo(1); // Mark task with ID 1 as completed
completeTodo(2); // Mark task with ID 2 as completed

listTodos(); // Display all tasks again to see the update