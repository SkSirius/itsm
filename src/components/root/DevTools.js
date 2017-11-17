import React from "react";
import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

const EmptyComponent = () => (<div className="empty" />);

let DevTools = <EmptyComponent />;

if (process.env.NODE_ENV === "development") {
    DevTools = (
        <DockMonitor
            toggleVisibilityKey="ctrl-h"
            changePositionKey="ctrl-w"
            defaultIsVisible={false}
        >
            <LogMonitor />
        </DockMonitor>
    );
}

const tools = createDevTools(DevTools);
export default tools;
