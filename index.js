"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const const_1 = require("./type/const");
const promises_1 = require("fs/promises");
const textToSpeech = (data_1, ...args_1) => __awaiter(void 0, [data_1, ...args_1], void 0, function* (data, outputPath = "example.mp3") {
    const response = yield axios_1.default.post(const_1.URL_CLOUD, data);
    const audioBuffer = Buffer.from(response.data.audioContent, "base64");
    yield (0, promises_1.writeFile)(outputPath, audioBuffer);
    console.log(`-- File mp3 is saved at ${outputPath}`);
    return true;
});
exports.default = textToSpeech;
