import * as Avatar from '@radix-ui/react-avatar';
import { Card, Flex, Text } from "@radix-ui/themes";
import React from 'react';
import { AboStatus } from '..';
import { Session } from '../../types';
import "./ProfileCard.css";

const ProfileCard: React.FC<Session> = ({ userData }) => {
    console.log(userData);
    return (
        <Card style={{ gap: 20 }}>
            <Flex direction={"row"}>
                <Avatar.Root className="AvatarRoot">
                    <Avatar.Image
                        className="AvatarImage"
                        src={userData.profileUrl}
                        alt="Colm Tuite"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        {userData.firstName[0] + userData.lastName[0]}
                    </Avatar.Fallback>
                </Avatar.Root>
                <Text style={{ marginLeft: 20 }}>
                    {userData.firstName} {userData.lastName}
                </Text>
                <AboStatus variant="valid" />
            </Flex>
        </Card>
    );
};

export default ProfileCard;