import React from 'react'
import styles from './styles.module.scss'
import { 
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

const CustomToolTip = ({active,payload,label}) => {
    if(active){
        return(
            <div className={styles.custoom_tooltip}>
                <div className={styles.tooltip_label}>{label}</div>
                <p className={styles.tooltip_id}>{payload[0].payload.id}</p>
                <p className={styles.tooltip_value}>{payload[0].payload.Price}</p>
            </div>
        )
    }
    return null
}

const style = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

function Chart(props){
    const lastItem = props.data[props.data.length -1]
    if(lastItem){
        return (
            <div className={styles.main_chart_container} style={style}>
                <div className={styles.chart_header}>
                    <div className={styles.left_container}>
                        <p className={styles.currency_name}>{props.currency}</p>  
                        <p className={styles.currency_value}>{lastItem.Price}</p>  
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="90%">
                    <AreaChart 
                        data={props.data}
                        margin={
                            {
                                top: 10,
                                right: 20,
                                left: 20,
                                bottom: 30
                            }
                        }>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="2 2"/>
                        <XAxis dataKey="name"/>
                        <YAxis type="number" 
                            domain={['dataMin - 0.1', 'dataMax + 0.1']}
                            orientation="right"/>
                        <Tooltip content={<CustomToolTip/>}/>
                        <Area type="monotone" 
                            dataKey="Price"
                            stroke="#8884d8" 
                            fill="url(#colorUv)"
                            fillOpacity={1}
                            legendType="circle"
                            dot={true}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }
    else{
        return(
            <h1 style={{textAlign: "center"}}>Loading ...</h1>
        )
    }
}

export default Chart