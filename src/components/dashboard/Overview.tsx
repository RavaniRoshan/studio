"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const data = [
  { subject: "Math", hours: 12, color: "#2D2D2D" },
  { subject: "Bio", hours: 8, color: "#4D7BFF" },
  { subject: "Hist", hours: 5, color: "#FFC107" },
  { subject: "Lit", hours: 10, color: "#FF94A5" },
  { subject: "Phys", hours: 7, color: "#DFFFD6" },
];

export function Overview() {
  return (
    <Card className="col-span-4 border-2 border-black hand-drawn-border bg-[#FCFBF5] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)]">
      <CardHeader>
        <CardTitle className="text-primary serif text-2xl">Weekly Distribution</CardTitle>
        <CardDescription className="italic serif">Hours spent per subject over the last 7 days.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
              <XAxis 
                dataKey="subject" 
                stroke="#2D2D2D" 
                fontSize={10} 
                fontWeight="bold"
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => value.toUpperCase()}
              />
              <YAxis 
                stroke="#2D2D2D" 
                fontSize={10} 
                fontWeight="bold"
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}H`}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border-2 border-black hand-drawn-border shadow-xl">
                        <p className="font-black text-xs uppercase tracking-widest text-primary mb-1">{payload[0].payload.subject}</p>
                        <p className="text-lg font-bold">{payload[0].value} hours</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="hours" radius={[4, 4, 0, 0]} barSize={40} stroke="#000" strokeWidth={1}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
