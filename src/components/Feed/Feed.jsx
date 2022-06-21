import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed(props) {
  return (
    <div className="col feed">
      <TweetBox {...props} />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {props.tweets.map((tweet, index) => {
          return (
            <React.Fragment key={index}>
              <Tweet tweet={tweet} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
