"use client";

import Banner from "@components/home/Banner";
import { Wrapper } from "@components/layout/LayoutClient";
import styled from "styled-components";
import LNB, { MenuItemsType } from "@components/lnb";
import PaginatedPromptSection from "@/components/home/prompt/PaginatedPromptSection";
import Button from "@/components/common/Button/Button";
import Text from "@/components/common/Text/Text";
import Icon from "@/components/common/Icon";
import useToast from "@/hooks/useToast";
import useDeviceSize from "@/hooks/useDeviceSize";
import { useEffect, useState } from "react";
import { useResetRecoilState } from "recoil";
import {
    searchedCategoryState,
    searchedKeywordState,
} from "@/states/searchState";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function HomePage() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const showToast = useToast();
    const { isUnderTablet } = useDeviceSize();
    const resetSearchedKeyword = useResetRecoilState(searchedKeywordState);
    const resetSearchedCategory = useResetRecoilState(searchedCategoryState);
    const [isInitialized, setIsInitialized] = useState(false);

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
            onClick: () => router.push("/starred-prompt"),
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

    // const promptContent = () => {
    //     if (promptListType === "text") {
    //         return (
    //             <>
    //                 <BannerWrapper>
    //                     <Banner />
    //                 </BannerWrapper>
    //                 {/* <PaginatedPromptSection /> */}
    //             </>
    //         );
    //     } else {
    //         // return <PaginatedPromptSection viewType="starred" />;
    //     }
    //     return null;
    // };

    useEffect(() => {
        resetSearchedKeyword();
        resetSearchedCategory();
        setIsInitialized(true);
    }, [resetSearchedCategory, resetSearchedKeyword]);

    // useEffect(() => {
    //     const resetPromptList = searchParams.get("resetPromptList");

    //     if (pathname === "/" && resetPromptList) {
    //         setPromptListType("text");
    //     }
    // }, [pathname, searchParams]);

    if (!isInitialized) {
        return null; // hydration 에러 방지
    }

    return (
        <HomeWrapper>
            <HomeContentWrapper $isUnderTablet={isUnderTablet}>
                <LNB menuItems={menuItems} button={newPropmptButton} />
                <ContentWrapper>
                    <BannerWrapper>
                        <Banner />
                    </BannerWrapper>
                    <PaginatedPromptSection />
                </ContentWrapper>
            </HomeContentWrapper>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    ${({ theme }) => theme.mixins.flexBox()}
    gap: 40px;
    padding-top: 92px;
    align-items: start;
    width: 100vw;
    background-color: white;
`;

const HomeContentWrapper = styled.div<{ $isUnderTablet: boolean }>`
    ${({ theme, $isUnderTablet }) =>
        theme.mixins.flexBox(
            $isUnderTablet ? "column" : "row",
            "center",
            "start"
        )};
    gap: ${({ $isUnderTablet }) => ($isUnderTablet ? "20px" : "40px")};
    margin: 0 auto;
`;

const ContentWrapper = styled(Wrapper)`
    max-width: 1107px;
    width: 100vw;
    padding: 0 10px;
`;

const BannerWrapper = styled.div`
    margin-bottom: 15px;
    width: 100%;
`;
