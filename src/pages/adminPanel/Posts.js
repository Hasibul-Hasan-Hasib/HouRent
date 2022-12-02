import { ActionIcon, Button, Container, Group, Image, Pagination, Table } from '@mantine/core';
import React, { useState } from 'react';
import { IconRefresh, IconTrash } from '@tabler/icons';
import useData from '../../hooks/useData';

const Posts = () => {
    const { posts } = useData()
    const items = posts;
    const [activePage, setPage] = useState(1);
    const itemPerPage = 6;
    const pageVisited = (activePage - 1) * itemPerPage;

    const rows = items.slice(pageVisited, pageVisited + itemPerPage).map((element) => (
        <tr key={element.post_id}>
            <td>
                <Image src={element.img1}
                    style={{ width: '4rem', borderRadius: '50%', aspectRatio: '3/2', objectFit: 'contain' }}
                ></Image>
            </td>
            <td>{element.post_id}</td>
            <td>{element.post_loc}</td>
            <td>{element.price}</td>
            <td>{element.available === 0 ? "Not Available" : 'Available'}</td>
            <td>
                <Group mt="md">
                    <ActionIcon variant='filled' color='cyan' size='lg'>
                        <IconRefresh size={24} />
                    </ActionIcon>
                    <ActionIcon variant='filled' color='red' size='lg'>
                        <IconTrash size={24} />
                    </ActionIcon>

                </Group>
            </td>
        </tr>
    ));

    return (
        <Container size='xl' mt='5rem'>
            <Group position='apart' mt="md">
                <Pagination size="md" color='cyan' siblings={3} page={activePage} onChange={setPage} total={Math.ceil(items.length / itemPerPage)} />
                <Button color='cyan'>Add Post</Button>
            </Group>
            <Table
                mt='2rem'
                mb='5rem'
                verticalSpacing="lg"
                fontSize="lg"
                highlightOnHover
            >
                <thead>
                    <tr>
                        <th>Post Img</th>
                        <th>Post Id</th>
                        <th>Post Location</th>
                        <th>Price</th>
                        <th>Atomic mass</th>
                        <th>Edit/Remove</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>

        </Container>
    );
};

export default Posts;