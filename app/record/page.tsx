
'use client'
import { AudioRecorder } from "react-audio-voice-recorder";

const Page = () => {
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        // downloadOnSavePress={true}
        downloadFileExtension="mp3"
      />
    </div>
  );
};

export default Page;
