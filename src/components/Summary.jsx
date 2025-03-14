import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export const Summary = ({ isDark }) => {

    return (
        <Stack className='summary-container' direction="column" sx={{ width: '72.5%' }}>
            <span className='header'>Summary</span>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SparkLineChart
                    data={[27, 30, 18, 38, 25, 23, 30]}
                    height={230}
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
                    {["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"].map((time, index) => (
                        <div key={index} className='temperature-box' style={{ textAlign: 'center', minWidth: '50px' }}>
                            <span>{time}</span>
                            <span>{`${[27, 30, 18, 38, 25, 23, 30][index]}°C`}</span>
                        </div>
                    ))}
                </Box>
            </Box>
        </Stack>

    )
}