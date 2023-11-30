import { BackButton } from "@/components";
import EditUserModal from "@/components/EditUserModal/EditUserModal";
import { useEditUsers, useFetchUsers } from "@/services";
import { Table } from "@radix-ui/themes";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

const AdminUsers: React.FC = () => {
    const users = useFetchUsers();
    console.log(users);
    const { updateUser } = useEditUsers();
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<{
        userId: string | null;
        userData: any | null
    }>
        ({
            userId: null,
            userData: null
        });



    const handleEdit = async (id: string) => {
        const userData = users.find(user => user.id === id)

        setModalOpen(true);
        setModalData({ userId: id, userData });
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSaveUser = () => {
        // Placeholder for save logic
        console.log('Save user logic');
        console.log(users)
        handleCloseModal();
    };

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
                        <Table.ColumnHeaderCell>Abo type</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Level</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Session counter</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users.map((user) => (
                        <Table.Row key={user.id}>

                            <Table.RowHeaderCell >
                                <MdOutlineEdit
                                    onClick={() => handleEdit(user.id)}
                                />

                            </Table.RowHeaderCell>
                            <Table.Cell>{`${user.firstName} ${user.lastName}`}</Table.Cell>
                            <Table.Cell>{`${user.email} `}</Table.Cell>
                            <Table.Cell>{`${user.abo} `}</Table.Cell>
                            <Table.Cell>{`${user.status} `}</Table.Cell>
                            <Table.Cell>999</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            {isModalOpen && (
                <EditUserModal
                    userData={modalData.userData}
                    onClose={handleCloseModal}
                    onSave={handleSaveUser}
                    updateUser={updateUser}
                />
            )}

        </div >
    );
};

export { AdminUsers };

