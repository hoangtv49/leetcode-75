function mergeAlternately(word1: string, word2: string): string {
    let r = '';
    const a1: string[] = word1.split('');
    const a2: string[] = word2.split('');

    do {
        if (a1.length > 0) r += a1.shift()

        if (a2.length > 0) r += a2.shift()

    } while (a1.length > 0 || a2.length > 0)

    return r;
};