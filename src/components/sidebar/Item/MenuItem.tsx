import Text from "@/components/common/Text/Text";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";

type MenuItemProps = {
    menu: {
        label: string;
        path: string;
    };
    onClose: () => void;
};
const MenuItem = ({ menu, onClose }: MenuItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const selected = pathname === menu.path;

    const font = selected ? "b2_16_med" : "b2_16_reg";
    const color = selected ? "primary" : "G_400";

    const handleOnNavigate = () => {
        router.push(menu.path);
        onClose();
    };
    return (
        <Item onClick={handleOnNavigate}>
            {selected && <Rectangle />}
            <Text font={font} color={color}>
                {menu.label}
            </Text>
        </Item>
    );
};

const Item = styled.div`
    width: 100%;
    padding: 14px 20px;
    position: relative;
    cursor: pointer;
`;

const Rectangle = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    border-radius: 0px 2px 2px 0px;
    background: ${({ theme }) => theme.colors.primary};
`;

export default MenuItem;
