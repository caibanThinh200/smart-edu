"use client";
import axios from "axios";
import { AudioRecorder } from "react-audio-voice-recorder";
import { SpeechToTextComponent } from "../components/SpeechToText";

const Page = () => {
  const addAudioElement = async (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);

    const file = new File([blob], `${blob.name}`);
    const formData = new FormData();
    formData.append("blob", file, `${blob.name}`);

    axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      {/* <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        // downloadOnSavePress={true}
        downloadFileExtension="mp3"
      /> */}
      <SpeechToTextComponent />
    </div>
  );
};

export default Page;
