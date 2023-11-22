import { Card, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { StyledInput } from "@/components";
import { StyledButton } from "@/components/StyledButton/StyledButton";
import { login } from "@/firebase";

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Flex direction="row" gap="2" align="center" justify="center">
            <Card size={"1"} style={{ width: 400 }}>
                <div className="input-group">
                    <StyledInput
                        type="email"
                        id="email"
                        label="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <StyledInput
                        type="password"
                        id="password"
                        label="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <StyledButton
                    text="Login"
                    onClick={() => {
                        login(email, password);
                    }}
                ></StyledButton>
            </Card>
        </Flex>
    );
}

export { Login };
