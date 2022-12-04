import { Button, Container, Group, Image, Pagination, Table } from '@mantine/core';
import React, { useState } from 'react';
import useData from '../../hooks/useData';

const Users = () => {
    const { users } = useData();
    const items = users;
    const [activePage, setPage] = useState(1);
    const itemPerPage = 6;
    const pageVisited = (activePage - 1) * itemPerPage;

    const rows = items.slice(pageVisited, pageVisited + itemPerPage).map((element) => (
        <tr key={element.post_id}>
            <td>{element.user_id}</td>
            <td>{element.user_name}</td>
            <td>{element.user_email}</td>
            <td>
                <Group mt="md">
                    <Button>Update</Button>
                    <Button color='red'>Remove</Button>
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
                verticalSpacing="lg"
                fontSize="lg"
                highlightOnHover
                >
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>Post Location</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>

        </Container>
    );
};

export default Users;