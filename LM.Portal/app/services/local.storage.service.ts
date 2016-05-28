export class LocalStorageService {
    static getItem(name) {
        var item: string = localStorage.getItem(name);

        try {
            return JSON.parse(item);
        } catch (e) {
            return item;
        }
    }

    static setItem(name, value) {
        if (typeof value === 'object' || typeof value === 'array') {
            value = JSON.stringify(value);
        }

        localStorage.setItem(name, value);
    }

    static removeItem(name) {
        localStorage.removeItem(name);
    }
}