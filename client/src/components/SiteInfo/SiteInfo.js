import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box, Typography } from '@mui/material';
import { bgcolor, display, textAlign } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CrownIcon from '@mui/icons-material/EmojiEvents';
import EditIcon from '@mui/icons-material/Edit';
import PenIcon from '@mui/icons-material/Create';
import BuildIcon from '@mui/icons-material/Build';


const data = [
  { name: 'Jan', SQL: 2000, MongoDB: 2400, AWS: 5000, FireStore: 4100 },
  { name: 'Feb', SQL: 3000, MongoDB: 2500, AWS: 4900, FireStore: 4150 },
  { name: 'Mar', SQL: 2000, MongoDB: 2600, AWS: 4800, FireStore: 4200 },
  { name: 'Apr', SQL: 2780, MongoDB: 2700, AWS: 4700, FireStore: 4250 },
  { name: 'May', SQL: 1890, MongoDB: 2800, AWS: 4600, FireStore: 4300 },
  { name: 'Jun', SQL: 2390, MongoDB: 2900, AWS: 4500, FireStore: 4350 },
  { name: 'Jul', SQL: 3490, MongoDB: 3000, AWS: 4400, FireStore: 4400 },
  { name: 'Aug', SQL: 4000, MongoDB: 2900, AWS: 4500, FireStore: 4350 },
  { name: 'Sep', SQL: 3000, MongoDB: 2800, AWS: 4600, FireStore: 4300 },
  { name: 'Oct', SQL: 2000, MongoDB: 2700, AWS: 4700, FireStore: 4250 },
  { name: 'Nov', SQL: 2780, MongoDB: 2600, AWS: 4800, FireStore: 4200 },
  { name: 'Dec', SQL: 1890, MongoDB: 2500, AWS: 4900, FireStore: 4150 }
];


const rows = [
  { name: 'Jordan Stevenson', username: '@jsteve', email: 'Jacinthe_Blick@hotmail.com', role: 'Admin', status: 'Moderate', Icon: CrownIcon },
  { name: 'Richard Payne', username: '@rpayne', email: 'Jaylon_Bartell3@gmail.com', role: 'Editor', status: 'Active', Icon: EditIcon },
  { name: 'Jennifer Summers', username: '@jsummers', email: 'Tristin_Johnson@gmail.com', role: 'Author', status: 'Active', Icon: PenIcon },
  { name: 'Mr. Justin Richardson', username: '@jrichardson', email: 'Toney21@yahoo.com', role: 'Editor', status: 'Moderate', Icon: EditIcon },
  { name: 'Nicholas Tanner', username: '@ntanner', email: 'Hunter_Kuhic68@hotmail.com', role: 'Editor', status: 'Moderate', Icon: EditIcon },
  { name: 'Crystal Mays', username: '@cmays', email: 'Norene_Bins@yahoo.com', role: 'Maintainer', status: 'Active', Icon: BuildIcon },
  { name: 'Mary Garcia', username: '@mgarcia', email: 'Emmitt.Walker14@hotmail.com', role: 'Maintainer', status: 'Inactive', Icon: BuildIcon },
];

const statusColors = {
  Active: '#4CAF50',
  Moderate: '#FF9800',
  Inactive: '#9E9E9E'
};

const SiteInfo = ({open}) => {
  return (
    <Box sx={{ background: '#1A202D', color: '#95A2B3', padding: '20px', margin: '30px', width: '95%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', height: 520 }}>
      <Box width="40%" height={450} textAlign={'center'}>
        <h2>Database Connections</h2>
        <ResponsiveContainer  >
          <AreaChart width={400} height={400} data={data}>
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="SQL" stackId="1" stroke="#8884d8" strokeWidth={4} fill="#c6c4f5" />
            <Area type="monotone" dataKey="MongoDB" stackId="1" stroke="#82ca9d" strokeWidth={4} fill="#cbf7dc" />
            <Area type="monotone" dataKey="AWS" stackId="1" stroke="#ffc658" strokeWidth={4} fill="#f5deb3" />
            <Area type="monotone" dataKey="FireStore" stackId="1" stroke="#ff7300" strokeWidth={4} fill="#fcc597" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
      <Box width="50%" height={400} textAlign={'center'}>
        <h2>Active Users</h2>
        <TableContainer component={Paper} sx={{ width: open ? '800px' : '900px' , height: 450, overflow: 'auto' }} >
          <Table sx={{overflow: 'auto'}} >
            <TableHead sx={{ backgroundColor: '#293245'}}>
              <TableRow>
                <TableCell sx={{ width: '200px' , color: '#e3e8e8' }}>User</TableCell>
                <TableCell sx={{ width: '300px' , color: '#e3e8e8' }}>Email</TableCell>
                <TableCell sx={{ width: '100px' , color: '#e3e8e8' }}>Role</TableCell>
                <TableCell sx={{ width: '100px' , color: '#e3e8e8' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: '#212B3C', color:'#fff' }}>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{color: '#e3e8e8'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <AccountCircleIcon color="action" sx={{fill: '#fff'}} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: '5px' }}>
                        <Typography variant="subtitle1">{row.name}</Typography>
                        <Typography variant="caption">{row.username}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{color: '#e3e8e8'}}>{row.email}</TableCell>
                  <TableCell sx={{color: '#e3e8e8'}}>
                    <row.Icon color="primary" />
                    {row.role}
                  </TableCell>
                  <TableCell sx={{color: '#e3e8e8'}}>
                    <Chip label={row.status} style={{ backgroundColor: statusColors[row.status], color: 'white' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Box>
  );
}

export default SiteInfo;
