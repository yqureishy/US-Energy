import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

const Production_ReservesTotal = () => {

   
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const reserves = [22045,22446,22677,21891,21371,21757,20972,21317,19121,20682,23267,26544,30529,33371,36385,32318,32773,39160,43824,44191]

    const api_key = 'f1b39be98e68275d7c75074600718864'
    const url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=PET.MCRFPUS2.A`

    useEffect(()=>{

        
            fetchCrudeImports()

    

            },[])

            function fetchCrudeImports () {
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
                labels: (Year.reverse().splice(141,163)),
                datasets:[
                    {
                        label:'Production',
                        data: (Barrels.reverse().splice(141,163)),
                        backgroundColor: ['black'],
                        borderColor: ['black']
                    },
                    {
                        label: 'Reserves',
                        data: reserves,
                        backgroundColor: 'gold',
                        borderColor: 'gold'
                    }
                ],
            })
            setChartOptions({
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Crude Production and Reserves',
                        padding: 5,
                        color: 'black',
                        font: {
                            weight: 'bold',
                            size: '20' 
                        }
                    },

                    legend: {
                        display: true
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
                                text: 'Rate (1000 bbl/d)',
                                }

                        }

            
                    }}
            )
            })

           
            }


    return ( 
        <div>
            
    <div className="content-production-reserves">

        <h1 className="graphTitles">Crude Production and Reserves</h1>
        <div className="flex-container-chart">
            
            <div className="flex-item-chart-import-export">
                
                    <div className="chart-import-export" style={{height:"500px", width: "700px"}}>
                        <Line
                            data={chartData}
                            options={chartOptions}/>
                    </div>
            </div>
        </div>
                    
        <div className="flex-container-cards-imports-exports">

            <div className="flex-item-cards">
                <div>
                <article class="message is-dark">
                    <div class="message-header">
                        <p>Production Facts</p>
                    </div>
                    <div className="message-body">
                        <ol>
                            <li>Most of the petroleum imported by the U.S. is crude oil.</li>
                            <li>The United States imported about 7.86 MMb/d of petroleum in 2020, which included 5.88 MMb/d of crude oil and 1.98 MMb/d of noncrude petroleum liquids and refined petroleum products. These were the lowest levels of imports of total petroleum and of crude oil since 1991</li>
                            <li>Since 2015, imports have remained fairly steady at approximately 10 million barrels per day.</li>
                            <li>In 2019, the United States imported about 9.14 million barrels per day (MMb/d) of petroleum from about 90 countries.</li>
                            <li>U.S. is expected to import 62% more crude by 2022 due to domestic production declines</li>
                        </ol>
                    </div>
                </article>
                </div>
            </div>

            <div className="flex-item-cards">

                <article class="message is-warning">
                    <div class="message-header">
                        <p>Reserves Facts</p>
                    </div>
                    <div className="message-body">
                        <ol>
                            <li>In 2020 the United States finally became a net annual petroleum exporter for the first time since 1949.</li>
                            <li>The largest markets for U.S. petroleum exports are Mexico and Canada, but the U.S. exports petroleum to 180 countries.</li>
                            <li>The recent increase in domestic oil production, especially since 2010, has had a significant impact on U.S. petroleum imports and exports. From 2005 to 2015, the United States’ reliance on petroleum imports fell from 60% to 25% of total consumption,while exports increased by over 300%.</li>
                            <li>Since 2015, exports have continued to increase, from 4.7 million barrels per day in 2015 to 7.6 million barrels per day in early-mid-2018</li>
                        </ol>
                    </div>
            
                </article>
                </div>
        </div>
            
            </div>
        </div>
     );
}
 
export default Production_ReservesTotal;