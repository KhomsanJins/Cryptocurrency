"use client"
import { useRef, useEffect, useState } from "react"
import { Chart } from "chart.js/auto"
import styles from "../styles/Chart.module.css"

export default function LineChart() {
    // 
    const ids = "bitcoin"
    const vs_currencies = "usd"

    const [data, setData] = useState(null)

    useEffect(() => {
        console.log(123)

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=' + vs_currencies + '&days=1&precision=1')
            .then((res) => res.json())
            .then((jsondata) => {
                setData(jsondata)
                console.log(typeof jsondata)
                console.log(jsondata.prices.length)
            })
    }, [])
    console.log(1, data)
    // 

    const chartRef = useRef(null)

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "line",
                data: !data ? []
                : data.prices,
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: "linear"
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            chartRef.current.chart = newChart
        }
    }, [])

    return (
        <div className={styles.wrap_chart}>
            <canvas ref={chartRef} />
        </div>
    );
}