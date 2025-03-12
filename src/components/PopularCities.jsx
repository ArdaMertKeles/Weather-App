import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const PopularCities = () => {

    return (
        <div>
            <span>Popular Cities</span>
            <Stack direction="column" spacing={2}>
                <Button>Primary</Button>
                <Button>Disabled</Button>
                <Button>Link</Button>
            </Stack>
        </div>
    )
}