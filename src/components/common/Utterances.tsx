'use client';

import useTheme from "@/hooks/useTheme";

const Utterances = () => {
    const { theme } = useTheme();

    return (
        <section
            style={{ width: '100%'}}
            ref={(element) => {
                if (!element) {
                    return;
                }
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
                scriptElement.setAttribute('repo', 'skywinz/dev-blog');
                scriptElement.setAttribute('issue-term', 'pathname');
                scriptElement.setAttribute('theme', `github-${theme}`);
                scriptElement.setAttribute('crossorigin', 'anonymous');
                scriptElement.setAttribute('async', 'true');
                element.replaceChildren(scriptElement);
            }}
        >
        </section>
    );
}

export default Utterances;