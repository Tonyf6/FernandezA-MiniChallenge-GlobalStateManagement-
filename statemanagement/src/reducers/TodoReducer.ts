interface Todo {
    id: number;
    title: string;
}

interface AddTask {
    type: 'ADD';
    todo: Todo;
}

interface DeleteTask {
    type: 'DELETE';
    todoId: number;
}

type TodoAction = AddTask | DeleteTask;

const todoReducer = (todos: Todo[], action: TodoAction): Todo[] => {
    switch(action.type) {
        case 'ADD':
            return [action.todo, ...todos];

        case 'DELETE':
            return todos.filter((t) => t.id !== action.todoId);
    }
}

export default todoReducer;