import { Metadata } from "next";

interface Props {
    params: { id: string }; // URL의 id 파라미터를 정의
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const { id } = params;

//     const response = await fetch(`https://api.example.com/meta/${id}`, {
//         next: { revalidate: 60 }, // 데이터를 60초마다 캐싱
//     });

//     if (!response.ok) {
//         throw new Error("Failed to fetch metadata");
//     }

//     const metaData = await response.json();

//     return {
//         title: metaData.title || "Default Title",
//         description: metaData.description || "Default description",
//         keywords: metaData.keywords || "default, keywords",
//     };
// }

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <main>{children}</main>;
};

export default Layout;
