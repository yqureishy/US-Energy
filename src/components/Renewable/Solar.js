import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import solarEnergy from '../../Images/Solar-panels.jpeg'

const Solar = () => {

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const api_key = 'f1b39be98e68275d7c75074600718864'
    const seriesID = 'TOTAL.SOTCBUS.A'
    const url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=${seriesID}`

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
                        backgroundColor: ['orange'],
                        borderColor: ['orange'],
                    },
                ],
            })

            setChartOptions({
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Solar Energy Consumption/Production',
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

                            title:
                                {
                                display: true,
                                color: 'black',
                                text: 'Year',
                                },
                            ticks: {
                                color: 'black',
                                font: 400
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
                            }
                        }

            
                    }}
            )

            })


            },[])


    return ( 
        <div>
            
    <div className="content-solar">

        <h1 className="graphTitles">Solar Energy</h1>
        <div className="flex-container-chart-solar">
            
            <div className="flex-item-chart">
                
                    <div className="chart-wind" style={{height:"500px", width: "700px"}}>
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
                        <p>Solar Energy Facts</p>
                    </div>
                    <div className="message-body">
                        <ol>
                            <li> Solar energy is the most abundant energy resource on earth - 173,000 terawatts of solar energy strikes the Earth continuously - <u>That's more than 10,000 times the world's total energy use.</u></li>
                            <li> California generates the most solar energy in the United States.</li>
                            <li> California’s Mojave Desert is home to Ivanpah Solar Power Facility, the world’s largest operating solar thermal energy plant spanning around 1000 acres.</li>
                            <li> The United States is the third-largest solar energy market and generator in the world.</li>
                            <li>As of 2019 Solar energy is cheaper than fossil fuels </li>
                        </ol>
                    </div>
                </article>
            </div>
        

            <div className="flex-item-image">
                <img src={solarEnergy} alt=""/>

            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Solar;