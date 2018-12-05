import React from 'react'
import renderer from 'react-test-renderer'

import { createTests } from './utils'
import { Hideable as Hideable1 } from '../dist/index.cjs'
import { Hideable as Hideable2 } from '../dist/index.esm'
import Hideable3 from '../dist/Hideable'
import Hideable4 from '../src/Hideable'

const runTests = createTests(Hideable1, Hideable2, Hideable3, Hideable4)

runTests(Hideable => {
  const Button = () => <button>Click me</button>
  const HideableButton = Hideable(Button)

  test('should show component', () => {
    const component = renderer.create(
      <HideableButton hide={false} label='Click me!' />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should return null', () => {
    const component = renderer.create(
      <HideableButton hide label='Click me!' />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
