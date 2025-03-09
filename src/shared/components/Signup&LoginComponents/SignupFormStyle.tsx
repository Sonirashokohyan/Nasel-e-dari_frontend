// src/widgets/SignupFormStyle.tsx
import React, { useState } from "react";
import { Input, PasswordInput } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { signupUser } from "@shared/api/authService";
import { SignupButtonStyle, SignupButtonStyle2, SignupFormStyled, SignupOrDivStyle } from "@shared/styled/SignupStyles";

const SignupFormStyle = () => {
    const [visible, { toggle }] = useDisclosure(false);
    const [username, setusername] = useState<string>("");
    const [full_name, setFull_name] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ username: "", full_name: "", email: "", password: "" });

    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;
        let newErrors = { username: "", full_name: "", email: "", password: "" };

        // Validate username
        if (!username.trim()) {
            newErrors.username = "User Name is required";
            valid = false;
        } else if (username.length < 3) {
            newErrors.username = "User Name must be at least 3 characters";
            valid = false;
        } else if (/[^a-zA-Z0-9_]/.test(username)) { newErrors.username = "User Name can only contain letters, numbers, and underscores"; valid = false;
        }

        // Validate full_name
        if (!full_name.trim() || full_name.length < 2) {
            newErrors.full_name = "Full Name must be at least 2 characters";
            valid = false;
        }

        // Validate email
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email";
            valid = false;
        }

        // Validate password
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
            const response = await signupUser({ username, full_name, email, password });
            console.log("Signup Success:", response);
            navigate('/login');
        } catch (error: any) {
            console.error("Signup Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SignupFormStyled onSubmit={handleSubmit}>
            <h2>Create Your Profile</h2>

            <Input
                placeholder="User Name"
                className="textInput"
                mt="sm"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                error={errors.username}
            />
            <Input
                placeholder="Name"
                className="textInput"
                mt="sm"
                value={full_name}
                onChange={(e) => setFull_name(e.target.value)}
                error={errors.full_name}
            />

            <Input
                placeholder="Email"
                mt="sm"
                className="textInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
            />

            <PasswordInput
                placeholder="Password"
                visible={visible}
                onVisibilityChange={toggle}
                mt="sm"
                className="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
            />

            <SignupButtonStyle type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
            </SignupButtonStyle>

            <SignupOrDivStyle>
                <span></span>
                <p>or</p>
                <span></span>
            </SignupOrDivStyle>

            <SignupButtonStyle2>
                <FcGoogle />
                Google
            </SignupButtonStyle2>
        </SignupFormStyled>
    );
};

export default SignupFormStyle;
