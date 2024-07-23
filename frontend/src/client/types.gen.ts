// This file is auto-generated by @hey-api/openapi-ts

export type Body_login_login_access_token = {
    grant_type?: string | null;
    username: string;
    password: string;
    scope?: string;
    client_id?: string | null;
    client_secret?: string | null;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type ItemCreate = {
    title: string;
    description?: string | null;
    date_created?: string;
    date_modified?: string;
};

export type ItemPublic = {
    title: string;
    description?: string | null;
    date_created?: string;
    date_modified?: string;
    id: number;
    owner_id: number;
};

export type Token = {
    access_token: string;
    token_type?: string;
};

export type UserCreate = {
    name: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    password: string;
};

export type UserPublic = {
    name: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    id?: string;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type LoginLoginAccessTokenData = {
    formData: Body_login_login_access_token;
};

export type LoginLoginAccessTokenResponse = Token;

export type LoginTestTokenResponse = UserPublic;

export type UsersCreateUserData = {
    requestBody: UserCreate;
};

export type UsersCreateUserResponse = UserPublic;

export type UsersReadUserMeResponse = UserPublic;

export type ItemsCreateItemData = {
    requestBody: ItemCreate;
};

export type ItemsCreateItemResponse = ItemPublic;

export type UtilsHealthCheckResponse = unknown;

export type $OpenApiTs = {
    '/python/api/v1/login/access-token': {
        post: {
            req: LoginLoginAccessTokenData;
            res: {
                /**
                 * Successful Response
                 */
                200: Token;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/python/api/v1/login/test-token': {
        post: {
            res: {
                /**
                 * Successful Response
                 */
                200: UserPublic;
            };
        };
    };
    '/python/api/v1/users/': {
        post: {
            req: UsersCreateUserData;
            res: {
                /**
                 * Successful Response
                 */
                200: UserPublic;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/python/api/v1/users/me': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: UserPublic;
            };
        };
    };
    '/python/api/v1/items/': {
        post: {
            req: ItemsCreateItemData;
            res: {
                /**
                 * Successful Response
                 */
                200: ItemPublic;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/python/api/v1/utils/health': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: unknown;
            };
        };
    };
};