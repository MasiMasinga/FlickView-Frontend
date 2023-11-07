import React from 'react'

// Mui 
import Stack from '@mui/material/Stack';

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

const Register = () => {
    const { register, loading } = useAuth();
    const { control, watch, handleSubmit } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        register(data)
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
                            Create an account
                        </Typography>
                        <Controller
                            name="first_name"
                            control={control}
                            rules={{
                                required: ValidationMessages.required,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <InputField
                                    label="First Name"
                                    error={error}
                                    {...field}
                                />
                            )
                            }
                        />
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
                        <Controller
                            name="confirm_password"
                            control={control}
                            rules={{
                                required: ValidationMessages.required,
                                validate: (value) =>
                                    value === watch("password") ||
                                    ValidationMessages.passwordNotMatch,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <InputField
                                    label="Confirm Password"
                                    error={error}
                                    {...field}
                                />
                            )}
                        />
                        <Button type="submit" isLoading={loading}>
                            Register
                        </Button>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Typography bold variant="h6" color={Colors.primary}>
                                Already have an account?
                            </Typography>
                            <Button
                                variant='plain'
                                size="large"
                                href="/login"
                            >
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </ContentBlock>
            </Stack>
        </>
    )
}

export default Register