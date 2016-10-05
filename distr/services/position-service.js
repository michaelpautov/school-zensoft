define(["require", "exports", './store', '../models/position'], function (require, exports, store_1, position_1) {
    "use strict";
    const PositionStore = new store_1.default();
    class PositionService {
        static create(quote, name) {
            return new position_1.default(quote, name);
        }
        static add(model) {
            PositionStore.add(model);
        }
        static getStore() {
            return PositionStore;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PositionService;
});
