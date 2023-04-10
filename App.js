import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import YoutubePlayer from "./MyYoutubePlayer";
import Timer from "./Timer";
 

export default function App() {
  const [playing, setPlaying] = useState('false');
  const [duration, setDuration] = useState(59);
  const playlistId = "RDGMEMYH9CUrFO7CfLJpaD7UR85wVMCg-4ZHI93WI"

  const handleStateChange = status => {
   setPlayerStatus(status);
 };

  const minutesChange = value => {
   const minutes = parseInt(value)
   const seconds = duration % 60
   const newDuration = minutes * 60 + seconds;
   setDuration (newDuration)
}

  const secondsChange = value => {
   const minutes = Math.floor(duration / 60)
   const seconds = parseInt(value)
   const newDuration = minutes * 60 + seconds;
   setDuration (newDuration)
}

  const playerRestart = () => {
   setPlaying('playing');
}

  return (
    <View>
     <YoutubePlayer playlistId ={playlistId} />
       <View style={{flex: 1, alightItems: 'center', justifyContent: 'center'}}>
         <View style ={{flexDirection: 'row'}}>
           <TextInput
             style={{ height: 30, width: 30, marginBottom: 30, textAlign: 'center'}}
             keyboardType='numeric'
             maxLength = {2}
             placeholder = "MM"
             onChangeText={minutesChange}
           />
         <Text style={{fontSize: 24, marginBottom: 20}}>:</Text>
           <TextInput
             style={{ height: 30, width: 30, marginBottom: 30, textAlign: 'center'}}
             keyboardType='numeric'
             maxLength = {2}
             placeholder = "SS"
             onChangeText={secondsChange}
           />
          </View>
          <Timer duration={duration} playing={playing} playerRestart={playerRestart} />     
      </View>
    </View>
  );
}
