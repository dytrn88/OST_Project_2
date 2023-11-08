import { BackButton, ProfileGrid } from "../../components";
import ProfileCard from "../../components/Profile/ProfileCard";


export function Dashboard() {
    return (
        <div className="home">
            <h2>Dashboard</h2>
            <ProfileGrid />
            <BackButton />

        </div>
    )
}