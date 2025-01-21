"use client";

import { RecoilRoot } from "recoil";

export default function RecoilProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RecoilRoot
            initializeState={(snapshot) => {
                console.log("Recoil 초기화 상태:", snapshot);
            }}
        >
            {children}
        </RecoilRoot>
    );
}
