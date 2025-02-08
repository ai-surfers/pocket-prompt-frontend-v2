import type { Metadata } from "next";
import "./globals.css";
import Styles from "@/styles";
import RecoilProvider from "@/components/RecoilProvider";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import LayoutClient from "@/components/layout/LayoutClient";
import Toast from "@/components/common/Toast/Toast";
import GlobalModal from "@/components/common/Modal/GlobalModal";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const defaultMetadata: Metadata = {
    title: "포켓 프롬프트 - ChatGPT 프롬프트 모음 | AI 프롬프트 템플릿 저장소",
    keywords:
        "ChatGPT 프롬프트, AI 프롬프트 템플릿, 프롬프트 엔지니어링, 프롬프트 모음, AI 활용법, 프롬프트 저장, 프롬프트 공유, ChatGPT 활용, Claude 프롬프트",
    description:
        "ChatGPT, Claude 등 AI 프롬프트 작성이 어려우신가요? 검증된 프롬프트 템플릿을 저장하고 바로 사용하세요!",
    icons: {
        icon: `${process.env.NEXT_PUBLIC_BASE_URL}/img/logo_white_square.png`,
    },
    openGraph: {
        title: "포켓 프롬프트 - ChatGPT 프롬프트 모음 | AI 프롬프트 템플릿 저장소",
        description:
            "ChatGPT, Claude 등 AI 프롬프트 작성이 어려우신가요? 검증된 프롬프트 템플릿을 저장하고 바로 사용하세요!",
        url: baseUrl,
        type: "website",
        siteName: "Pocket Prompt",
        images: [
            {
                type: "image/svg",
                url: `${baseUrl}/img/images.png`,
            },
        ],
    },
};

export const metadata = defaultMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="stylesheet"
                    crossOrigin="anonymous"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                />
            </head>
            <body>
                <Styles>
                    <ReactQueryProvider>
                        <RecoilProvider>
                            <LayoutClient>{children}</LayoutClient>
                            <Toast />
                            <GlobalModal />
                        </RecoilProvider>
                    </ReactQueryProvider>
                </Styles>
            </body>
        </html>
    );
}
