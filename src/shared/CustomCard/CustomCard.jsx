import React from 'react';
import styles from './CustomCard.module.css'
import { Card, Image, Text, AspectRatio, Group, Badge } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useScrollIntoView } from '@mantine/hooks';



const CustomCard = ({ cards }) => {

    const { scrollIntoView } = useScrollIntoView();

    return (
        <>
            {
                cards.map((card) => (
                    <Card key={card.post_id} p="md" radius="md" component={Link} to={`/property/${card.post_id}`} onClick={() => scrollIntoView()} className={styles.card}>
                        <AspectRatio ratio={1920 / 1080}>
                            <Image src={card.img1} />
                        </AspectRatio>
                        <Group style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                                {card.post_loc}
                            </Text>
                        </Group>
                        <Badge variant='filled' color='cyan' className={styles.badge}>{card.post_type === 0 ? 'Rent' : 'Sell'}</Badge>
                        <Badge variant='filled' color='cyan' className={styles.badge}>{card.available === 0 ? 'Not Available' : 'Available'}</Badge>
                        <Text className={styles.title} mt={5}>
                            Price - {card.price.toLocaleString(undefined, { maximumFractionDigits: 2 })} Tk
                        </Text>
                    </Card>
                ))
            }
        </>
    );

}



export default CustomCard;