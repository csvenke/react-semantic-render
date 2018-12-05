import React from 'react'
import renderer from 'react-test-renderer'

import { createTests } from './utils'
import { ShowIfElse as ShowIfElse1 } from '../dist/index.cjs'
import { ShowIfElse as ShowIfElse2 } from '../dist/index.esm'
import ShowIfElse3 from '../dist/ShowIfElse'
import ShowIfElse4 from '../src/ShowIfElse'

const runTests = createTests(ShowIfElse1, ShowIfElse2, ShowIfElse3, ShowIfElse4)

runTests(ShowIfElse => {
  const createComponent = condition => (
    <ShowIfElse
      condition={condition}
      if={() => <div>if</div>}
      else={() => <div>else</div>}
    />
  )

  test('should return content from if', () => {
    const component = renderer.create(createComponent(true))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should return content from else', () => {
    const component = renderer.create(createComponent(false))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
