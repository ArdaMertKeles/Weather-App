import Button from '@mui/material/Button';

export const PopularCities = () => {

    return (
        <div className='popular-cities'>
            <span className='header'>Popular Cities</span>
            <div className='cities'>
                <Button sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>Istanbul</span>
                </Button>
                <Button sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>New York</span>
                </Button>
                <Button sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>Berlin</span>
                </Button>
                <Button sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>New Delhi</span>
                </Button>
                <Button sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>Tokyo</span>
                </Button>
            </div>
        </div>
    )
}