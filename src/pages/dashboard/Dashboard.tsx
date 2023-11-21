import React, { useState } from "react";
import Select from "react-select";
import { ScheduleEntry } from "../../types";
import { ProfileGrid } from "../../components/Profile/ProfileGrid";
import { BackButton } from "../../components";
import useFetchSessions from "../../services/firebaseHook";
import { getClassesFromToday } from "../../services";


const Dashboard: React.FC = () => {
    const [classes] = getClassesFromToday();
    const [selectedClass, setSelectedClass] = useState<ScheduleEntry>(classes[0]);
    const { data: checkedInUsers } = useFetchSessions(selectedClass.id);

    return (
        <div className="app">
            <h1>Dashboard</h1>
            <div style={{ width: "50%", margin: 20 }}>
                <Select
                    data-testid="class-select-dashboard"
                    value={selectedClass}
                    getOptionLabel={(option) => `${option.value} (${option.time})`}
                    onChange={(selectedOption) => {
                        if (selectedOption) {
                            setSelectedClass(selectedOption);
                        }
                    }}
                    options={classes}
                />
            </div>
            <BackButton />
            <ProfileGrid profiles={checkedInUsers} />
        </div>
    );
};

export { Dashboard };
