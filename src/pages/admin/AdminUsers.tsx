import { BackButton } from "@/components";
import { fetchUsers } from "@/services";
import { User } from "@/types";
import { Table } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

const AdminUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    console.log(users)

    useEffect(() => {
        async function fetchData() {
            console.log()
            const res = await fetchUsers();
            setUsers(res);
        }
        fetchData();
    }, []);

    return (

        < div >
            <h1>User admin</h1>

            <BackButton />

            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>

                        <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Abo Status</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users.map((user) => (
                        <Table.Row key={user.id}>

                            <Table.RowHeaderCell >
                                <MdOutlineEdit />
                            </Table.RowHeaderCell>
                            <Table.Cell>{`${user.firstName} ${user.lastName}`}</Table.Cell>
                            <Table.Cell>{`${user.email} `}</Table.Cell>
                            <Table.Cell>{`${user.abo.name} `}</Table.Cell>
                            <Table.Cell>Valid / expired</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table.Root>

        </div >
    );
};

export { AdminUsers };

