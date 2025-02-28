import React from 'react';
import { Carousel } from 'antd';
import { bannerClothes, bannerMobile } from '@shared/Images/Image'; // Ensure this path is correct
import { BoxRightHeader, ImageSliderHeader, SliderDivHeader } from '@shared/styled/HeaderStyle';
import { SliderItem } from '@shared/allTypeScripts/Landing.type';

const SliderPhoto: SliderItem[] = [
    {
        src: bannerMobile,
        alt: 'a mobile',
    },
    {
        src: bannerClothes,
        alt: 'clothes',
    },
];

const HeaderRight: React.FC = () => {
    return (
        <BoxRightHeader>
            <Carousel autoplay draggable>
                {SliderPhoto.map((item, index) => (
                    <SliderDivHeader key={index}>
                        <ImageSliderHeader 
                            src={item.src} 
                            alt={item.alt} 
                            width="100%" 
                            height="53vh"
                            preview={false} 
                        />
                    </SliderDivHeader>
                ))}
            </Carousel>
        </BoxRightHeader>
    );
};

export { HeaderRight };