import React from 'react'
import TestUtils from 'react-dom/test-utils';
import Buttons from './buttons'

describe('Button', () => {
  const props = {
    memberList: [{
      id: 1,
      memberName: 'zzz'
    }, {
      id: 2,
      memberName: 'aaa'
    }],
    putMemberList: jest.fn()
  }

  function setup(className) {
    const instance = TestUtils.renderIntoDocument(
      <Buttons {...props} />
    )
    if(!className) {
      return instance
    }
    return TestUtils.findRenderedDOMComponentWithClass(instance, className)
  }

  describe('sort', () => {
    it('sortOfMemberNameが呼び出されるとmemberListを名前の昇順に書き換えること', () => {
      const buttons = setup()

      expect(buttons.sortOfMemberName()).toEqual([
        {
          id: 2,
          memberName: 'aaa'
        },
        {
          id: 1,
          memberName: 'zzz'
        }
      ])
    })
  })

  describe('click', () => {
    it('ソートボタンをクリックするとputMemberListが実行されること', () => {
      const buttonNode = setup('sort-button')

      TestUtils.Simulate.click(buttonNode)
      expect(props.putMemberList).toBeCalled()
    })

    it('クリアボタンをクリックするとputMemberListが実行されること', () => {
      const buttonNode = setup('clear-button')

      TestUtils.Simulate.click(buttonNode)
      expect(props.putMemberList).toBeCalled()
    })
  })
})
