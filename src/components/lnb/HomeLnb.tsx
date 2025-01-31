"use client";

import React from "react";
import LNB, { MenuItemsType } from "../lnb";
import useDeviceSize from "@/hooks/useDeviceSize";
import { useRouter } from "next/navigation";
import Text from "@/components/common/Text/Text";
import Icon from "@/components/common/Icon";
import useToast from "@/hooks/useToast";
import Button from "../common/Button/Button";

interface HomeLnbType {
    initialMenu: string;
}

const HomeLnb = ({ initialMenu }: HomeLnbType) => {
    const { isUnderTablet } = useDeviceSize();
    const router = useRouter();
    const showToast = useToast();

    const menuItems: MenuItemsType[] = [
        {
            key: "1",
            label: "텍스트 프롬프트",
            iconType: "TextBlock",
            onClick: () => router.push("/"),
            "data-tracking-id": "text-prompt",
        },
        {
            key: "2",
            label: "이미지 프롬프트",
            iconType: "Image",
            onClick: () =>
                showToast({
                    title: "이미지 프롬프트는 아직 준비 중인 기능이에요.",
                    subTitle:
                        "더 많은 프롬프트 탐색을 위해 빠르게 준비하고 있을게요!",
                    iconName: "Timer",
                }),
            disabled: true,
            "data-tracking-id": "image-prompt",
        },
        {
            key: "3",
            label: "동영상 프롬프트",
            iconType: "Video",
            onClick: () =>
                showToast({
                    title: `동영상 프롬프트는 아직 준비 중인 기능이에요.`,
                    subTitle:
                        "더 많은 프롬프트 탐색을 위해 빠르게 준비하고 있을게요!",
                    iconName: "Timer",
                }),
            disabled: true,
            "data-tracking-id": "video-prompt",
        },
        ...(isUnderTablet
            ? []
            : [{ type: "divider" as const, key: "divider-1" }]),
        {
            key: "4",
            label: "저장한 프롬프트",
            iconType: "Bookmark",
            onClick: () => router.push("/saved-prompt"),
            "data-tracking-id": "saved-prompt",
        },
    ];

    const handleClickNewButton = () => {
        router.push("/prompt-new");
    };

    const newPropmptButton = (
        <Button
            onClick={handleClickNewButton}
            style={{ padding: "8px 12px", gap: 2 }}
            size={isUnderTablet ? 40 : 52}
        >
            <Icon name="Add" color="white" size={20} />
            <Text font="b2_16_semi" color="white">
                프롬프트 등록
            </Text>
        </Button>
    );

    if (typeof window === "undefined") return null;

    return (
        <LNB
            menuItems={menuItems}
            button={newPropmptButton}
            initialMenu={initialMenu}
        />
    );
};

export default HomeLnb;
