import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { Legend } from 'chart.js'
import windEnergy from '../../Images/wind-energy.gif'

const Wind = () => {

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const api_key = 'f1b39be98e68275d7c75074600718864'
    const seriesID = 'TOTAL.WYTCBUS.A'
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
                        backgroundColor: ['darkgreen'],
                        borderColor: ['darkgreen'],
                    },
                ],
            })

            setChartOptions({
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Wind Energy Consumption/Production',
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
                                }
                            },
                        y: {
                            title:
                                {
                                display: true,
                                color: 'black',
                                text: 'Energy (Trillion BTU)',
                                }

                        }

            
                    }}
            )

            })


            },[])


    return ( 
        <div>
            
    <div className="content-wind">

        <h1 className="graphTitles">Wind Energy</h1>
        <div className="flex-container-chart-wind">
            
            <div className="flex-item-chart">
                
                    <div className="chart-wind" style={{height:"500px", width: "700px"}}>
                        <Line
                            data={chartData}
                            options={chartOptions}/>
                    </div>
            </div>
        </div>
                    
        <div className="flex-container-cards">
            <div className="flex-item-cards-wind">
                <article class="message is-dark">
                    <div class="message-header">
                        <p>Wind Energy Facts</p>
                    </div>
                    <div className="message-body">
                        <ol>
                            <li>The United States’ wind power capacity was 105.591 megawatts at the end of 2019, making it the largest renewable energy source in the United States. That’s enough electricity to offset the consumption of 29.5 million average American homes.</li>
                            <li>Wind energy provides more than 10% of total electricity generation in 14 states, and more than 30% in Kansas, Iowa, and Oklahoma.</li>
                            <li>Wind turbine blades average over 190 feet long, and turbine towers average 295 feet tall—about the height of the Statue of Liberty.</li>
                            <li>Human civilizations have harnessed wind power for thousands of years. Early forms of windmills used wind to crush grain or pump water. Now, modern wind turbines use the wind to create electricity.</li>
                        </ol>
                    </div>
                </article>
            </div>
        

            <div className="flex-item-image-wind">
                <img src={windEnergy} alt=""/>

            </div>
            </div>
            </div>
        </div>
        
     );
}
 
export default Wind;