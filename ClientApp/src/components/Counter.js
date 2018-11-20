import React, { Component } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

export class ChartRanking extends Component {
  render() {
    const data = [
      { name: '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
      { name: "yyyy/mm/dd", uv: 1 },
      { name: "b", uv: 3 },
      { name: "c", uv: 2 },
      { name: "a", uv: 4 },
      { name: "b", uv: 3 },
      { name: "c", uv: 2 },
      { name: "a", uv: 4 },
      { name: "c", uv: 5 }
    ]
    return (
      <div className="App">
        <LineChart width={600} height={500} data={data}>
          <XAxis dataKey="name" angle={90} height={90} textAnchor='start'/>
          <YAxis type="category" interval={0} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line dataKey="10" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="9" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="8" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="7" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="6" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="5" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="4" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="3" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="2" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="1" stroke="#ffffff" style={{ display: "none" }} />
          <Line dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    )
  }
}