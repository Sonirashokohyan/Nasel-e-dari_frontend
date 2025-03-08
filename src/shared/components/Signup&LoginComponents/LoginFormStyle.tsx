
import { Input, PasswordInput, Stack } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { useDisclosure } from '@mantine/hooks';
import { LoginButtonStyle, LoginButtonStyle2, LoginFormStyled, LoginOrDivStyle } from "@shared/styled/LoginStyles";

const LoginFormStyle = () => {

    const [visible, { toggle }] = useDisclosure(false);

    return (
        <LoginFormStyled>
            <h2>Login your Account</h2>

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
            <p>Forgot your Password?</p>
            <LoginButtonStyle>Login Account</LoginButtonStyle>
            <LoginOrDivStyle>
                <span></span>
                <p>or</p>
                <span></span>
            </LoginOrDivStyle>
            <LoginButtonStyle2>
                <FcGoogle />
                Google
            </LoginButtonStyle2>

        </LoginFormStyled>
    )
}

export default LoginFormStyle