import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const PopularCities = () => {

    return (
        <div>
            <span>Popular Cities</span>
            <Stack direction="column" width={'20%'} spacing={2}>
                <Button sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <span className='btn'>Istanbul</span>
                    <span>Display</span>
                </Button>
                <Button sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <span className='btn'>New York</span>
                    <span>Display</span>
                </Button>
                <Button sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <span className='btn'>Berlin</span>
                    <span>Display</span>
                </Button>
                <Button sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <span className='btn'>New Delhi</span>
                    <span>Display</span>
                </Button>
                <Button sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <span className='btn'>Tokyo</span>
                    <span>Display</span>
                </Button>
            </Stack>
        </div>
    )
}