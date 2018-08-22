import React from 'react'
import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <Button text="foo" action={() => null} status="confirm" />
    )

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').children('span')).toHaveLength(1)
  })
})
