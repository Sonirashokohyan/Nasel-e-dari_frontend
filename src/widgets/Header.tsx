import React from 'react';
import useWindowSize from "@features/hooks/useWindowsSize";
import { HeaderLeft } from "@shared/Components/HeaderComp/HeaderLeft";
import { HeaderRight } from "@shared/Components/HeaderComp/HeaderRight";
import { ContainerHeader } from "@shared/styled/HeaderStyle";
import { WindowSize } from '@shared/allTypeScripts/Landing.type';

// Define the type for the useWindowSize hook's return value


const Header: React.FC = () => {
    const { width } = useWindowSize() as WindowSize;

    return (
        <ContainerHeader>
            <HeaderLeft />

            {width > 768 ? (
                <HeaderRight />
            ) : null}
        </ContainerHeader>

    )
}

export { Header };