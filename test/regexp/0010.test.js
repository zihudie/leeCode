import isMatch from '../../code/regexp/0010.js'

test('isMatch1', () => {
  expect(isMatch('aab', 'c*a*b')).toBe(true)
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})
