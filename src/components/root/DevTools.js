import React, { Component } from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

class EmptyComponent extends Component {
    render() {
      return (
        <div className="empty"></div>
      );
    }
}

let DevTools = createDevTools(<EmptyComponent></EmptyComponent>);

if (process.env.NODE_ENV === 'development') {
    DevTools = createDevTools(
        <DockMonitor toggleVisibilityKey="ctrl-h"
                    changePositionKey="ctrl-w"
                    defaultIsVisible={false}>
            <LogMonitor />
        </DockMonitor>
    );
}

export default DevTools;

