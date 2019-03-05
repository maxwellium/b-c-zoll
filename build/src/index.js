"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AJV = require("ajv");
const noop = (data) => data;
function zoll(schema) {
    if (schema) {
        const validate = AJV().compile(schema);
        return (data) => {
            const valid = validate(data);
            if (!valid) {
                throw {
                    validation: validate.errors,
                    statusCode: 400
                };
            }
            return data;
        };
    }
    return noop;
}
exports.zoll = zoll;
//# sourceMappingURL=index.js.map