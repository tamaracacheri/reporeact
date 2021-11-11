import { Container, Box } from '@mui/material';
import ItemCount from './ItemCount';


const ItemListContainer = ({ title }) => {
    return ( 
        <Container maxWidth="xl">
            <Box sx={{
                    flexGrow: 1,
                    mx: 'auto',
                    marginTop: 5,
                    textAlign: 'center'
                }}
            >
                <h1>{title}</h1>
                <ItemCount stock={5} initial={1} />
            </Box>
        </Container>
    );
}
 
export default ItemListContainer;
 