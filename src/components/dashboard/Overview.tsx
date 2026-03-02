
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { subject: "Math", hours: 12, color: "hsl(var(--primary))" },
  { subject: "Bio", hours: 8, color: "hsl(var(--accent))" },
  { subject: "Hist", hours: 5, color: "hsl(var(--chart-3))" },
  { subject: "Lit", hours: 10, color: "hsl(var(--chart-4))" },
  { subject: "Phys", hours: 7, color: "hsl(var(--chart-5))" },
];

export function Overview() {
  return (
    <Card className="col-span-4 border-primary/10">
      <CardHeader>
        <CardTitle className="text-primary">Weekly Subject Distribution</CardTitle>
        <CardDescription>Hours spent per subject over the last 7 days.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
              <XAxis 
                dataKey="subject" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}h`}
              />
              <Tooltip 
                cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border rounded-xl shadow-xl">
                        <p className="font-bold text-primary">{payload[0].payload.subject}</p>
                        <p className="text-muted-foreground">{payload[0].value} hours</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="hours" radius={[8, 8, 0, 0]} barSize={40}>
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
