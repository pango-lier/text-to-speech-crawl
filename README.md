# text-to-speech-crawl

## How to Work

### 1. Crawl Content from Google Cloud Text-to-Speech API

This project allows you to convert text into speech by sending requests to the [Google Cloud Text-to-Speech API](https://cloud.google.com/text-to-speech).

\*Note :

- If you encounter a "bad request" or authentication error, you should create and obtain a token from Google Cloud Text-to-Speech.

### 2. Convert Content to MP3

The returned audio content is in base64 format, which is then converted and saved as an MP3 file.

## Example Usage

```typescript
import path from "path";
import textToSpeech from "text-to-speech-crawl";

export const exampleTextToSpeech = async () => {
  try {
    const response = await textToSpeech(
      {
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
      },
      path.join(__dirname, `example${new Date().getTime()}.mp3`)
    );
    console.log("Audio saved successfully.");
  } catch (error) {
    console.error("Error converting text to speech:", error);
  }
};
```

## How to config ,detail here https://cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize

### 2. voice ,detail here https://cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesizeConfig#VoiceSelectionParams

1. Supported voices and languages https://cloud.google.com/text-to-speech/docs/voices
2. Enter void to voice.

### 3. audioConfig https://cloud.google.com/text-to-speech/docs/reference/rest/v1/AudioConfig

1. pitch : from -20 to 20
2. speakingRate : from 0.25 to 4
3. effectsProfileId : https://cloud.google.com/text-to-speech/docs/audio-profiles

wearable-class-device Smart watches and other wearables, like Apple Watch, Wear OS watch
handset-class-device Smartphones, like Google Pixel, Samsung Galaxy, Apple iPhone
headphone-class-device Earbuds or headphones for audio playback, like Sennheiser headphones
small-bluetooth-speaker-class-device Small home speakers, like Google Home Mini
medium-bluetooth-speaker-class-device Smart home speakers, like Google Home
large-home-entertainment-class-device Home entertainment systems or smart TVs, like Google Home Max, LG TV
large-automotive-class-device Car speakers
telephony-class-application Interactive Voice Response (IVR) systems
