import { useState } from 'react'

const useForm = ({ initialValue = {}, onSubmit }) => {
  const [values, setValues] = useState(initialValue)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    onSubmit(values)
    setValues(initialValue)
  }

  const handleChange = event => {
    const { target } = event

    setValues(values => ({
      ...values,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))
  }

  const reset = fieldName => {
    setValues(values => ({
      ...values,
      [fieldName]: typeof values[fieldName] === 'boolean' ? false : ''
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    reset
  }
}

export default useForm
