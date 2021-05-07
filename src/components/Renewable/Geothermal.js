import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { Legend } from 'chart.js'
import geothermalEnergy from '../../Images/geothermal.gif'

const Geothermal = () => {

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const api_key = 'f1b39be98e68275d7c75074600718864'
    const url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=TOTAL.COEXPUS.A`

    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            let allData = data.series[0].data
            const Year = allData.map((singleYearData)=>{
                return (
                    parseInt(singleYearData[0])
                )
            })
            const Barrels = allData.map((singleYearExport)=>{
                return (
                    singleYearExport[1]
                )
            })

            setChartData({
                labels: (Year.reverse().splice(51,73)),
                datasets:[
                    {
                        // label:'US Crude Exports(1000 bbl/d)',
                        data: (Barrels.reverse().splice(51,73)),
                        backgroundColor: ['maroon'],
                        borderColor: 'maroon',
                    },
                ],
            })

            setChartOptions({
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Geothermal Energy Consumption/Production',
                        padding: 20,
                        color: 'black',
                        font: {
                            weight: 'bold',
                            size: '20' 
                        }
                    },

                    legend: {
                        display: false
                    }
                },
                scales: {
                        x: {
                            ticks: {
                                color: 'black'
                            },

                            title:
                                {
                                display: true,
                                color: 'black',
                                text: 'Year',
                                },
                        },
                        y: {
                            title:
                                {
                                display: true,
                                color: 'black',
                                text: 'Energy (Trillion BTU)',
                                },
                            ticks: {
                                color: 'black'
                            },
                        },

            
                    }}
            )

            })


            },[])


    return ( 
        <div>
            
    <div className="content-geothermal">

        <h1 className="graphTitles">Geothermal Energy</h1>
        <div className="flex-container-chart">
            
            <div className="flex-item-chart">
                
                    <div className="chart-wind" style={{height:"500px", width: "700px",}}>
                        <Line
                            data={chartData}
                            options={chartOptions}/>
                    </div>
            </div>
        </div>
                    
        <div className="flex-container-cards">
            <div className="flex-item-cards">
                <article class="message is-dark">
                    <div class="message-header">
                        <p>Geothermal Energy Facts</p>
                    </div>
                    <div className="message-body">
                        <ol>
                            <li>Geothermal energy is derived from the natural heat of the earth. It exists in both high enthalpy (volcanoes, geysers) and low enthalpy forms (heat stored in rocks in the Earth’s crust).</li>
                            <li>The U.S. has tapped less than 0.7% of geothermal electricity resources; the majority can become available with Enhanced Geothermal System technology.</li>
                            <li>In 2016, there were 3,812 MW of geothermal electricity plants in operation in the United States—the most of any country—and development has been growing at a rate of 2% per year.</li>
                            <li>Electricity generated from geothermal plants is projected to increase from 16 billion kWh in 2019 to 52.2 billion kWh in 2050. In 2016, California, Nevada, Utah, and Hawaii were the states with the most installed geothermal energy capacity.</li>
                            <li>In 2016, there were 3,812 MW of geothermal electricity plants in operation in the United States—the most of any country—and development has been growing at a rate of 2% per year.</li>
                        </ol>
                    </div>
                </article>
            </div>
        

            <div className="flex-item-image">
                <img src={geothermalEnergy} alt=""/>

            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Geothermal;