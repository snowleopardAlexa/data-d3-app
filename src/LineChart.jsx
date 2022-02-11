import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './LineChart.css';

const LineChart = () => {

    const d3Chart = useRef()

    // fetch data through API endpoint
    useEffect(() => {
        fetch('https://data.cityofnewyork.us/resource/tg4x-bg4x-b46p.json')
          .then(response => response.json())
          .then(data => {
              // transfrom data
              console.log(data)
          })
    })

    return (
       <div id="d3">
         <svg ref={d3Chart}></svg>
       </div>
    );
}

export default LineChart;