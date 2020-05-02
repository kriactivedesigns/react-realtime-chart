import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart'
import styles from './styles.module.scss'

function App(){

  const [chartData,setChartData] = useState([])
  const currencyName = "ETH-EUR"

  useEffect(() => {

    const ws = new WebSocket('wss://ws-feed.pro.coinbase.com')

    ws.onopen = function(e){
      ws.send(JSON.stringify(
        {
          "type": "subscribe", 
          "channels": [
            {
              "name":"ticker", 
              "product_ids":[ currencyName ]
            }
          ]
        }))
    }

    ws.onmessage = function(e){
      var data = JSON.parse(e.data)
      if(data.type == 'ticker'){
        var price = parseFloat(data.price).toFixed(3)
        var id = data.product_id
        var d = new Date()
        setChartData( currentData => [...currentData, { name: d.toDateString()+' '+d.toLocaleTimeString(), Price: price, id: id }])
      }
    }

    ws.onerror = function(e){
      console.log(e)
    }

    ws.onclose = function(e){
      console.log(e)
    }
  }, [])

   return (
      <div className="App">
        <header className={styles.app_header}
                style={{
                  alignItems: 'center'
                }}>
          <h1>RealTime Crypto Chart</h1>
        </header>
        <div className={styles.chart_container}>    
          <Chart data={chartData} currency={currencyName}/>
        </div>
      </div>
    );
}

export default App;
