import React from 'react';
import { Card, Flex, Text } from "@radix-ui/themes";
import * as Avatar from '@radix-ui/react-avatar';
import "./ProfileCard.css"

import { useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export const Users = () => (
    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            console.log(snapshot.docs);
        })
    })
)

const ProfileCard = () => (
    <div style={{ display: 'flex', gap: 20 }}>
        <Card>
            <Users />
            <Avatar.Root className="AvatarRoot">
                <Avatar.Image
                    className="AvatarImage"
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                </Avatar.Fallback>
            </Avatar.Root>
            <Text>
                Andrew Tate
            </Text>
        </Card>

        <Card>
            <Avatar.Root className="AvatarRoot">
                <Avatar.Image
                    className="AvatarImage"
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    alt="Pedro Duarte"
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                </Avatar.Fallback>
            </Avatar.Root>
            <Text>
                Misha Tate
            </Text>
        </Card>
    </div>
);

export default ProfileCard;