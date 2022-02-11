import { useEffect, useRef } from 'react';
import * as d3 from 'd3'
import './LineChart.css';

const LineChart = () => {

    const d3Chart = useRef()

    // fetch data through API endpoint
    useEffect(() => {
        fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json')
          .then(response => response.json())
          .then(data => {
              // transfrom data
              console.log(data)

              // filter through API endpoints
              const permits = data.filter(e => {
                  return e.eventtype === 'Shooting Permit'
              })

              console.log(permits)

              // get all the dates in an array
              const dates = [...new Set(permits.map(each => each.enteredon.slice(0,10)))]

              let CountsByDate = []

              dates.map(time => {
                  let date = time
                  let count = 0

                  permits.map(each => {
                      let timestamp = each.enterdon.slice(0,10)
                      if (timestamp === date) {count += 1}
                  })

                  const counts = {datae: date, count: count}
                  CountsByDate.push(counts)
              })

              console.log(CountsByDate);
          })
    })

    return (
       <div id="d3">
         <svg ref={d3Chart}></svg>
       </div>
    );
}

export default LineChart;