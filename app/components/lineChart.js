import React from 'react';
import ApexCharts from 'apexcharts'
import Link from "next/link"
import { useState, useEffect } from 'react'
import {
    Tooltip,
    Button,
    Tabs,
    Tab,
} from "@nextui-org/react";

// icon start
import {
    IoImageOutline,
    IoDocumentTextOutline,
} from "react-icons/io5";
import {
    MdOutlineShowChart,
    MdCandlestickChart,
    MdOutlineFileDownload
} from "react-icons/md";
// icon end

export default function Charts() {
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

    var options = {
        series: [{
            name: 'Prices',
            data: !data ? []
                : data.prices
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: 'Bitcoin to USD Chart',
            align: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
            title: {
                text: 'Price'
            },
        },
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                }
            }
        }
    };

    if (document.querySelector("#chart")) {
        console.log(361, document.querySelector("#chart").innerHTML)

        if (document.querySelector("#chart").innerHTML == '') {
            var chart = new ApexCharts(document.querySelector("#chart"), options);

            chart.render();
        }
    }

    const marketchart = async function (button) {
        console.log(button.target.title);

        let day = '1'

        if (button) {
            const title = button.target.title
            if (title == '1D') {
                day = '1'
            }
            if (title == '7D') {
                day = '7'
            }
            if (title == '1M') {
                day = '30'
            }
            if (title == '1Y') {
                day = '365'
            }
            if (title == 'All') {
                day = 'max'
            }
        }

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=' + vs_currencies + '&days=' + day + '&precision=1')
            .then((res) => res.json())
            .then((jsondata) => {
                setData(jsondata)
                console.log(typeof jsondata)
                console.log(jsondata.prices.length)
            })
    }

    return (
        <div>
            <div className="flex flex-wrap justify-between items-center gap-[8px] mb-[24px]">
                <div className="flex items-center gap-[0px]">
                    <Tabs aria-label="Options" size="sm">
                        <Tab key="Price" title="Price" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                        <Tab key="Marketcap" title="Market cap" className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                    </Tabs>

                    <Tabs aria-label="Options" size="sm">
                        <Tab key="OutlineShowChart" title={<MdOutlineShowChart className="text-[16px]" />} className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                        <Tab key="CandlestickChart" title={<MdCandlestickChart className="text-[16px]" />} className="whitespace-nowrap px-[5px] py-[0px]"> </Tab>
                    </Tabs>
                </div>

                <div className="flex items-center bg-[#f5f5f6] pr-[4px] rounded-[12px]">
                    <Tabs aria-label="Options" size="sm" className="mr-[-14px]">
                        <Tab key="1D" title="1D" className="whitespace-nowrap px-[5px] py-[0px]" onClick={marketchart}> </Tab>
                        <Tab key="7D" title="7D" className="whitespace-nowrap px-[5px] py-[0px]" onClick={marketchart}> </Tab>
                        <Tab key="1M" title="1M" className="whitespace-nowrap px-[5px] py-[0px]" onClick={marketchart}> </Tab>
                        <Tab key="1Y" title="1Y" className="whitespace-nowrap px-[5px] py-[0px]" onClick={marketchart}> </Tab>
                        <Tab key="All" title="All" className="whitespace-nowrap px-[5px] py-[0px]" onClick={marketchart}> </Tab>
                    </Tabs>

                    <div className="w-[1px] h-[16px] bg-[#CFD6E4] mx-[3px]"></div>

                    <div className="px-[8px] py-[6px] text-[12px] rounded-[8px] hover:bg-[#fff] cursor-pointer transition-all duration-[.3s]">
                        LOG
                    </div>

                    <div className="w-[1px] h-[16px] bg-[#CFD6E4] mx-[3px]"></div>

                    <Tooltip
                        showArrow
                        placement="bottom"
                        classNames={{
                            base: [
                                // arrow color
                                "before:bg-white rounded-[8px] border-transparent before:shadow-none shadow-xl",
                            ],
                            content: [
                                "p-[16px] rounded-[8px] shadow-none",
                                "bg-white",
                            ],
                        }}
                        content={
                            <div className="">
                                <ul>
                                    <li>
                                        <Link href="" className="text-[14px] flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                            <IoImageOutline />

                                            <div className="ms-[5px]">
                                                Download Chart (.jpg)
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-[14px] flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                            <IoImageOutline />

                                            <div className="ms-[5px]">
                                                Download Chart (.png)
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="text-[14px] flex items-center p-[8px] rounded-[8px] hover:bg-[#EFF2F5] transition-all duration-[.3s]">
                                            <IoDocumentTextOutline />

                                            <div className="ms-[5px]">
                                                Download Price History (.csv)
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    >

                        <div className="px-[8px] py-[6px] rounded-[8px] hover:bg-[#fff] cursor-pointer transition-all duration-[.3s]">
                            <MdOutlineFileDownload className="text-[16px]" />
                        </div>
                    </Tooltip>
                </div>
            </div>

            <div id="chart"></div>
        </div>
    );
}