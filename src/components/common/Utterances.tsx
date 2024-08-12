'use client';

import useThemeStatus from '@/stores/theme';

const Utterances = () => {
    const {type} = useThemeStatus();

    return (
        <section
            style={{ width: '100%'  }}
            ref={(element) => {
                if (!element) {
                    return;
                }
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
                scriptElement.setAttribute('repo', 'skywinz/dev-blog');
                scriptElement.setAttribute('issue-term', 'pathname');
                scriptElement.setAttribute('theme', `github-${type}`);
                scriptElement.setAttribute('crossorigin', 'anonymous');
                scriptElement.setAttribute('async', 'true');
                element.replaceChildren(scriptElement);
            }}
        >
        </section>
    );
}

export default Utterances;