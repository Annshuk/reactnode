import constant from '../actions/action-types';

var initialState = {
  news: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constant.NEWS_RECEIVED:
      updated['news'] = action.news;
      return updated;

    default:
      return state;
    }
}