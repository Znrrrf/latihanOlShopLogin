import "../App.css";
import { Button, Stack } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <div className="nav-con">
            <div className="nav-title">
                <h1> TOKO COBA </h1>
            </div>
            <div className="nav-butt">
                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='white' variant='outline'>
                        CART
                    </Button>
                </Stack>
            </div>

        </div>
    )
}

export default NavBar;