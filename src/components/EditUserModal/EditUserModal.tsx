import { User } from '@/types';
import { Flex } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import { Spacer, StyledButton } from '..';
import './EditUserModal.css';
import * as Form from '@radix-ui/react-form';

interface EditUserProps {
    userData: any | null;
    onClose: () => void;
    onSave: (newLastName: string, newFirstName: string) => void;
    updateUser: (id: string, updatedData: Partial<User>) => Promise<void>;
}

const EditUserModal: React.FC<EditUserProps> = ({ userData, onClose, onSave, updateUser }) => {
    const [newLastName, setNewLastName] = useState<string>('');
    const [newFirstName, setNewFirstName] = useState<string>('');
    const [newEmail, setNewEmail] = useState<string>('');
    const [newAbo, setNewAbo] = useState<string>('');
    const [newStatus, setNewStatus] = useState<string>('');

    useEffect(() => {
        if (userData) {
            setNewLastName(userData.lastName);
            setNewFirstName(userData.firstName);
            setNewEmail(userData.email);
            setNewAbo(userData.abo);
            setNewStatus(userData.status);
        }
    }, [userData]);

    const handleSave = async () => {
        onSave(
            newLastName,
            newFirstName,
            newEmail,
            newAbo,
            newStatus,

        );

        await updateUser(userData.id, {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            abo: newAbo,
            status: newStatus,
        })

        onClose();
    };

    return (

        <div className="modal">
            <div className="modal-content">
                <h2>Edit User Data</h2>
                <Flex
                    direction="column">
                    <label
                        className="FormLabel">
                        Last Name:
                        <input
                            className="Input"
                            type="text"
                            value={newLastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                        />
                    </label>
                    <label>
                        First Name:
                        <input
                            className="Input"
                            type="text"
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            className="Input"
                            type="text"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Abo:
                        <input
                            className="Input"
                            type="text"
                            value={newAbo}
                            onChange={(e) => setNewAbo(e.target.value)}
                        />
                    </label>
                    <label>
                        Status:
                        <input
                            className="Input"
                            type="text"
                            value={newStatus || 'Enter Level'} // Convert undefined to an empty string
                            onChange={(e) => setNewStatus(e.target.value)}
                        />
                    </label>

                    <Spacer></Spacer>
                    <Flex direction="row" gap="2" align="center" justify="center">
                        <button
                            className="Button"
                            style={{ marginTop: 10 }}
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            className="Button"
                            style={{ marginTop: 10 }}
                            onClick={handleSave}
                        >
                            Close
                        </button>
                    </Flex>
                </Flex>


            </div>
        </div>

    );
};

export default EditUserModal;
