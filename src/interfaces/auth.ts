export interface IAuth {
    accessToken: string | null;
    expires: number | null;
    refreshToken: string | null;
}

export interface IUser {
    created_at: string | null;
    email: string | null;
    id: number | null;
    updated_at: string | null;
    user_type: string | null;
    token: IAuth;
    phone_number: string | number;
    password: string;
    first_name: string;
    last_name: string;
    avatar: any;
    active: boolean;
    code: string;
    verify_code_expire: string;
    role: string;
}

export interface ILogin {
    email: string;
    password: string;
    role: string;
    remember_me?: boolean;
}

export interface IForgotPassword {
    email: string;
}

export interface IVerifyCode {
    email?: string;
    code: string;
}

export interface IResetPassword {
    password: string;
    confirm_password: string;
    email: string;
    code?: string;
}

export interface IChangePassword {
    password: string;
    newPassword: string;
    confirmPassword: string;
}
