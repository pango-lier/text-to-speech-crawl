export interface InputData {
  input: InputText;
  voice: VoiceConfig;
  audioConfig: AudioConfig;
}

export interface InputText {
  text: string;
}

export enum SsmlVoiceGender {
  SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED",
  MALE = "MALE",
  FEMALE = "FEMALE",
  NEUTRAL = "NEUTRAL",
}

export interface VoiceConfig {
  languageCode: string;
  name: string;
  ssmlGender?: SsmlVoiceGender;
  customVoice?: any;
}

export enum DeviceClass {
  WEARABLE_CLASS_DEVICE = "wearable-class-device",
  HANDSET_CLASS_DEVICE = "handset-class-device",
  HEADPHONE_CLASS_DEVICE = "headphone-class-device",
  SMALL_BLUETOOTH_SPEAKER_CLASS_DEVICE = "small-bluetooth-speaker-class-device",
  MEDIUM_BLUETOOTH_SPEAKER_CLASS_DEVICE = "medium-bluetooth-speaker-class-device",
  LARGE_HOME_ENTERTAINMENT_CLASS_DEVICE = "large-home-entertainment-class-device",
  LARGE_AUTOMOTIVE_CLASS_DEVICE = "large-automotive-class-device",
  TELEPHONY_CLASS_APPLICATION = "telephony-class-application",
}
export interface AudioConfig {
  audioEncoding: string;
  pitch: number;
  speakingRate: number;
  volumeGainDb?: number;
  sampleRateHertz?: number;
  effectsProfileId: DeviceClass[];
}
