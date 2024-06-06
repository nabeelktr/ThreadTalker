export interface ItokenOptions {
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite?: "lax" | "strict" | "none" | undefined;
    secure?: boolean;
    domain?: string;
}