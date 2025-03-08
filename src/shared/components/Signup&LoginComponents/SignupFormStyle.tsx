import React, { useState } from "react";
import { Input, Select, PasswordInput, Stack } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { useDisclosure } from '@mantine/hooks';
import { SignupButtonStyle, SignupButtonStyle2, SignupFormStyled, SignupOrDivStyle } from "@shared/styled/SignupStyles";


const SignupFormStyle = () => {

       const [selectedAge, setSelectedAge] = useState<string>("");
        // Handle age selection
        const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedAge(event.target.value);
        };
        const [visible, { toggle }] = useDisclosure(false);
    
    
        const [age, setAge] = useState<string | null>(null);
    
        const handleChange = (value: string | null) => {
            setAge(value);
        };
        const ageOptions = Array.from({ length: 150 }, (_, i) => ({
            value: (i + 1).toString(),
            label: (i + 1).toString(),
        }));
    
    

  return (
    <SignupFormStyled>
                <h2>Create Your Profile</h2>
                <Select
                    placeholder="Age"
                    value={age}
                    onChange={handleChange}
                    data={ageOptions}
                    searchable
                    mt="md"
                    className="selectInput"
                />
                <p>Providing your age ensures you get the right duolingo experience. For more details, Please visit our <span>Privacy Policy</span></p>
                <Input
                    placeholder="Name (optional)"
                    className="textInput"
                />
                <Input
                    placeholder="Email"
                    mt="md"
                    className="textInput"
                />

                <PasswordInput
                    placeholder="Password"
                    visible={visible}
                    onVisibilityChange={toggle}
                    mt="md"
                    height="400px"
                    variant="filled"
                    className="passwordInput"

                />
                <SignupButtonStyle>Create Account</SignupButtonStyle>
                <SignupOrDivStyle>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </SignupOrDivStyle>
                <SignupButtonStyle2>
                    <FcGoogle />
                    Google
                </SignupButtonStyle2>
                <p>By signing in to duolingo, you agree to our Terms and Privacy Policy.</p>
                <span>This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and and Terms of Service apply</span>

            </SignupFormStyled>
  )
}

export default SignupFormStyle