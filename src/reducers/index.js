import { reducer as userReducer, initialState as userIS } from './user';
import { reducer as subsReducer, initialState as subsIS } from './subs';
import { reducer as myPostsReducer, initialState as myPostsIS } from './myPosts';
import { reducer as myDiscussionsReducer, initialState as myDiscussionsIS } from './myDiscussions';
import { reducer as allUsersReducer, initialState as allUsersIS } from './allUsers';
import { reducer as allPostsReducer, initialState as allPostsIS } from './allPosts';
import { reducer as allCommentsReducer, initialState as allCommentsIS } from './allComments';

// import json from './state.json';
// export const initialState = json;

export const initialState = {
  ...allUsersIS,
  ...allPostsIS,
  ...allCommentsIS,
  ...userIS,
  ...subsIS,
  ...myPostsIS,
  ...myDiscussionsIS
};

export function reducer(state, action) {
  if (!action.type) {
    throw new Error(`Action has no type (${action})`);
  }

  // console.info('action', action);

  const reducers = [
    userReducer,
    subsReducer,
    myPostsReducer,
    myDiscussionsReducer,
    allUsersReducer,
    allPostsReducer,
    allCommentsReducer
  ];

  for (let r = 0; r < reducers.length; r++) {
    const result = reducers[r](state, action);
    if (result) {
      return result;
    }
  }

  throw new Error(`Unknown action ${action.type}`);
}
