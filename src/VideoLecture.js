import React, { Component } from "react";
import PropTypes from "prop-types";
import "./VideoLecture.css";
import Talk from "talkjs";

class VideoLecture extends Component {
  constructor(props) {
    super(props);
    this.id = localStorage.getItem("id");
    this.userName = localStorage.getItem("name");
    this.emailId = localStorage.getItem("email");
    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: this.id,
          name: this.userName,
          email: this.emailId,
          photoUrl: `https://randomuser.me/api/portraits/men/${this.id}.jpg`,
          role: "default",
        });
        const other = new Talk.User({
          id: "1",
          name: "Prof. George Larry",
          email: "george@larry.net",
          photoUrl: "https://randomuser.me/api/portraits/men/83.jpg",
          role: "default",
        });
        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "YOUR_APP_ID_HERE",
            me: me,
          });
        }
        const conversation = window.talkSession.getOrCreateConversation("999");
        conversation.setAttributes({
          subject: "Robotics: 101"
        });
        conversation.setParticipant(me);
        conversation.setParticipant(other);
        this.chatbox = window.talkSession.createChatbox();
        this.chatbox.select(conversation);
        this.chatbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  componentWillUnmount() {
    if (this.chatbox) {
      this.chatbox.destroy();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="heading">Robotics 101: Live Lecture</h1>
        </div>
        <div className="flex-container">
          <div className="flex-child">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/dWBFGglu7qQ`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div
            className="talk-js-chatbox flex-child"
            ref={(c) => (this.container = c)}
          ></div>
        </div>
      </div>
    );
  }
}
export default VideoLecture;
