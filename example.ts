import path from "path";
import textToSpeech from ".";

const b = async () => {
  try {
    console.log("----------Start convert to mp3");
    const response = await textToSpeech(
      {
        input: {
          text: "IThey're like time machines taking you to different worlds and landscapes, and um, and I just can't get enough of it.",
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
      path.join(__dirname, "example.mp3")
    );
    console.log("----------Completed");
  } catch (error) {
    console.log(error);
  }
};

b();
