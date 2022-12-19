import { Container, SimpleGrid } from '@mantine/core';
import CustomCard from '../../shared/CustomCard/CustomCard';




export default function Suggestion({ posts }) {


    return (
        <Container size='xl' py='3rem'>
            <h2>Suggestion For You</h2>
            <SimpleGrid
                cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 },
                { maxWidth: 'md', cols: 2, spacing: 'md' }]}>
                <CustomCard cards={posts}></CustomCard>
            </SimpleGrid>
        </Container>
    );
}