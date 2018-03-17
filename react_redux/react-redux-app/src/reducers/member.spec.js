import member from './member'

const memberList = [
  {
    id: 1,
    name: 'test1'
  },{
    id: 2,
    name: 'test2'
  }
]

describe('members reducer', () => {
  it('何も渡さない場合にinitialStateを返すこと', () => {
    expect(member(undefined, {})).toEqual(
      {
        memberList: []
      }
    )
  }),
  it('PUT_MEMBER_LISTアクションを渡すと、受け取ったmemberListの内容にstateを書き換えること', () => {
    expect(member(undefined, {
      type: 'PUT_MEMBER_LIST',
      memberList
    })).toEqual(
      {
        memberList: [{
          id: 1,
          name: 'test1'
        },{
          id: 2,
          name: 'test2'
        }]
      }
    )
  })
})