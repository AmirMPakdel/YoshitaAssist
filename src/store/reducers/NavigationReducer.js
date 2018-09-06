import { onTabChanged } from '../actions';
import { TAB_CHANGED } from '../actions/ActionTypes';

const initialState = { selectedTab: 'Home' };

export default (NavigationReducer = (oldState = initialState, action) => {
  //this is for changing in state immutably
  const clonedState = Object.assign({}, oldState);

  // handling the dispatched actions
  switch (action.type) {
    case TAB_CHANGED:
      clonedState.selectedTab = action.tabName;
      break;
    default:
      break;
  }

  return clonedState;
});
