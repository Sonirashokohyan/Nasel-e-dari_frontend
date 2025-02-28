import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineMailOutline, MdOutlineShoppingCart } from 'react-icons/md';
import {
    FooterStyle,
    FirstBoxFooter,
    BoxFooter,
    FirstTitleDivFooter,
    LocationWrapperfooter,
    LocationDetialsFooter,
    SocialFooter,
} from '@shared/styled/FooterStyled';

const Footer: React.FC = () => {
    return (
        <FooterStyle>
            <FirstBoxFooter>
                <FirstTitleDivFooter>
                    <MdOutlineShoppingCart />
                    <h5>SAWDA</h5>
                </FirstTitleDivFooter>
                <p>
                    Our team at Sawda helps businesses sell effortlessly while giving shoppers a seamless buying experience. Join us to showcase your products or discover the best deals!
                </p>
            </FirstBoxFooter>
            <BoxFooter>
                <FirstTitleDivFooter>
                    <h5>Get In Touch</h5>
                </FirstTitleDivFooter>
                <LocationWrapperfooter>
                    <LocationDetialsFooter>
                        <IoLocationSharp />
                        <span>Tajikistan - vahdat</span>
                    </LocationDetialsFooter>
                    <LocationDetialsFooter>
                        <MdOutlineMailOutline />
                        <span>Sawda @ gmail.com</span>
                    </LocationDetialsFooter>
                    <LocationDetialsFooter>
                        <IoIosCall />
                        <span>+992 99988 8000</span>
                    </LocationDetialsFooter>
                </LocationWrapperfooter>
            </BoxFooter>
            <BoxFooter>
                <FirstTitleDivFooter>
                    <h5>Services</h5>
                </FirstTitleDivFooter>
                <ul>
                    <li>Secure Shopping</li>
                    <li>Fast Delivery</li>
                    <li>24/7 Support</li>
                    <li>Easy Returns</li>
                    <li>Verified Sellers</li>
                    <li>Exclusive Deals</li>
                </ul>
            </BoxFooter>
            <BoxFooter>
                <FirstTitleDivFooter>
                    <h5>Company</h5>
                </FirstTitleDivFooter>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Features</li>
                    <li>Blog </li>
                    <li>Portfolios</li>
                </ul>
            </BoxFooter>
            <BoxFooter>
                <SocialFooter>
                    <span aria-label="Facebook">
                        <FaFacebook />
                    </span>
                    <span aria-label="Instagram">
                        <FaInstagramSquare />
                    </span>
                    <span aria-label="Twitter">
                        <FaSquareXTwitter />
                    </span>
                </SocialFooter>
                <p>Stay connected with us! Follow us on social media for the latest updates, exclusive deals, and more.</p>
            </BoxFooter>
        </FooterStyle>
    );
};

export { Footer };