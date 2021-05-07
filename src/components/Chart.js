import { Line } from 'react-chartjs-2';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = (props) => {
    return ( 
        <div className="chart">
            <Line
                data={data}
                options={{ maintainAspectRatio: false }}
            />
        </div>
     );
}
 
export default Chart;