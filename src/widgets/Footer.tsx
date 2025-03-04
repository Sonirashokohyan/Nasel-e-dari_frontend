import { FooterContainer, FooterItem, FooterList } from '@shared/styled/Footer';



const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterItem>About</FooterItem>
        <FooterItem>Contact</FooterItem>
        <FooterItem>Terms</FooterItem>
        <FooterItem>Privacy</FooterItem>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
