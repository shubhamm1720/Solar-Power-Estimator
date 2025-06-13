import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ResultGraph({ dailyOutput }) {
  const data = Array.from({ length: 13 }, (_, i) => ({
    month: ` Month ${i}`,
    kWh: (dailyOutput * 30).toFixed(2),
  }));

  return (
    <div className="graph-container">
      <h3>MONTHLY SOLAR OUTPUT(kWh)</h3>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="kWh" stroke="#ff9900" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
