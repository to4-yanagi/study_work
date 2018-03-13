const initialState = {
  memberList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_MEMBER_LIST':
      return Object.assign({}, state, {
        memberList: action.memberList
      });
    default:
      return state;
  }
}