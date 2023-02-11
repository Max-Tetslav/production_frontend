import { cn } from '../classnames';

describe('classnames helper', () => {
    test('one class as string', () => {
        expect(cn('class')).toBe('class');
    });

    test('few strings', () => {
        expect(cn('first', 'second')).toBe('first second');
    });

    test('wrong arguments', () => {
        expect(cn(undefined, 'second', undefined)).toBe('second');
    });

    test('expect empty line', () => {
        expect(cn(undefined)).toBe('');
    });

    test('mods', () => {
        expect(cn('first', { second: false, third: true })).toBe('first third');
    });

    test('mods expect to fail', () => {
        expect(cn('first', { second: true, third: true })).not.toBe(
            'first third'
        );
    });
});
