import { Container, Box } from '@mui/material';
import TitleComponent from './title/title';

const ItemListContainer = () => {
    return ( 
        <Container maxWidth="xl">
            <Box sx={{
                    flexGrow: 1,
                    mx: 'auto',
                    marginTop: 5,
                    textAlign: 'center'
                }}
            >
                <TitleComponent/>
            </Box>
        </Container>
    );
}
 
export default ItemListContainer;