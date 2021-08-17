export function getAllTodoIds(todos){
    return todos.map((todo) => todo.id);
}

export function getTodoByIds(todos){
    return todos.find((todo) => todo.id === id);
}
