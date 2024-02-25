import styles from './WeatherInfo.module.css'

export const WeatherInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}º</div>
        </div>
      </div>
      <iframe
        title='map'
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d544335.121317721!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spa!4v1708704695685!5m2!1ses-419!2spa`}
        width='100%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

/*

weather?.location.name
weather?.location.country
weather?.current.condition.icon


*/
