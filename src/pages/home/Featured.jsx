

import { SimpleGrid, Container } from '@mantine/core';
import CustomCard from '../../shared/CustomCard/CustomCard';
import useData from '../../hooks/useData';






export default function Featured() {
    const { posts } = useData()

    return (
        <Container size='lg' py='3rem'>
            <h1 
                style={{textAlign:'center',fontSize:'2.5rem',marginTop:0,marginBottom:'3.5rem'}}
            >
                Wide range of property to suit all budgets & tastes
            </h1>
            <SimpleGrid
                cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 },
                { maxWidth: 'md', cols: 2, spacing: 'md' }]}>
                <CustomCard cards={posts.slice(0,6)}></CustomCard>
            </SimpleGrid>
        </Container>
    );
}