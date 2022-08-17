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
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
