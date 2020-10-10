export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
  isCalculated: false,
}

export const handleNumber = (state, value) => {
  // Remove the preceding zero
  if (state.currentValue === '0' || state.isCalculated) {
    return {
      currentValue: `${value}`,
      isCalculated: false,
    }
  }
  // Ignore multiple occurances of dot(.)
  if (value === '.' && state.currentValue.includes('.')) {
    return state
  }
  return {
    currentValue: `${state.currentValue}${value}`,
    isCalculated: false,
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
      isCalculated: true,
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
    const divResult =
      previousValueFloat === 0
        ? 0
        : (previousValueFloat / currentValueFloat).toFixed(10)
    return {
      currentValue: divResult,
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
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.1}`,
      }
    default:
      return state
  }
}
