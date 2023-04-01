import "../App.css";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Image,
    Box
} from '@chakra-ui/react'

const ProductList = () => {


    const products = [
        {
            id: 1,
            name: "baju",
            src: "https://cf.shopee.co.id/file/95b9f8c008674067f25d0b71fd7356ed"
        }, {
            id: 2,
            name: "celana",
            src: "https://cf.shopee.co.id/file/cb5dcc3a26301e1598384bf6e1aa8959"
        }
    ];

    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    const producStore = JSON.parse(localStorage.getItem("products"));

    console.log(producStore);

    const product = producStore.map((el) => {
        return (
            
                <Tr>
                    <Td>{el.id}</Td>
                    <Td>{el.name}</Td>
                    <Td>
                        <Box>
                            <Image src={el.src} alt='image not found' boxSize='150px' />
                        </Box>
                    </Td>
                    <Td>
                        <Button colorScheme='green'>Add To Cart</Button>
                    </Td>
                </Tr>
            
        )
    })

    // localStorage.clear()


    return (
        <div className="product-con">
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>name</Th>
                            <Th>Picture</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {product}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductList;