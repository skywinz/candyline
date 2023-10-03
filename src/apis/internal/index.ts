import {headers} from 'next/headers';

export const getInternalAPIHost = (): string => {
    const host = headers().get('host');
    const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https'
    return `${protocol}://${host}`;
}
