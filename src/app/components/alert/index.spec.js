import React from 'react'
import { shallow } from 'enzyme'
import Alert from '.'

describe('Alert', () => {
  it('should be defined', () => {
    expect(Alert).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <Alert description="foo" image="bar" status="success" title="barfoo" />
    )

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('div').children('p')).toHaveLength(2)
    expect(wrapper.find('div').children('img')).toHaveLength(1)
  })
})
