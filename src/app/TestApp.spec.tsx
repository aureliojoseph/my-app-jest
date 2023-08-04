import { render } from '@testing-library/react'
import TestApp from './TestApp'

test('sum', () => {
  const { getByText } = render(<TestApp />)

  expect(getByText('Hello Jest')).toBeTruthy()
})