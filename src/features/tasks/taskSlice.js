import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "Taks 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "Taks 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(state, action);  action.name o action.payload
      state.push(action.payload); //añadi al estado la info que viene en payload
    },
    deleteTask: (state, action) => {
      //console.log('id a borrar en payload', action);
     const taskFound =   state.find(task => task.id === action.payload)
      if(taskFound){
        state.splice(state.indexOf( (taskFound) ,1))
      }
    }
  },
});

export const { addTask,deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
