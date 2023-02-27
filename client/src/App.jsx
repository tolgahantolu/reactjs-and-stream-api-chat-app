import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer, Auth } from "./components";
import "./App.css";

const cookies = new Cookies();

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

const client = StreamChat.getInstance(apiKey);

//const authToken = false;
const authToken = cookies.get("token");

// create a user
if (authToken) {
  client.connectUser(
    {
      //  userId: cookies.get("userId"),
      id: cookies.get("userId"),
      //  username: cookies.get("username"),
      name: cookies.get("username"),
      //avatarURL: cookies.get("avatarURL"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      //token: cookies.get("token"), // ?token is already exist on the top (authToken)
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
