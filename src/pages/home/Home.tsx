import { CustomCard } from "@/components";
import { StyledButton } from "@/components/StyledButton/StyledButton";
import { useLogout } from "@/firebase";
import { Flex } from "@radix-ui/themes";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import "./home.css";

import { FaUserGear } from "react-icons/fa6";


export function Home() {

    const [logout, logoutState] = useLogout();

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>

            </div>
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
                        title="Checkin"
                        description="Let your users check in"
                        link="/checkin"
                        Icon={AiOutlineCheckCircle}
                    />
                    <CustomCard
                        title="Dashboard"
                        description="Check who is checked in"
                        link="/dashboard"
                        Icon={RxDashboard}
                    />
                    <CustomCard
                        title="Form"
                        description="Register new customers"
                        link="/form"
                        Icon={MdFormatListBulleted}
                    />
                    <CustomCard
                        title="User admin"
                        description="Manage registered users"
                        link="/admin"
                        Icon={FaUserGear}
                    />

                    <CustomCard
                        title="Calendar"
                        description="View training schedule"
                        link="/calendar"
                        Icon={BsCalendarDate}
                    />
                </Flex>
            </div>
        </div>
    );
}