

import { SimpleGrid, Container } from '@mantine/core';
import CustomCard from '../../shared/CustomCard/CustomCard';
import useData from '../../hooks/useData';



export default function Saved() {
    const { posts } = useData()
    
    
    return (
        <Container size='lg' py='3rem'>
            <SimpleGrid
                cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 },
                { maxWidth: 'md', cols: 2, spacing: 'md' }]}>
                <CustomCard cards={posts}></CustomCard>
            </SimpleGrid>
        </Container>
    );
}