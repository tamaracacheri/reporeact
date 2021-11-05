import { Container, Box } from '@mui/material';

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
                <h3>{title}</h3>
            </Box>
        </Container>
    );
}
 
export default ItemListContainer;