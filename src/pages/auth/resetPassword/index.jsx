import React, { useEffect } from 'react'

// React Router Dom
import { useParams } from 'react-router-dom';

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


const ResetPassword = () => {
    const { token } = useParams();
    const { resetPassword, loading } = useAuth();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            new_password: "",
            confirm_new_password: "",
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        resetPassword(data)
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
                            Reset Password
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color={Colors.primary}
                        >
                            Enter your new password
                        </Typography>
                        <Controller
                            name="new_password"
                            control={control}
                            rules={{
                                required: ValidationMessages.required,
                                validate: (value) => value.length >= 6 ||
                                    ValidationMessages.passwordTooShort,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <InputField
                                    label="New Password"
                                    error={error}
                                    {...field}
                                />
                            )
                            }
                        />
                        <Controller
                            name="confirm_new_password"
                            control={control}
                            rules={{
                                required: ValidationMessages.required,
                                validate: (value) =>
                                    value === watch("new_password") ||
                                    ValidationMessages.passwordNotMatch,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <InputField
                                    label="Confirm New Password"
                                    error={error}
                                    {...field}
                                />
                            )}
                        />
                        <Button type="submit" isLoading={loading}>
                            Reset Password
                        </Button>
                    </Stack>
                </ContentBlock>
            </Stack>
        </>
    )
}

export default ResetPassword