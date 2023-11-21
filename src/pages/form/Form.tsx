import { useState, useRef, MouseEvent } from "react";
import "./form.css";

/* import { ABOS, initalFormData } from "@/data"; */
import {
    StyledInput,
    ImageUploader,
    StyledButton,
    StyledDropdown,
    Spacer,
    Switcher,
    BackButton,
} from "../../components";
import { Card, Flex, Text } from "@radix-ui/themes";
import { lan } from "../../i18n";
import { ABOS, initalFormData } from "../../data";
import { createUser } from "../../services";
import { User } from "../../types";
import { validateForm } from "../../utils";

export function Form() {
    const [formValid, setFormValid] = useState<boolean>(false);
    const [formState, setFormState] = useState<User>(initalFormData);
    const formRef = useRef<HTMLFormElement>(null);

    const onChange = (key: string, value: string) => {
        if (validateForm(formState).success) {
            setFormValid(true);
        }
        setFormState((prevState) => {
            return {
                ...prevState,
                [key]: value,
            };
        });
    };

    const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            if (!validateForm(formState).success) {
                return;
            } else {
                await createUser(formState);
                if (formRef.current) {
                    formRef.current.reset();
                }
                setFormState(initalFormData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Flex direction="row" gap="2" align="center" justify="center">
            <Card size={"1"} style={{ width: 400 }}>
                <Text size="6" weight="bold">
                    {lan.de.form.title}
                </Text>
                <Spacer height={20} />
                <form ref={formRef}>
                    <StyledInput
                        data-testid="form-name"
                        id="vorname"
                        label={lan.de.form.firstName}
                        value={formState.firstName}
                        required
                        onChange={(e) => onChange("firstName", e.target.value)}
                    />
                    <ImageUploader
                        data-testid="form-image"
                        storage="profile"
                        onUpload={(url) => onChange("profileUrl", url)}
                    />
                    <StyledInput
                        data-testid="form-lastname"
                        id="lastname"
                        label={lan.de.form.lastName}
                        value={formState.lastName}
                        required
                        onChange={(e) => onChange("lastName", e.target.value)}
                    />
                    <StyledInput
                        data-testid="form-email"
                        id="email"
                        label={lan.de.form.email}
                        type="email"
                        value={formState.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        required
                    />
                    <StyledInput
                        data-testid="form-address"
                        id="address"
                        label={lan.de.form.address}
                        value={formState.address}
                        onChange={(e) => onChange("address", e.target.value)}
                        required
                    />
                    <StyledInput
                        data-testid="form-zipCode"
                        id="zipCode"
                        label={lan.de.form.zip}
                        value={formState.zipCode}
                        onChange={(e) => onChange("zipCode", e.target.value)}
                        required
                    />
                    <StyledInput
                        data-testid="form-city"
                        id="city"
                        label={lan.de.form.city}
                        value={formState.city}
                        onChange={(e) => onChange("city", e.target.value)}
                        required
                    />
                    <StyledDropdown
                        data-testid="form-abo"
                        id="abos"
                        label={lan.de.form.abos}
                        onChange={(value) => onChange("abo", value)}
                        defaultValue={formState.abo}
                        options={ABOS.map((abo) => {
                            return {
                                value: abo.value,
                                label: abo.name,
                            };
                        })}
                    ></StyledDropdown>
                    <Switcher></Switcher>
                    <StyledButton
                        data-testid="form-submit"
                        text={lan.de.form.submit}
                        type="submit"
                        disabled={formValid ? false : true}
                        onClick={onSubmit}
                    />
                </form>
                <Spacer height={20} />
            </Card>
            <BackButton />
        </Flex>
    );
}
