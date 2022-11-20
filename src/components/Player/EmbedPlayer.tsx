import React from "react";
import { VideoContainer } from "./styles";

type VideoProps = {
  id: string;
};

const EmbedPlayer: React.FC<VideoProps> = ({ id }) => (
  <VideoContainer>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded Youtube"
    />
  </VideoContainer>
);

export default EmbedPlayer;
