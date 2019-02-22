import React, { Component } from "react";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";
import Upload from "./components/upload";
import FileList from "./components/file-list";

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Content>
          <Upload />
          <FileList />
        </Content>
      </Container>
    );
  }
}

export default App;
