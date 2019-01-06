import * as React from "react";

interface Props {
  editingUserName: string;
  onEditingNameUpdated: (newEditingName: string) => void;
  onNameUpdateRequest: () => void;
}

export const NameEditComponent = (props: Props) => (
  <div>
    <label>Update Name:</label>
    <input
      value={props.editingUserName}
      onChange={(e): void =>
        props.onEditingNameUpdated((e.target as HTMLInputElement).value)
      }
    />

    <button onClick={props.onNameUpdateRequest}>Change</button>
  </div>
);
