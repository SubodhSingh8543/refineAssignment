import React from "react";

type TTabPanelProps = {
    isActive: Boolean;
    children: JSX.Element;
};

export const TabPanel = ({ isActive, children }: TTabPanelProps) => {
    return isActive ? <div className="mx-auto py-6"  style={{border:"5px solid yellow"}}>{children}</div> : null;
};
