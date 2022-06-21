import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  const handleOnTweetTextChange = (e) => {
    props.setTweetText(e.target.value);
  };

  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };
    props.setTweets((prev) => [...prev, newTweet]);

    // Refresh
    props.setTweetText("");
  };

  return (
    <div className="tweet-box">
      <TweetInput
        handleOnChange={handleOnTweetTextChange}
        value={props.tweetText}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        {props.tweetText.length > 0 && (
          <TweetCharacterCount tweetText={props.tweetText} />
        )}
        <TweetSubmitButton
          tweetText={props.tweetText}
          handleOnSubmit={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  return (
    <span
      className={`tweet-length ${140 - props.tweetText.length < 0 && "red"}`}
    >
      {140 - props.tweetText.length}
    </span>
  );
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        disabled={
          props.tweetText != undefined &&
          (props.tweetText.length == 0 || props.tweetText.length > 140)
        }
        onClick={props.handleOnSubmit}
        className="tweet-submit-button"
      >
        Tweet
      </button>
    </div>
  );
}
