export type TModsList = Record<string, unknown>;

const classnames = (...classes: Array<string | TModsList>): string => {
    const list: string[] = [];

    classes.forEach((item) => {
        if (
            (typeof item !== 'string' && typeof item !== 'object')
      || item === null
        ) {
            return;
        }

        if (typeof item === 'string') {
            list.push(item);
        } else {
            const listFromMods = Object.entries(item)
                .filter(([_, value]) => Boolean(value))
                .map(([className]) => className);

            list.push(...listFromMods);
        }
    });

    return list.join(' ');
};

export { classnames as cn };
