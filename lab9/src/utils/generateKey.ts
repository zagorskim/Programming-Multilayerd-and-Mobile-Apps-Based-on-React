export const generateKey = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const length = 24;

    var res = '';
    for(let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}