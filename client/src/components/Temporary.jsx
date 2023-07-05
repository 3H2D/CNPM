import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Checkbox, Typography} from "@material-tailwind/react";
import PhanAnhUser from "./PhanAnhUser.jsx";
import {useNavigate} from "react-router-dom";
import DonTamTruTable from "./DonTamTruTable.jsx";
import Admin from "./TableData/Admin.jsx";
import DonTamVangTable from "./DonTamTruVang.jsx";

export default function Temporary() {
    const [activeTab, setActiveTab] = useState('donTamTru');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        if (activeTab === 'donTamTru') {
            return <DonTamTruTable/>;
        } else if (activeTab === 'donTamVang') {
            return <DonTamVangTable/>;
        }
        return null;
    };
    return (
        <div>
            <div className="flex justify-center gap-4 pb-4">
                <Button
                    className={`${
                        activeTab === 'donTamTru' ? 'active' : 'bg-gray-600'
                    } tab-button`}
                    onClick={() => handleTabChange('donTamTru')}
                >
                    Đơn tạm trú
                </Button>

                <Button
                    className={`${
                        activeTab === 'donTamVang' ? '' : 'bg-gray-600'
                    } tab-button`}
                    onClick={() => handleTabChange('donTamVang')}
                >
                    Đơn tạm vắng
                </Button>
            </div>
            <Card className="overflow-scroll h-full w-full">
                {renderContent()}
            </Card>

        </div>

    );
}
