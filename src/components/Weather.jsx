import { useEffect, useState } from 'react'
import { WeatherForm } from './WeatherForm'
import { WeatherInfo } from './WeatherInfo'
import { Loader } from './Loader'
import styles from './Weather.module.css'

export const Weather = () => {
  // json with info api
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  const loadInfo = async (city = 'panama') => {
    if (city === '') {
      city = 'panama'
    }

    try {
      const request = await fetch(
        `${import.meta.env.VITE_API_URL}&Key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}`
      )

      const json = await request.json()

      setWeather(json)
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeCity = (city) => {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div className={styles.weatherContainer}>
      <h2>Weather App - Panamá by Default</h2>
      <WeatherForm onChangeCity={onChangeCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Loader />}
    </div>
  )
}
