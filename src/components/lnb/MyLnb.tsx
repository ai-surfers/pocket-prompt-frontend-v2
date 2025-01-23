"use client";

import React from "react";
import LNB, { MenuItemsType } from ".";
import { useRouter } from "next/navigation";

interface MyLnbType {
    initialMenu: string;
}
const MyLnb = ({ initialMenu }: MyLnbType) => {
    const router = useRouter();
    const menuItems: MenuItemsType[] = [
        {
            key: "1",
            label: "마이페이지",
            iconType: "Profile",
            onClick: () => router.push("/my"),
            "data-tracking-id": "my-page",
        },
        {
            key: "2",
            label: "구독 관리",
            iconType: "Card",
            onClick: () => router.push("/subscription"),
            "data-tracking-id": "my-subscription",
        },
    ];

    if (typeof window === "undefined") return null;

    return <LNB menuItems={menuItems} initialMenu={initialMenu} />;
};

export default MyLnb;
