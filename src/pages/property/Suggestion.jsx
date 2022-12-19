import { Container, SimpleGrid } from "@mantine/core";
import CustomCard from "../../shared/CustomCard/CustomCard";

export default function Suggestion({ posts }) {

  let width = window.innerWidth;
  console.log(width);

  return (
    <Container size="xl" py="3rem">
      <h2>Suggestion For You</h2>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "sm", cols: 2 },
          { maxWidth: "md", cols: 3, spacing: "md" },
        ]}
      >
        {
          width < 768 ? <CustomCard cards={posts.slice(0,2)}></CustomCard> : <CustomCard cards={posts}></CustomCard>
        }
      </SimpleGrid>
    </Container>
  );
}
