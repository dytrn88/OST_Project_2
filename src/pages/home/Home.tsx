import { Flex } from "@radix-ui/themes";
import "./home.css";

import { MdFormatListBulleted } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CustomCard } from "../../components";

export function Home() {
    return (
        <div
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                display: "flex",
                width: "100vw",
            }}
        >
            <Flex direction="row" gap="2" align="center" justify="center">
                <CustomCard
                    title="Dashboard"
                    description="Check who is checked in"
                    link="/dashboard"
                    Icon={RxDashboard}
                />
                <CustomCard
                    title="Form"
                    description="Register new clients"
                    link="/form"
                    Icon={MdFormatListBulleted}
                />
                <CustomCard
                    title="Checkin"
                    description="Let your users check in"
                    link="/checkin"
                    Icon={AiOutlineCheckCircle}
                />
            </Flex>
        </div>
    );
}