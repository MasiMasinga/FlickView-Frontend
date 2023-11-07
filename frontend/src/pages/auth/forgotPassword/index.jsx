import React from 'react'

// Mui
import Stack from '@mui/material/Stack';

// Hooks
import useAuth from '../../../common/hooks/useAuth'

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Navbar from '../../home/components/Navbar'
import InputField from '../../../common/components/InputField';
import Button from '../../../common/components/Button';
import ContentBlock from '../../../common/components/ContentBlock';
import Typography from '../../../common/components/Typography';

// Utils
import { Colors } from '../../../common/utils/constants';
import { ValidationMessages } from '../../../common/utils/constants';
import { isValidEmail } from '../../../common/utils/validations';


const ForgotPassword = () => {
    const { forgotPassword, loading } = useAuth();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        forgotPassword(data)
    });

    return (
        <>
            <Navbar />
            <Stack sx={{
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
                            Forgot your password?
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color={Colors.primary}
                        >
                            Enter your email and we'll send you reset instructions.
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
                        <Button type="submit" isLoading={loading}>
                            Send reset instructions
                        </Button>
                    </Stack>
                </ContentBlock>
            </Stack>

        </>
    )
}

export default ForgotPassword