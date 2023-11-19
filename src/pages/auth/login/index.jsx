import React from 'react'

// Mui
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

// Hooks
import useAuth from '../../../common/hooks/useAuth'

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Navbar from '../../../pages/home/components/Navbar';
import InputField from '../../../common/components/InputField';
import Button from '../../../common/components/Button';
import ContentBlock from '../../../common/components/ContentBlock';
import Typography from '../../../common/components/Typography';

// Utils
import { Colors } from '../../../common/utils/constants';
import { ValidationMessages } from '../../../common/utils/constants';
import { isValidEmail } from '../../../common/utils/validations';


const Login = () => {
    const { login, loading } = useAuth();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        login(data)
    });

    return (
        <>
            <Navbar />
            <Stack
                sx={{
                    py: 4, 
                    px: {
                        xs: 5,
                        sm: 15,
                        md: 30,
                        lg: 56,
                        xl: 110,
                    }
                }}
            >
                <ContentBlock>
                    <Stack
                        component="form"
                        noValidate
                        onSubmit={onSubmit}
                        spacing={2}
                        sx={{ p: 3 }}
                    >
                        <Typography
                            bold
                            variant="subheader"
                            color={Colors.primary}
                        >
                            Log in to your account
                        </Typography>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: ValidationMessages.required,
                                validate: (value) =>
                                    isValidEmail(value) || ValidationMessages.invalidEmail,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <InputField
                                    label="Email Address"
                                    autoComplete="email"
                                    type="email"
                                    error={error}
                                    {...field}
                                />
                            )
                            }
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: ValidationMessages.required,
                                validate: (value) => value.length >= 6 ||
                                    ValidationMessages.passwordTooShort,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <InputField
                                    label="Password"
                                    error={error}
                                    {...field}
                                />
                            )
                            }
                        />
                        <Link href='/forgot-password' underline='none'>
                            <Typography
                                bold
                                variant="h6"
                                color={Colors.primary}
                                align='right'
                            >
                                Forgot password?
                            </Typography>
                        </Link>
                        <Button type="submit" isLoading={loading}>
                            Login
                        </Button>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Typography bold variant="h6" color={Colors.primary}>
                                Don't have an account?
                            </Typography>
                            <Button
                                variant='plain'
                                size="large"
                                href="/register"
                            >
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                </ContentBlock>
            </Stack>
        </>
    )
}

export default Login