
import { CustomButtonProps } from "@shared/allTypeScripts/CustomButton.type";
import { StyledButton } from "@shared/styled/Buttonstyled";


const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  btntext,
  btnbackground,
  btnborder,
  btncolor,
  btnwidth,
  fontWeight,
  fontSize,
  hoverbackground,
  hoverborder,
  hovercolor,
  width,
}) => {
  return (
    <StyledButton
      type={type}
      btnbackground={btnbackground}
      btnborder={btnborder}
      btncolor={btncolor}
      btnwidth={btnwidth}
      fontWeight={fontWeight}
      fontSize={fontSize}
      hoverbackground={hoverbackground}
      hoverborder={hoverborder}
      hovercolor={hovercolor}
      width={width}
    >
      {btntext}
    </StyledButton>
  );
};

export  {CustomButton};
