import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import hydroelectricEnergy from '../../Images/hydroelectric.gif'

const Hydroelectric = () => {

    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const api_key = 'f1b39be98e68275d7c75074600718864'
    const seriesID = 'TOTAL.HVTCBUS.A'
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
                        backgroundColor: ['darkblue'],
                        borderColor: ['darkblue']
                    },
                ],
            })

            setChartOptions({
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Hydroelectric Energy Consumption/Production',
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
                                }
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
                        }

            
                    }}
            )

            })


            },[])


    return ( 
         <div>
            
    <div className="content-hydroelectric">

        <h1 className="graphTitles">Hydroelectric Energy</h1>
        <div className="flex-container-chart">
            
            <div className="flex-item-chart">
                
                    <div className="chart-wind" style={{height:"500px", width: "700px"}}>
                        <Line
                            data={chartData}
                            options={chartOptions}/>
                    </div>
            </div>
        </div>
                    
        <div className="flex-container-cards">
            <div className="flex-item-cards-hydroelectric">
                <article class="message is-dark">
                    <div class="message-header">
                        <p>Hydroelectric Energy Facts</p>
                    </div>
                    <div className="message-body">
                        <ol>
                            <li> At hydropower plants water flows through a pipe, or penstock, then pushes against and turns blades in a turbine to spin a generator to produce electricity.</li>
                            <br/>
                            <li> Hydroelectricity provides about seven percent of the electricity generated in the United States and about half of the electricity from all renewable sources</li>
                            <br/>
                            <li> Hydropower costs less than most energy sources. States that get the majority of their electricity from hydropower, like Idaho, Washington, and Oregon, have energy bills that are lower than the rest of the country.</li>
                            <br/>
                            <li> Hydropower is one of the oldest power sources on the planet, generating power when flowing water spins a wheel or turbine. It was used by farmers as far back as ancient Greece for mechanical tasks like grinding grain.</li>
                        </ol>
                    </div>
                </article>
            </div>
        

            <div className="flex-item-image-hydroelectric">
                <img src={hydroelectricEnergy} alt=""/>

            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Hydroelectric;