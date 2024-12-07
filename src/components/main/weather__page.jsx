/* eslint-disable no-unused-vars */
import wp from '../main/weather__page.module.css'
import {useState} from 'react'
import { useEffect } from 'react'
import {apiUrl} from '../../api/api.js'
import { instance } from '../../api/instance'
import Vector from '../../assets/Vector (4).svg'
import Vector2 from '../../assets/Vector (5).svg'
import weatherLogo from '../../assets/icon3.svg'
import exploreLogo from '../../assets/icon2.svg'
import citilesLogo from '../../assets/Vector.svg'
import settingsLogo from '../../assets/icon4.svg'
import Hearts from '../../assets/icon5.svg'
import Feel from '../../assets/Vector (6).svg'
import Windy from '../../assets/Windy.svg'
import Layer from '../../assets/Layer 2.svg'
import Sun from '../../assets/icon.svg'
import CloudyStorm from '../../assets/icon (2).svg'
import CloudySun from '../../assets/icon (3).svg'
import CloudyRain from '../../assets/icon (4).svg'
import { Carousel } from 'antd'
const WeatherPage = () => {
  const contentStyle = {
      
    };
  const [data, setData] = useState('');
  const [city, setCity] = useState('Kara-Balta')
  useEffect(() => {
    const getData = async() => {
      const data = await instance.get(`weather?q=${city}&units=matric&appid=${apiUrl}`)
      setData(data.data)
      console.log(data);
      
      
      
    }
    getData()
  }, [city])
  function Clouds() {
    if (data.weather[0].main == 'Clear') {
        return CloudySun
    }
    else if (data.weather[0].main == 'Rain') {
        return CloudyRain
    }
    else if (data.weather[0].main == 'Snow') {
      return CloudyRain
  }
    else if (data.weather[0].main == 'Clouds') {
        return CloudySun
    }
    else if (data.weather[0].main == 'Storm') {
        return CloudyStorm
    }
    else if (data.weather[0].main == 'Fog') {
        return 
    }
    else if (data.weather[0].main == 'Smoke') {
        return Windy
    }
    else if (data.weather[0].main == 'Mist') {
      return Windy
  }
  else if (data.weather[0].main == 'Haze') {
    return Windy
}
}
const getBackgroundStyle = () => {
if (data.weather[0].main == 'Clear') {
  return {backgroundColor: '#D69E36'}
} else if(data.weather[0].main == 'Storm'){
    return {backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4ef1/723d/35c75f14d2fba59fbc74da34b967046f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYMuQHqyQbEU9bl2O821fHD55aAH5obZhJBdTFYW~Wy6oDBKgQPNoog22XNE0VX3IAJZXMXbrfleRm4RDUfpJ3ZhDYIB4cf1TA~djDyCFvfFZx5A2mwNIoIGlR8syU~uOq9fdxcxTj6qtjgMAc0Vv6gGjMnF9rLVdBCbstuQofmX6FOvGipuYwG2WMOnBBs7bvgYaQaEA4NMSIo8GC3YFSa0-eXXBBdmsPkOGsJcyK7ScQIzjDqzhLWogtC3iiYgC1mLvNAFrpvCBu6hsw99PMSBMzDKxa~qwPVqahNbl6-LQ~iq0SSJbCRWuSjVvmqxQi3JP38LntME75RzEGbAWQ__');`}
}
}
  return (
    <>
    {data && (

    
      <><div className={wp.weather__block} >
          <img src={Vector} alt="" className={wp.vector} />
          <h2 className={wp.city}>{city}</h2>
          <img src={Vector2} alt="" className={wp.vector2} />
        </div><div className={wp.sub__elements}>
            {data.weather?.map((item, index) => (
              <div key={index}>

                <h1>{item.main}</h1>
              </div>
            ))}
            <div className={wp.Cloudy}>
              <img src={Clouds()} alt="" />
            </div>
            <h2>{data.main?.temp}</h2>
            <p>Sunday | 12 Dec 2023</p>
          </div><div className={wp.main__block}>
            <div className={wp.block1}>
              <img className={wp.userLogo} src="https://s3-alpha-sig.figma.com/img/4c45/ead5/ae9dc30e921f4d8aa22b28ef5eafc40f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O7jF59VL3a-ZldwWr8Sya88niPh80Eeu-1kX9BhnIF2bKHu~QkN-TNGFCDCfoykskUv-8pctpAzIQnnztUsvC5htrn2VgrDbpwsCNAMPeU2wQTZsubQxocevCtWNUwCPoZ4lheVYFS3lHAu6HMundWxhYJUHIjXI7yUfSGVm8wpBJjXbdd4~TsagRrx7zhF1RFR7fwjSFo0svKPWII14sIJdTvg50iAgkZQiLePg6DB0S~67QNvBGecIZG2fjFDyqdywBEq6ry2SiSxWhn0Gc3z-WmmZhkXae-RX4XxRcYVUJ4SXcS5cFmfPVmVX~4e6yidMKDyUuYyeahwe1nNjvQ__" alt="" />
              <img src={weatherLogo} />
              <p>weather</p>
              <img src={exploreLogo} alt="" />
              <p>explore</p>
              <img src={citilesLogo} alt="" />
              <p>cities</p>
              <img src={settingsLogo} alt="" />
              <p>settings</p>
            </div>
            <div className={wp.block2}>
              <div className={wp.logoandtit}>
                <img src={Hearts} alt="" />
                <h1>Activities in your area</h1>
              </div>
              <div className={wp.b2__img}>
                <div onClick={() => setCity('Bishkek')}>
                  <img className={wp.CityPhoto} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/500238804.jpg?k=221d3bc1c40c118e9bf8fe106c95537b2f79c4ed0a3405fe6741ed8bf0ea8e62&o=&hp=1" alt="" />
                  <p>Bishkek</p>
                </div>
                <div onClick={() => setCity('Jalal-Abad')}>
                  <img src="https://icr.su/upload/medialibrary/69b/Pact_Roerich_DgelalAbad_1.jpg" alt="" className={wp.CityPhoto} />
                  <p>Jalal-Abad</p>
                </div>
                <div onClick={() => setCity('Osh')}>
                  <img src="https://pic.rutubelist.ru/video/64/1d/641d0ea871a7553dc150b9294732b88c.jpg" alt="" className={wp.CityPhoto} />
                  <p>Osh</p>
                </div>
                <div onClick={() => setCity('Kara-Balta')}>
                  <img src="https://st-1.akipress.org/st_gallery/56/1060156.d7652f1b8120bee45f455e03add98b87.jpg" alt="" className={wp.CityPhoto} />
                  <p>Kara-Balta</p>

                </div>
              </div>
            </div>
            <div className={wp.block3}>
              <div className={wp.sub__block}>
                <p>{city}</p>
                <input type="text" onChange={(e) => setCity(e.target.value)} value={city} />
              </div>
              <div className={wp.subblock3}>

                <h2>AIR CONDITIONS</h2>
                <div className={wp.wpblock3}>
                  <img src={Feel} alt="" />

                  <div className={wp.subb_elem}>
                    <p>Real Feel</p>

                    <p className={wp.subb_title}>{data.main?.feels_like}°</p>
                  </div>
                </div>
                <div className={wp.wpblock3}>
                  <img src={Windy} alt="" />
                  <div className={wp.subb_elem}>

                    <p>Wind</p>
                    <p className={wp.subb_title}>{data.wind?.speed} km/hr</p>
                  </div>
                </div>
                <div className={wp.wpblock3}>
                  <img src={Layer} alt="" />
                  <div className={wp.subb_elem}>

                    <p>Chance of rain</p>
                    <p>{data.main?.humidity}%</p>
                    <p className={wp.subb_title}></p>
                  </div>
                </div>
                <div className={wp.wpblock3}>
                  <img src={Sun} alt="" />
                  <p>UV Index</p>
                </div>
              </div>

            </div>
          </div></>
      )}
    </>
      
  )
}

export default WeatherPage
{/* <div>
  <input type="text" onChange={(e) => setCity(e.target.value)} value={city}/>
  <h1>{city}</h1>
</div> */}