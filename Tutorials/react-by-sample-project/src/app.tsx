import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";
import { SidebarComponent } from "./sidebar";
import { MembersTableComponent } from "./membersTable";

interface Props {}

interface State {
  userName: string;
  editingUserName: string;
  isSidebarVisible: boolean;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const defaultUserName = "defaultUserName";
    this.state = {
      userName: defaultUserName,
      editingUserName: defaultUserName,
      isSidebarVisible: false
    };
  }
  toggleSidebarVisibility = () => {
    const newVisibleState = !this.state.isSidebarVisible;
    this.setState({ isSidebarVisible: newVisibleState });
  };

  setUsernameState = () => {
    this.setState({ userName: this.state.editingUserName });
  };

  updateEditingName = (editingName: string): void => {
    this.setState({ editingUserName: editingName });
  };

  public render() {
    return (
      <>
        <SidebarComponent isVisible={this.state.isSidebarVisible}>
          <h1>Cool Scfi movies</h1>
          <ul>
            <li>
              <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
            </li>
            <li>
              <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
            </li>
            <li>
              <a href="https://www.imdb.com/title/tt0062622/">
                2001: a space odyssey
              </a>
            </li>
          </ul>
        </SidebarComponent>
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent
          disable={
            !this.state.userName ||
            this.state.userName === this.state.editingUserName ||
            this.state.editingUserName === ""
          }
          userName={this.state.userName}
          editingUserName={this.state.editingUserName}
          onEditingNameUpdated={this.updateEditingName}
          onNameUpdateRequest={this.setUsernameState}
        />
        <MembersTableComponent />
        <div style={{ float: "right" }}>
          <button onClick={this.toggleSidebarVisibility}>Toggle Sidebar</button>
        </div>
      </>
    );
  }
}
