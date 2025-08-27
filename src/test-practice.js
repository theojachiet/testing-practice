export function capitalize(str) {
    if (typeof str != 'string') {
        throw new Error('Parameter of capitalize function must be a string'); 
    }
    return str[0].toUpperCase() + str.slice(1);
}