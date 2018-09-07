import { ADD_EVENT } from './ActionTypes';

// when calling this, pass a argument as the selected tab name
//event is the event object ( see the MockDatabaseReducer.js fro the structure)
// keyDate is the date object of ahhhhh, no time to document this !!!!
export const onAddEvent = (event, keyDate) => {
  return {
    type: ADD_EVENT,
    event,
    keyDate
  };
};
