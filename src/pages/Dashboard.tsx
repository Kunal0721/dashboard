import { StatCard } from "@/components/StatCard";
import WorldMap from "@/components/WorldMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from "recharts";

const barData = [
  { month: "Jan", projection: 18000000, actual: 22000000 },
  { month: "Feb", projection: 21000000, actual: 26000000 },
  { month: "Mar", projection: 19000000, actual: 24000000 },
  { month: "Apr", projection: 24000000, actual: 29000000 },
  { month: "May", projection: 16000000, actual: 19000000 },
  { month: "Jun", projection: 21000000, actual: 25000000 },
];

const lineData = [
  { month: "Jan", current: 12000000, previous: 15000000 },
  { month: "Feb", current: 9000000, previous: 18000000 },
  { month: "Mar", current: 16000000, previous: 10000000 },
  { month: "Apr", current: 13000000, previous: 17000000 },
  { month: "May", current: 19000000, previous: 10000000 },
  { month: "Jun", current: 23000000, previous: 21000000 },
];

const locations = [
  { city: "New York", value: "72K", progress: 72 },
  { city: "San Francisco", value: "39K", progress: 39 },
  { city: "Sydney", value: "25K", progress: 25 },
  { city: "Singapore", value: "61K", progress: 61 },
];

const salesData = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

const COLORS = ["#3b82f6", "#10b981", "#6366f1", "#f59e0b"];

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$5,087.36" },
];

