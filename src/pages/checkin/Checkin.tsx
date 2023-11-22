import { BackButton, Spacer } from "@/components";
import { lan } from "@/i18n";
import { checkinUser, fetchUsers, getClassesFromToday } from "@/services";
import { ScheduleEntry, User } from "@/types";
import React, { useMemo, useState } from "react";
import Select from "react-select";

const Checkin: React.FC = () => {
    const [classes, today] = getClassesFromToday();
    const [selectedUser, setSelectedUser] = useState<User>();
    const [selectedClass, setSelectedClass] = useState<ScheduleEntry>(classes[0]);
    const [users, setUsers] = useState<User[]>([]);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");

    useMemo(() => {
        async function fetchData() {
            const res = await fetchUsers();
            setUsers(res);
        }
        fetchData();
    }, []);

    const handleCheckin = async () => {
        let res;
        if (selectedUser && selectedClass) {
            res = await checkinUser(selectedClass.id, selectedUser);
        }
        if (res?.message) {
            setShowMessage(true);
            setMessage(res.message);
            setTimeout(() => setShowMessage(false), 3000);
            setSelectedUser(undefined);
        }
    };

    return (
        <div>
            <h1>Check In</h1>
            <h2>
                {lan.de.checkin.daySig}{" "}
                {lan.de.general[today as keyof typeof lan.de.general]}
            </h2>
            <div style={{ width: "50%" }}>
                <Select
                    data-testid="user-select"
                    value={selectedUser}
                    getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
                    onChange={(selectedOption) => {
                        if (selectedOption) {
                            setSelectedUser(selectedOption);
                        }
                    }}
                    options={users}
                    placeholder="Search for a user..."
                    isSearchable
                    className="user-select"
                />
                <Spacer height={20} />
                <Select
                    data-testid="class-select"
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
            <button onClick={() => handleCheckin()}>Check In</button>
            <BackButton />
            {showMessage ? <h3>{message}</h3> : null}
        </div>
    );
};

export { Checkin };

