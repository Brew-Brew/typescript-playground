import * as React from "react";

interface Props {
  userName: string;
  onChange: (event) => void;
}

export const NameEditComponent = (props: Props) => (
  <React.Fragment>
    <label>Update name:</label>
    <input value={props.userName} onChange={props.onChange} />
  </React.Fragment>
);
