"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from "./retangulos";
// import { areaCircunferencia } from "./circunferencia";
const circunferencia_1 = require("./circunferencia");
const retangulos_1 = __importDefault(require("./retangulos"));
console.log((0, circunferencia_1.areaCircunferencia)(7));
console.log((0, retangulos_1.default)(7, 2));
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map