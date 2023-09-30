import {headers} from 'next/headers';

export const getPostDetail = async (id: string, componentType): Promise<object> => {
    const host = headers().get('host');
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    const res = await fetch(`${protocol}://${host}/api/posts/${id}`, {cache: componentType});
    const statusCode = res.status;

    if (res.ok) {
        const data = await res.json();
        return { data, statusCode }
    } else {
        return { statusCode }
    }
}