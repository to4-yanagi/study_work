jest.unmock('./buttons')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils';
import Buttons from './Buttons'

describe('Button', () => {
  const props = {
    sortOfMemberName: jest.fn(),
    clear: jest.fn()
  }

  function setup(className) {
    const instance = TestUtils.renderIntoDocument(
      <Buttons {...props} />
    )
    return TestUtils.findRenderedDOMComponentWithClass(instance, className)
  }

  describe('click', () => {
    it('ソートボタンをクリックすると渡したsortOfMemberNameメソッドが実行されること', () => {
      const buttonNode = setup('sort-button')

      TestUtils.Simulate.click(buttonNode)
      expect(props.sortOfMemberName).toBeCalled()
    })

    it('クリアボタンをクリックすると渡したclearメソッドが実行されること', () => {
      const buttonNode = setup('clear-button')

      TestUtils.Simulate.click(buttonNode)
      expect(props.clear).toBeCalled()
    })
  })
})
