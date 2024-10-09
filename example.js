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
exports.exampleTextToSpeech = void 0;
const path_1 = __importDefault(require("path"));
const text_to_speech_crawl_1 = __importDefault(require("text-to-speech-crawl"));
const exampleTextToSpeech = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("----------Start convert to mp3");
        const response = yield (0, text_to_speech_crawl_1.default)({
            input: {
                text: "They're like time machines taking you to different worlds and landscapes, and um, and I just can't get enough of it.",
            },
            voice: {
                languageCode: "en-US",
                name: "en-US-Journey-F",
            },
            audioConfig: {
                audioEncoding: "LINEAR16",
                pitch: 0,
                speakingRate: 0,
                effectsProfileId: ["small-bluetooth-speaker-class-device"],
            },
        }, path_1.default.join(__dirname, `example${new Date().getTime()}.mp3`));
    }
    catch (error) {
        console.log(error);
    }
});
exports.exampleTextToSpeech = exampleTextToSpeech;
(0, exports.exampleTextToSpeech)();
