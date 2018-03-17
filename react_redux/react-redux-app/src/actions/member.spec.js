import { putMemberList } from './member';
 
describe('actions', () => {
  it('PUT_MEMBRER_LISTアクションを生成すること', () => {
    const memberList = [
      {
        id: 1,
        name: 'test1'
      },{
        id: 2,
        name: 'test2'
      }
    ]
    const expectedAction = {
      type: 'PUT_MEMBER_LIST',
      memberList
    }
    expect(putMemberList(memberList)).toEqual(expectedAction)
  })
})