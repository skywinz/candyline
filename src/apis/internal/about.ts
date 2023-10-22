export const getAbout = async (host: string, cache: RequestCache): Promise<string> => {
    const res = await fetch(`${host}/api/about`, { cache });
    const data = await res.json();
    return data.content;
}
