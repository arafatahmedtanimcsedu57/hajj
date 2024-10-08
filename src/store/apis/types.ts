export interface GenericResponse {
  status: string;
  message: string;
}

export interface IResetPasswordRequest {
  resetToken: string;
  password: string;
  passwordConfirm: string;
}

export interface IUserRequest {
  email: string;
  password: string;
}

export interface IUser {
  refresh?: string | null;
  access?: string | null;
}
