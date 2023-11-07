import { Flex } from "@radix-ui/themes";
import { MdFormatListBulleted } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { CustomCard, Navbar } from "../../components";
import "./home.css";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { useLogout } from "../../firebase";
import { StyledButton } from "../../components/StyledButton/StyledButton";




export function Home() {

    const [logout, logoutState] = useLogout();

    return (
        <div>
            <StyledButton
                text="Logout"
                onClick={() => {
                    logout();
                }}
                disabled={logoutState.isLoading}
            ></StyledButton>
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