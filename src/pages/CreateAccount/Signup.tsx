import React, { useState } from "react";
import { Flex, Input, Select, PasswordInput, Stack } from "@mantine/core";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";
import { useDisclosure } from '@mantine/hooks';
import { FcGoogle } from "react-icons/fc";



const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  
`;

const FormStyled = styled.form`
        display: flex;
        flex-direction:column;
        width: 30%;
        padding: 1rem;
        gap: .3rem;
        & h2{
            text-align: center;
            font-size: 1.5rem;
            color: #201f1f;
        }
        & p{
            color: #201f1f;
            text-align: center;
            & span{
                color: rgb(11, 105, 220);
            }
        }
        & span{
            text-align: center;
        }

    `;

const OrDivStyle = styled.div`
        position: relative;
        border:1px solid gray;
        margin-block: 1rem;
        & span{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1rem;
            padding: .2rem;
            padding-bottom: .4rem;
            color: gray;
            z-index: 5;
            background-color: white;
        }
    `;

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
`;

const Page = () => {
    // State to track selected age
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
        <StyledSelectWrapper>
            <FormStyled>
                <h2>Create Your Profile</h2>
                <Select
                    placeholder="Age"
                    value={age}
                    onChange={handleChange}
                    data={ageOptions}
                    searchable
                    mt="md"
                />
                <p>Providing your age ensures you get the right duolingo experience. For more details, Please visit our <span>Privacy Policy</span></p>
                <Input
                    placeholder="Name (optional)"
                    mt="md"
                />
                <Input
                    placeholder="Email"
                    mt="md"
                />

                <PasswordInput
                    placeholder="Password"
                    defaultValue="secret"
                    visible={visible}
                    onVisibilityChange={toggle}
                    mt="md"
                />
                <ButtonStyle>Create Account</ButtonStyle>
                <OrDivStyle><span>or</span></OrDivStyle>
                <ButtonStyle>
                    <FcGoogle />
                    Google
                </ButtonStyle>
                <p>By signing in to duolingo, you agree to our Terms and Privacy Policy.</p>
                <span>This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and and Terms of Service apply</span>

            </FormStyled>
        </StyledSelectWrapper >
    );
};

export { Page };
