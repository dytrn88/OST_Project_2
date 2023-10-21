import { ElementType } from "react";
import "./card.css";
import { Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

type CardProps = {
    title: string;
    description: string;
    link: string;
    Icon: ElementType;
};
function CustomCard({ title, description, link, Icon }: CardProps) {
    return (
        <Card>
            <Flex gap="3" align="center">
                <Link to={link}>
                    <Icon size={30} />
                    <Text as="div" size="2" weight="bold">
                        {title}
                    </Text>
                    <Text as="div" color="gray" size="2">
                        {description}
                    </Text>
                </Link>
            </Flex>
        </Card>
    );
}

export { CustomCard };
