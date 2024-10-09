export interface InputData {
  input: InputText;
  voice: VoiceConfig;
  audioConfig: AudioConfig;
}

export interface InputText {
  text: string;
}

export interface VoiceConfig {
  languageCode: string;
  name: string;
}

export interface AudioConfig {
  audioEncoding: string;
  pitch: number;
  speakingRate: number;
  effectsProfileId: string[];
}