export default function Dashboard() {

  return (
    <div className="flex-1 space-y-4 md:space-y-6 p-4 md:p-6 lg:p-8">
      <div>
        <h2 className="font-bold text-lg md:text-xl">eCommerce</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left Column - 4 Stat Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <StatCard
            title="Customers"
            value="3781"
            change="+11.01%"
            variant="primary"
          />
          <StatCard
            title="Orders"
            value="1219"
            change="-0.03%"
            isPositive={false}
            className="dark:bg-[hsl(0,1%,14%)]"
          />
          <StatCard title="Revenue" value="695" change="+15.03%" className="dark:bg-[hsl(0,1%,14%)]" />
          <StatCard
            title="Growth"
            value="30.1%"
            change="+6.08%"
            variant="primary"
          />
        </div>

        {/* Right Column - Chart Card */}
        <div className="lg:col-span-7">
          <Card className="h-full">
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="text-sm md:text-base font-semibold">Projections vs Actuals</CardTitle>
            </CardHeader>
            <CardContent className="pb-4 md:pb-6">
              <style>{`.recharts-bar:hover { opacity: 1 !important; filter: none !important; }`}</style>
            <ResponsiveContainer width="100%" height={220} className="md:hidden">
                <BarChart data={barData}>
                  <CartesianGrid
                    strokeDasharray="0"
                    className="stroke-muted"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    className="text-[10px]"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    className="text-[10px]"
                    ticks={[0, 10000000, 20000000, 30000000]}
                    tickFormatter={(value) => `${value / 1000000}M`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar
                    dataKey="projection"
                    stackId="a"
                    fill="#93c5fd"
                    name="Projection"
                    radius={0}
                    barSize={16}
                  />
                  <Bar
                  dataKey="actual"
                  stackId="a"
                  fill="#bfdbfe"
                  name="Actual"
                  radius={[4, 4, 0, 0]}
                  barSize={16}
                  />
                </BarChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={260} className="hidden md:block">
                <BarChart data={barData}>
                  <CartesianGrid
                    strokeDasharray="0"
                    className="stroke-muted"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    className="text-xs"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    className="text-xs"
                    ticks={[0, 10000000, 20000000, 30000000]}
                    tickFormatter={(value) => `${value / 1000000}M`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar
                  dataKey="projection"
                  stackId="a"
                  fill="#93c5fd"
                  name="Projection"
                  radius={0}
                  barSize={32}
                  />
                  <Bar
                  dataKey="actual"
                  stackId="a"
                  fill="#bfdbfe"
                  name="Actual"
                  radius={[6, 6, 0, 0]}
                  barSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Revenue and Revenue by Location */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <Card className="h-full flex-1 lg:w-[78%]">
          <CardHeader className="pb-4 md:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-base md:text-lg font-semibold">Revenue</CardTitle>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-foreground" />
                  <span className="text-xs">
                    <span className="text-muted-foreground">Current Week</span>{" "}
                    <span className="font-semibold text-foreground">$58,211</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-300" />
                  <span className="text-xs">
                    <span className="text-muted-foreground">Previous Week</span>{" "}
                    <span className="font-semibold text-foreground">$68,768</span>
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <ResponsiveContainer width="100%" height={380} className="md:hidden">
              <LineChart data={lineData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="hsl(var(--border))"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  className="text-xs"
                  axisLine={false}
                  tickLine={false}
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis
                  className="text-xs"
                  ticks={[0, 10000000, 20000000, 30000000]}
                  tickFormatter={(value) => `${value / 1000000}M`}
                  axisLine={false}
                  tickLine={false}
                  stroke="hsl(var(--muted-foreground))"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, ""]}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="hsl(var(--foreground))"
                  strokeWidth={3}
                  dot={false}
                  name="Current Week"
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#93c5fd"
                  strokeWidth={3}
                  strokeDasharray="8 8"
                  dot={false}
                  name="Previous Week"
                />
              </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={380} className="hidden md:block">
              <LineChart data={lineData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="hsl(var(--border))"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  className="text-xs"
                  axisLine={false}
                  tickLine={false}
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis
                  className="text-xs"
                  ticks={[0, 10000000, 20000000, 30000000]}
                  tickFormatter={(value) => `${value / 1000000}M`}
                  axisLine={false}
                  tickLine={false}
                  stroke="hsl(var(--muted-foreground))"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, ""]}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="hsl(var(--foreground))"
                  strokeWidth={3}
                  dot={false}
                  name="Current Week"
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#93c5fd"
                  strokeWidth={3}
                  strokeDasharray="8 8"
                  dot={false}
                  name="Previous Week"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="h-full lg:w-[28.5%]">
          <CardHeader className="pb-4 md:pb-6">
            <CardTitle className="text-base md:text-lg font-semibold">Revenue by Location</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="space-y-4 md:space-y-6">
              {/* Globe Image */}
              <div className="flex justify-center items-center py-4">
                <img
                  src="/images/globe.png"
                  alt="Global Revenue Distribution"
                  className=" object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Location List with Progress Bars */}
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.city} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{location.city}</span>
                      <span className="text-sm font-semibold">{location.value}</span>
                    </div>
                    <Progress
                      value={location.progress}
                      className="h-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Selling Products and Total Sales */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-10">
        <Card className="lg:col-span-7">
          <CardHeader className="pb-3 md:pb-4">
            <CardTitle className="text-sm md:text-base">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 md:pb-6">
            <div className="overflow-x-auto -mx-2 md:mx-0">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm font-medium text-muted-foreground">
                      Name
                    </th>
                    <th className="text-left py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm font-medium text-muted-foreground">
                      Price
                    </th>
                    <th className="text-left py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm font-medium text-muted-foreground">
                      Quantity
                    </th>
                    <th className="text-left py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm font-medium text-muted-foreground">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-0 hover:bg-muted/50"
                    >
                      <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm">{product.name}</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm">{product.price}</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm">{product.quantity}</td>
                      <td className="py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm font-medium">
                        {product.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader className="pb-3 md:pb-4">
            <CardTitle className="text-sm md:text-base">Total Sales</CardTitle>
          </CardHeader>
          <CardContent className="pb-4 md:pb-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={salesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {salesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value}`, ""]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Direct</span>
                  <span className="text-sm">$300.56</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Affiliate</span>
                  <span className="text-sm">$135.18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Sponsored</span>
                  <span className="text-sm">$154.02</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">E-mail</span>
                  <span className="text-sm">$48.96</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
