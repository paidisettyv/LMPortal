System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorageService;
    return {
        setters:[],
        execute: function() {
            LocalStorageService = (function () {
                function LocalStorageService() {
                }
                LocalStorageService.getItem = function (name) {
                    var item = localStorage.getItem(name);
                    try {
                        return JSON.parse(item);
                    }
                    catch (e) {
                        return item;
                    }
                };
                LocalStorageService.setItem = function (name, value) {
                    if (typeof value === 'object' || typeof value === 'array') {
                        value = JSON.stringify(value);
                    }
                    localStorage.setItem(name, value);
                };
                LocalStorageService.removeItem = function (name) {
                    localStorage.removeItem(name);
                };
                return LocalStorageService;
            }());
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});
//# sourceMappingURL=local.storage.service.js.map