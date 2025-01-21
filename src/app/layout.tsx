import type { Metadata } from "next";
import "./globals.css";
import Styles from "@/styles";
import RecoilProvider from "@/components/RecoilProvider";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata: Metadata = {
    title: "포켓 프롬프트 - ChatGPT 프롬프트 모음 | AI 프롬프트 템플릿 저장소",
    keywords:
        "ChatGPT 프롬프트, AI 프롬프트 템플릿, 프롬프트 엔지니어링, 프롬프트 모음, AI 활용법, 프롬프트 저장, 프롬프트 공유, ChatGPT 활용, Claude 프롬프트",
    description:
        "ChatGPT, Claude 등 AI 프롬프트 작성이 어려우신가요? 검증된 프롬프트 템플릿을 저장하고 바로 사용하세요!",
    icons: {
        icon: "/img/logo_white_square.png",
    },
    openGraph: {
        url: "https://pocket-prompt.com/",
        type: "website",
        siteName: "Pocket Prompt",
        images: [
            {
                type: "image/svg",
                url: "img/logo_white_square.svg",
            },
        ],
    },
};

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
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </head>
            <body>
                <Styles>
                    <ReactQueryProvider>
                        <RecoilProvider>{children}</RecoilProvider>
                    </ReactQueryProvider>
                </Styles>
            </body>
        </html>
    );
}
