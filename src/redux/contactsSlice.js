import { createSlice, nanoid } from "@reduxjs/toolkit";
import { number } from "yup";
// import { deleteTask, toggleCompleted } from "./actions";

const contactsInitialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
};

const contactsSlice = createSlice({
  name: "contacts/items",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    // toggleCompleted(state, action) {
    //   for (const task of state) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //       break;
    //     }
    //   }
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
