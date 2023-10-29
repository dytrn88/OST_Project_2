
import "./ProfileCard.css"
import { Card, Text } from "@radix-ui/themes";

import useAuth from "../../firebase/useAuth";

type CardProps = {
    title: string;

};
function ProfileCard({ title }: CardProps) {
    /*   const { currentUser } = useAuth() */

    return (
        <Card>
            <Text>{title}</Text>
            {/* <strong>Email: </strong> {currentUser.email} */}
        </Card>
    );
}

export { ProfileCard };
