import React from 'react'
import renderer from 'react-test-renderer'

import { createTests } from './utils'
import { Show as Show1 } from '../dist/index.cjs'
import { Show as Show2 } from '../dist/index.esm'
import Show3 from '../dist/Show'
import Show4 from '../lib/Show'

const runTests = createTests(Show1, Show2, Show3, Show4)

runTests(Show => {
  const input = <div>render me</div>

  describe('with children', () => {
    test('should return primary content from children if when equals true', () => {
      const element = <Show when>{input}</Show>
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })

    test('should return null if when equals false', () => {
      const element = <Show when={false}>{input}</Show>
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('with render', () => {
    test('should return primary content from render if when equals true', () => {
      const element = <Show when render={() => input} />
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })

    test('should return null if when equals false', () => {
      const element = <Show when={false} render={() => input} />
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })

    test('should not evaluate render if when is undefined', () => {
      const obj = undefined
      const element = <Show when={!!obj} render={() => <div>{obj.label}</div>} />
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('with children and render', () => {
    const renderInput = <div>render</div>
    const childrenInput = <div>children</div>

    test('should return primary content from children and ignore render if when equals true', () => {
      const element = (
        <Show when render={() => renderInput}>
          {childrenInput}
        </Show>
      )
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })

    test('should return null if when equals false', () => {
      const element = (
        <Show when={false} render={() => renderInput}>
          {childrenInput}
        </Show>
      )
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  describe('without children and render', () => {
    test('should return null', () => {
      const element = <Show when />
      const component = renderer.create(element)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
