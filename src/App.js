// @flow
import React, { Component } from 'react';

import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
} from 'react-activity-feed';
import 'react-activity-feed/dist/index.es.css';

const apiKey = 'sesb46h7zb6p';
const appId = '66001';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmF0bWFuIn0.8aYd7O_fx-1YMx28DXG1n274o4pa3SjHnRM8AIHLqkE';

export default class App extends Component {
  containerRef = React.createRef();

  render() {
    return (
      <div
        ref={this.containerRef}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <StreamApp apiKey={apiKey} appId={appId} token={token}>
          <div
            style={{
              background: '#fff',
              height: 60,
              borderRadius: 4,
              margin: '10px 0',
              padding: '0 20px',
              boxShadow: '0px 0px 4px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <h3>React Activity Feed</h3>
            <NotificationDropdown arrow right />
          </div>
          <StatusUpdateForm />
          <FlatFeed
            feedGroup="timeline"
            notify
            options={{
              limit: 6,
            }}
            Activity={(activityProps) => (
              <Activity
                {...activityProps}
                Footer={() => (
                  <React.Fragment>
                    <CommentField
                      activity={activityProps.activity}
                      onAddReaction={activityProps.onAddReaction}
                    />
                    <CommentList
                      activityId={activityProps.activity.id}
                      CommentItem={(props) => (
                        <React.Fragment>
                          <CommentItem {...props} />
                          <LikeButton
                            reaction={props.comment}
                            {...activityProps}
                          />
                        </React.Fragment>
                      )}
                    />
                  </React.Fragment>
                )}
              />
            )}
          />
        </StreamApp>
      </div>
    );
  }
}
