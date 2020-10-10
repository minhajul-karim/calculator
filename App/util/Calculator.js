export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
}

export const handleNumber = (state, value) => {
  // Remove the preceding zero
  if (state.currentValue === '0') {
    return {
      currentValue: `${value}`,
    }
  }
  // Ignore multiple occurances of dot(.)
  if (value === '.' && state.currentValue.includes('.')) {
    return state
  }
  return {
    currentValue: `${state.currentValue}${value}`,
  }
}

export const equalHandler = (state) => {
  const { currentValue, previousValue, operator } = state
  const currentValueFloat = parseFloat(currentValue)
  const previousValueFloat = parseFloat(previousValue)
  const resetState = {
    previousValue: null,
    operator: null,
  }
  if (operator === '+') {
    return {
      currentValue: previousValueFloat + currentValueFloat,
      ...resetState,
    }
  }
  if (operator === '-') {
    return {
      currentValue: previousValueFloat - currentValueFloat,
      ...resetState,
    }
  }
  if (operator === '*') {
    return {
      currentValue: previousValueFloat * currentValueFloat,
      ...resetState,
    }
  }
  if (operator === '/') {
    return {
      currentValue: (previousValueFloat / currentValueFloat).toFixed(10),
      ...resetState,
    }
  }
  return state
}

export default function Calculator(type, value, state) {
  switch (type) {
    case 'number':
      return handleNumber(state, value)
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      }
    case 'equal':
      return equalHandler(state)
    case 'clear':
      return initialState
    case 'posNeg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      }
    default:
      return state
  }
}
