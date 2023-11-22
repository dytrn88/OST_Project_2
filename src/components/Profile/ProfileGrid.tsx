import React from "react";
import { Session } from "../../types";
import ProfileCard from "../Profile/ProfileCard";
import "./ProfileGrid.css";

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
