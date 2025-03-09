

import React, { useState } from "react";
import { Input, PasswordInput } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { useDisclosure } from "@mantine/hooks";
import { loginUser } from "@shared/api/authService";
import { LoginButtonStyle, LoginButtonStyle2, LoginFormStyled, LoginOrDivStyle, } from "@shared/styled/LoginStyles";

const LoginFormStyle = () => {
    const [visible, { toggle }] = useDisclosure(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ username: "", password: "" });

    const validateForm = () => {
        let valid = true;
        let newErrors = { username: "", password: "" };

        if (!username.trim()) {
            newErrors.username = "User Name is required";
            valid = false;
        } else if (username.length < 3) {
            newErrors.username = "User Name must be at least 3 characters";
            valid = false;
        } else if (/[^a-zA-Z0-9_]/.test(username)) {
            newErrors.username = "User Name can only contain letters, numbers, and underscores"; valid = false;
        }
        if (!password.trim() || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await loginUser({ username, password });
            console.log("Login Success:", response);
        } catch (error: any) {
            console.error("Login Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <h2>Login to Your Account</h2>

            <Input
                placeholder="User Name"
                mt="md"
                className="textInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={errors.username}
            />

            <PasswordInput
                placeholder="Password"
                visible={visible}
                onVisibilityChange={toggle}
                mt="md"
                className="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
            />

            <h5>Forgot your password?</h5>

            <LoginButtonStyle type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login Account"}
            </LoginButtonStyle>

            <LoginOrDivStyle>
                <span></span>
                <h4>or</h4>
                <span></span>
            </LoginOrDivStyle>

            <LoginButtonStyle2>
                <FcGoogle />
                Google
            </LoginButtonStyle2>
        </LoginFormStyled>
    );
};

export default LoginFormStyle;








