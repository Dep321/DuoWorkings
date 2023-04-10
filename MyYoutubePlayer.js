
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback, useRef } from "react";

const MyYoutubePlayer = ({playlistId}) => {

  return (
   <View>
   <YoutubePlayer
        height={300}
        play={"playing"}
        playList={playlistId}
      />
     </View>
  );
};

export default MyYoutubePlayer;