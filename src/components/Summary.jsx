import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useState, useEffect } from "react";

export const Summary = ({ isDark, hourlyData }) => {

    const [chartHeight, setChartHeight] = useState(230)
    
    useEffect(() => {
        const handleResize = () => {
            setChartHeight(window.innerWidth > 900 ? (1100 ? 230 : 200) : 180);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    if (!hourlyData || !hourlyData.list) return null;
    
    const temperatures = hourlyData.list.map(entry => entry.main.temp);
    const times = hourlyData.list.map(entry => {
        const date = new Date(entry.dt_txt);
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    });

    return (
        <Stack className='summary-container' direction="column" sx={{ width: '72.5%' }}>
            <span className='header'>Summary</span>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SparkLineChart
                    data={temperatures}
                    height={chartHeight}
                    curve="sharp"
                    area
                    sx={{
                        "& path": { stroke: isDark ? '#1e1e1e' : '#719ed5' },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        mt: 1
                    }}
                >
                    {times.map((time, index) => (
                        <div key={index} className='temperature-box' style={{ textAlign: 'center', minWidth: '50px' }}>
                            <span>{time}</span>
                            <span>{`${Math.floor(temperatures[index])}°C`}</span>
                        </div>
                    ))}
                </Box>
            </Box>
        </Stack>
    )
}