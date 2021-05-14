import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Currency from './currency/Currency'
import Zabo from 'zabo-sdk-js'

function App() {
  const [currencies, setCurrencies] = useState([])
  const [isPending, setIsPending] = useState(true)
  const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    setTimeout(() => {
      axios.get(apiURL)
      .then(res => {
        setCurrencies(res.data)
        setIsPending(false)
        // console.log(res.data)
      })
      .catch(error => console.log(error))
    }, 1000)
  }, []);


  // Zabo.init({
  //   apiKey: 'FromYourZaboDashboard',
  //   secretKey: 'NeverCommitYourKeys',
  //   env: 'sandbox'
  // }).then(zabo => {
  //   console.log(zabo.data)
  // }).catch(err => {
  //   console.error(err)
  // })

  // useEffect(() => {
  //   setTimeout(() => {
  //     Zabo.init({
  //       clientId: 'RJwggRZbKLwkOzKRmhGqBdHaOp7I0WDIzNDOS7JeUWbJLxWlmddyhRszcI7NO1SX',
  //       apiKey: '0f7bce3f11dcf03b927fffa3d563a9154d8c14e7',
  //       secretKey: '1b97e8bac1306c747012a3915052195fc5e8cb1d7295840f8d78546a4ccbd12b',
  //       env: 'sandbox'
  //     })
  //     .then(zabo => {
  //       console.log(zabo.data)
  //     })
  //     .catch(error => console.log(error))
  //   }, 1000)
  // }, []);

 
  return (
    <div className='currency-main-container'>
      <div className='header-container'>
        <h1 className='main-header'>Crypto Currency Listing App</h1>
      </div>
      {/* { isPending && <div>Its Loading...</div> } */}
      {/* <div className='currencies-list-container'>  */}
        {currencies.map(currency => {
          return (
            <Currency
              key={currency.id} 
              name={currency.name}
              type={currency.symbol}
              image={currency.image}
              exchangeRate={currency.current_price}
            />
          )
        })}
      {/* </div> */} 
    </div>
  );
}

export default App;


