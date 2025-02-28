import React from 'react';
import { Button, Image } from 'antd';
import { HeaderImage } from "@shared/Images/Image";
import useWindowSize from "@features/hooks/useWindowsSize";
import { BIgScImageLeftHeader, BoxLeftHeader, ImageLeftHeader, MiniBoxLeftHeader, SmallScImageHeader} from "@shared/styled/HeaderStyle";
import { WindowSize } from '@shared/allTypeScripts/Landing.type';

const HeaderLeft: React.FC = () => {
    const { width } = useWindowSize() as WindowSize;

    return (
        <BoxLeftHeader>
            <MiniBoxLeftHeader>
                <h3><strong>Sell Faster, Buy Smarter</strong></h3>
                <p>
                    Easily list your products and reach thousands of potential buyers. 
                    Discover great deals on a variety of items, all in one trusted platform!
                </p>
                <Button type="primary">Explore</Button>
            </MiniBoxLeftHeader>

            {width > 768 ? (
                <BIgScImageLeftHeader>
                    <ImageLeftHeader src={HeaderImage} alt="Header Image" />
                </BIgScImageLeftHeader>
            ) : (
                <SmallScImageHeader>
                    <Image src={HeaderImage} alt="Header Image" />
                </SmallScImageHeader>
            )}
        </BoxLeftHeader>
    );
};

export { HeaderLeft };