interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    balance?: string;
    password?: string
    avatar: string;
    phone: string;
    is_staff: string;
    is_active: string;
    is_superuser: string;
    is_seller?: boolean;
}


export {type User}