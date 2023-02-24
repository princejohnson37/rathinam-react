import logo from "./logo.svg";
import "./App.css";
import Part1 from "./components/part1/Part1";
import Part2 from "./components/part2/Part2";
import Part3 from "./components/part3/Part3";
import Part4 from "./components/part4/Part4";
import Part5 from "./components/part5/Part5";
import ResponsiveAppBar from "./components/header/AppBar/AppBar";
import { Container, Stack } from "@mui/material";
import './static/styles/Typography.scss';

function App() {
  return (
    <Stack>
      {/* <header className="App-header"></header> */}
      <Container maxWidth="xl">
        <ResponsiveAppBar />
      </Container>
      <div>
        <Container maxWidth="xl" className="home-page-content-container">
          <Part1 />
          <Part2 />
          <Part3 />
          <Part4 />
          <Part5 />
        </Container>
      </div>
    </Stack>
  );
}

export default App;
