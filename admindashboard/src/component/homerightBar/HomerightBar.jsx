import React from 'react'
import  "./homerightBar.css"
import Navbar from '../Navbar'
import {ComposedChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,Line,createHorizontalChart,LineChart,RadialBarChart, RadialBar } from 'recharts';



const data = [
  { label: 'Янв', x: 400, y: 240 },
  { label: 'Фев', x: 300, y: 139 },
  { label: 'Мар', x: 200, y: 980 },
  { label: 'Апр', x: 278, y: 390 },
  { label: 'Май', x: 189, y: 480 },
  { label: 'Июн', x: 239, y: 380 },
];
const data2 = [
  { name: 'Янв', x: 400, y: 240 },
  { name: 'Фев', x: 300, y: 139 },
  { name: 'Мар', x: 200, y: 980 },
  { name: 'Апр', x: 278, y: 390 },
  { name: 'Май', x: 189, y: 480 },
  { name: 'Июн', x: 239, y: 380 },
];
const Typed = createHorizontalChart({ XAxis, YAxis, Tooltip, Line });

const HomerightBar = () => {
  return (
    <div className="mainrightBarContainer">
      <Navbar/>
      <div>
      <div className='itemContainer'>
        <div className='itemConteiner1'>
          <div className='subitemContainer'>
            <p className='taskProgress'>Task progress</p>
            <p className='taskCounter'>212</p>
            <p className='currentMonth1'>Current Month</p>
          </div>
          <div className='barcharContainer'>
            
               <div style={{ width: '100%', minWidth: '250px', height: '100%', flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  {/* <YAxis /> */}
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="x" fill="#8884d8" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="y" fill="#82ca9d" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
                <div className='itemConteiner1'>
          <div className='subitemContainer'>
            <p className='taskProgress'>Task completed</p>
            <p className='taskCounter1'>301</p>
            <p className='currentMonth1'>Current Month</p>
          </div>
          <div className='barcharContainer'>
            
               <div style={{ width: '100%', minWidth: '250px', height: '100%', flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  {/* <YAxis /> */}
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="x" fill="gray" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="y" fill="blue" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
                <div className='itemConteiner1'>
          <div className='subitemContainer'>
            <p className='taskProgress'>Monthly Task Summary</p>
            <p className='taskCounter2'>1294</p>
            <p className='currentMonth1'>Current Month</p>
          </div>
          <div className='barcharContainer'>
            
               <div style={{ width: '100%', minWidth: '250px', height: '100%', flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  {/* <YAxis /> */}
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="x" fill="gray" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="y" fill="orange" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </div>
      <div className='middleTaskChart'>
        <p className='taskcreatedvsCompleted'>Task Created vs Task Completed</p>
       <LineChart
          style={{ width: '100%', maxWidth: '90%', height: '250px'}}
          responsive
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
           <Line type="monotone" dataKey="x" stroke="#8884d8" strokeWidth={2} />
           <Line type="monotone" dataKey="y" stroke="#82ca9d" strokeWidth={2} />
          {/* <RechartsDevtools /> */}
    </LineChart>
      </div>
      <div className='taskContainer'>
        <div className='taskChart'>
          <p className='taskContainerText'>Your Team perfomance This Week</p>
        <RadialBarChart
            style={{ width: '100%', maxWidth: '80%', maxHeight: '300px',height: '300px', aspectRatio: 1.618 }}
            responsive
            cx="30%"
            barSize={20}
            
            data={data2}
          >
            <RadialBar label={{ position: 'insideStart',fill: '#fff',fontSize: 12  }} background={{fill: 'blue'}} dataKey="x" />
            <Legend iconSize={5} position="right" />
            <Tooltip  formatter={(value, name, props) => [value, props.payload.name]} />
            {/* <RechartsDevtools /> */}
    </RadialBarChart>
        </div>
        <div className='MonthlyEarning'>
          <p className='taskContainerText top'>Monthly Earning Performance</p>
          <ComposedChart
            style={{ width: '80%', maxWidth: '80%', maxHeight: '300px', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="label" scale="band" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Bar dataKey="x" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="x" stroke="#ff7300" />
            {/* <RechartsDevtools /> */}
       </ComposedChart>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomerightBar