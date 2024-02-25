import { useState } from 'react'
import styles from './WeatherForm.module.css'

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState('')

  const handleChange = (e) => {
    setCity(e.target.value)
    // const value = e.target.value

    // if (value !== '') {
    //   setCity(value)
    //   console.log(city)
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onChangeCity(city)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          type='text'
          className={styles.input}
          placeholder='example. Panamá, La chorrera'
          value={city}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
