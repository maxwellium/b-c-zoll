"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AJV = require("ajv");
function zoll(schema) {
    if (schema) {
        const validate = AJV().compile(schema);
        return (data) => {
            const valid = validate(data);
            if (!valid) {
                throw validate.errors;
            }
        };
    }
    return () => { };
}
exports.default = zoll;
//# sourceMappingURL=index.js.map