
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Audio, InterruptionModeAndroid } from "expo-av";

const Timer = ({duration, playerStatus, playerRestart}) => {
   const [timeRemaining, setTimeRemaining] = useState(duration);
   const [isWorking, setIsWorking] = useState(true);
   const [playingAlarm, setPlayingAlarm] = useState(null);

   useEffect(() => {
    const setAudioMode = async () => {
     await Audio.setAudioModeAsync({
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      shouldDuckAndroid: true,
      stayActiveInBackground: true,
      playThroughEarpieceAndroid: false,
    });
   }
 
   setAudioMode();

   const soundPlayer = new Audio.Sound();
   soundPlayer.loadAsync(require("./Alarm.mp3"));

   return () => {
     if (soundPlayer) {
      soundPlayer.unloadAsync();
     }
   };
}, []);

useEffect(() => {
   let interval;
   if (isWorking && timeRemaining > 0) {
         interval = setInterval(()=> {
           setTimeRemaining((prevtime) => prevtime -1);
   }, 1000);
  } else if(timeRemaining === 0 && playingAlarm !== null) {
     setIsWorking(false);
     alarmPlayer
        .replayAsync()
        .then(()=> {
           playerRestart();
        }, 3000);
    }
    return () => clearInterval(interval);
   }, [isWorking, timeRemaining, playingAlarm]);
   
const timerToggle = () => {
     setIsWorking((prevIsWorking) => !prevIsWorking);
};

const restartTimer = () => {
   setTimeRemaining(duration);
   setIsWorking(true);
};

const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, "00");
const seconds = Math.floor(timeRemaining % 60).toString().padStart(2, "00");

 return(
   <>
      <Text style={{ fontSize: 30}}>
        {minutes} : {seconds}
      </Text>
      {timeRemaining > 0 && (
        <TouchableOpacity onPress={timerToggle}>
         <Text style={{fontSize: 30}}>
          {isWorking ? 'Pause' : 'Start'}
         </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={restartTimer}>
         <Text style={{fontSize: 30}}>
           Restart
         </Text>
      </TouchableOpacity>
  </>
 )
}

export default Timer;