import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, Stack } from '@chakra-ui/react'


const NavBar = () => {

    const navigate = useNavigate();

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
                    <Button colorScheme='white' variant='outline' onClick={() => navigate("/")}>
                        Log Out
                    </Button>
                </Stack>
            </div>

        </div>
    )
}

export default NavBar;