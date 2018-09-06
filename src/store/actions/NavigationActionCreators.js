import {TAB_CHANGED} from './ActionTypes';

// when calling this, pass a argument as the selected tab name
export const onTabChanged = tabName => {
    return {
        type: TAB_CHANGED,
        tabName
    };
};