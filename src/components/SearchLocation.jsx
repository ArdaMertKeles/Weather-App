import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export const SearchLocation = () => {

    return (
        <form className="search-location">
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl className='input' variant="standard">
                    <Input
                        placeholder='Search for location'
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>

            </Box>
            <button className="button">
                <SearchIcon className='icon' />
            </button>
        </form>
    )
}