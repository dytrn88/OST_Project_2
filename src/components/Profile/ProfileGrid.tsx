import React from "react";
import ProfileCard from "../Profile/ProfileCard";
import "./ProfileGrid.css";
import { Session } from "../../types";

interface GridProps {
    profiles: Session[];
}

const ProfileGrid: React.FC<GridProps> = ({ profiles }) => {
    return (
        <div className="profile-grid">
            {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
            ))}
        </div>
    );
};

export { ProfileGrid };
