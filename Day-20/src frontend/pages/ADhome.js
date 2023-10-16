import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import './Adminfull.css'
import { Link } from 'react-router-dom';

function ADhome() {

    const data = [
        {
          name: 'AGRA',
          uv: 10000,
          pv: 8000,
          amt: 2400,
        },
        {
          name: 'ooty',
          uv: 3000,
          pv: 1000,
          amt: 2210,
        },
        {
          name: 'kerala',
          uv: 5000,
          pv: 3800,
          amt: 2290,
        },
        {
          name: 'Goa',
          uv: 10000,
          pv: 8500,
          amt: 2000,
        },
        {
          name: 'Guj',
          uv: 4000,
          pv: 2500,
          amt: 2181,
        },
        {
          name: 'Delhi',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'vak',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Spots</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>999+</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PACKAGES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>999+</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                <Link to='/admin'>
                <h3>CLIENTS</h3>
                </Link>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>APP RESPONSES</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default ADhome
