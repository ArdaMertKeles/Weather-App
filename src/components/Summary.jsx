import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export const Summary = () => {

    return (
        <Stack direction="column" sx={{ width: '50%' }}>
            <span>Summary</span>
            <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                    data={[27, 30, 18, 18, 25, 23]}
                    height={200}
                    curve="natural"
                    area
                />
            </Box>
            <div>
                <span>Temperature</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Stack>

    )
}