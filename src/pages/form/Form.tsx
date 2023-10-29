import { Card, Flex, Text } from "@radix-ui/themes";
import { BackButton, Spacer, StyledInput } from "../../components";
import { StyledButton } from "../../components/StyledButton/StyledButton";


export function Form() {

    return (
        <Flex direction="row" gap="2" align="center" justify="center">
            <Card size={"1"} style={{ width: 400 }}>
                <Text size="6" weight="bold">
                </Text>
                <Spacer height={20} />
                <StyledInput
                    id="firstname"
                    label="Vorname"
                    required
                />
                <StyledInput
                    id="lastname"
                    label="Name"
                    required
                />
                <StyledInput
                    id="email"
                    label="Email"
                    required
                />
                <StyledInput
                    id="adress"
                    label="Addresse"
                    required
                />
                <StyledInput
                    id="zipCode"
                    label="PLZ"
                    required
                />
                <StyledInput
                    id="city"
                    label="Ort"
                    required
                />
                <StyledButton
                    text="Absenden"
                    type="submit"
                />
            </Card>
            <BackButton />
        </Flex>
    )
}