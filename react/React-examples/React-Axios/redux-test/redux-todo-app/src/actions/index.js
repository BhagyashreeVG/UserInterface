export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const PENDING_TODO = 'PENDING_TODO';

export const addToDoActionCreator = (name, desc, status) => {

    return {
        type: ADD_TODO,
        name,
        desc,
        status,
        id: Math.random()
    }
}

export const deleteToDoActionCreator = (id,name, desc, status) => {
    return {
        type: DELETE_TODO,
        id,
        name,
        desc,
        status,
    }
}

export const completeToDoActionCreator = (id,name, desc, status) => {
    return {
        type: COMPLETE_TODO,
        id,
        name,
        desc,
        status,
    }
}

export const pendingToDoActionCreator = (id,name, desc, status) => {
    return {
        type: PENDING_TODO,
        id,
        name,
        desc,
        status,
    }
}
