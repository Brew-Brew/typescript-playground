import * as React from "react";

interface Props {
  disable: boolean;
  userName: string;
  editingUserName: string;
  onEditingNameUpdated: (newEditingName: string) => void;
  onNameUpdateRequest: () => void;
}

export const NameEditComponent: React.StatelessComponent<Props> = (
  props: Props
) => (
  <div>
    <label>Update Name:</label>
    <input
      value={props.editingUserName}
      onChange={(e): void =>
        props.onEditingNameUpdated((e.target as HTMLInputElement).value)
      }
    />

    <button
      className="btn btn-default"
      onClick={props.onNameUpdateRequest}
      disabled={props.disable}
    >
      Change
    </button>
  </div>
);
