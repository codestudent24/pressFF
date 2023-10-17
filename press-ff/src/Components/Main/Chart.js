import * as d3 from "d3";
import {useRef, useEffect, useState} from "react";
import './Chart.css'

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  padding = 20,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40
}) {
  const [lineCommand, setLineCommand] = useState('')
  const [chartData, setChartData] = useState([
    {
      name: 'data 1',
      date: '2023-09-24',
      value: 0,
    },
    {
      name: 'data 2',
      date: '2023-10-24',
      value: 2,
    },
    {
      name: 'data 3',
      date: '2023-11-24',
      value: 10,
    },
    {
      name: 'data 4',
      date: '2024-05-24',
      value: 5,
    },
    {
      name: 'data 5',
      date: '2024-09-21',
      value: 7,
    },
  ])
  const maxValue = 20

  const svgRef = useRef(null)

  function newData() {
    return chartData.map((data) => {
      data.value = Math.floor(
        Math.random() * (maxValue + 1)
      )
      return data
    })
  }

  useEffect(() => {
    // x csales
    const xScale = d3.scaleUtc([new Date('2023-09-24'), new Date('2024-09-24')], [0+padding, width-padding])
    chartData.forEach((data) => {
      const newData = new Date(data.date)
      console.log(newData)
      console.log(xScale(newData))
    })
    // y scales
    // const yScale = d3.scaleLinear([0, d3.max(chartData, data => data.value)], ["red", "green"])
    const yScale = d3.scaleLinear([0, d3.max(chartData, data => data.value)], [height-padding, padding])
    chartData.forEach((data) => {
      console.log(yScale(data.value))
    })

    const line = d3.line()
      .x((d) => xScale(new Date(d.date)))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX)

    setLineCommand(line(chartData))

    d3.select(svgRef.current)
      .select('path')
      .attr('d', (value) => line(chartData))
      .attr('fill', 'none')
      .attr('stroke', 'white')

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    d3.select('#xaxis').remove()
    d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(0, ${height - padding})`)
      .attr('id', 'xaxis')
      .call(xAxis)

    d3.select('#yaxis').remove()
    d3.select(svgRef.current)
      .append('g')
      .attr('transform', `translate(${padding}, 0)`)
      .attr('id', 'yaxis')
      .call(yAxis)

  }, [chartData])
  return (
    <div className="chart-container">
      <svg id="chart" viewBox="0 0 640 400" ref={svgRef}>
        <path d="" fill="none" stroke="red" strokeWidth="5" />
      </svg>
      <p>
        <button type="button" onClick={() => {
          setChartData(newData())
        }}>
          refresh
        </button>
      </p>
    </div>
  );
}