

import UnorderedList from "@shared/Components/SettingPageComponent/UnorderedLi";
import { MainDivSettingPage, OptionsDivSettingPage, SettingPageDiv } from "@shared/styled/SettingsPageStyled";
import Footer from "@widgets/Footer";
const onChange = (checked: boolean) => {
  console.log(`Switch toggled: ${checked}`);
};



const Page = () => {
  const accountSettings = [
    { label: "Private", defaultChecked: true },
    { label: "Sound Effect", defaultChecked: true },
    { label: "Animations", defaultChecked: false },
  ];

  const preferenceSettings = [
    { label: "Dark Mode", defaultChecked: false },
    { label: "Sound Effect", defaultChecked: false },
    { label: "Animations", defaultChecked: true },
  ];

  return (
    <MainDivSettingPage>
      <SettingPageDiv>
      <OptionsDivSettingPage>
        <h3>Account</h3>
        <UnorderedList items={accountSettings} onChange={onChange} />
      </OptionsDivSettingPage>

      <OptionsDivSettingPage>
        <h3>Preference</h3>
        <UnorderedList items={preferenceSettings} onChange={onChange} />
      </OptionsDivSettingPage>
      </SettingPageDiv>
      <Footer/>
    </MainDivSettingPage>
  );
};

export { Page };
