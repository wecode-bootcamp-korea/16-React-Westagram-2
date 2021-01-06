import React from "react";
import { Nav } from "../../../Components/jinyounglim/Nav/Nav";
import { Story } from "../../../Components/jinyounglim/Story/Story";
import { Feeds } from "../../../Components/jinyounglim/Feeds/Feeds";
import { FeedsRight } from "../../../Components/jinyounglim/FeedsRight/FeedsRight";
import { Footer } from "../../../Components/jinyounglim/Footer/Footer";
import "./Main.scss";

export class MainLim extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Nav></Nav>
        </nav>
        <main>
          <Story></Story>
          <Feeds></Feeds>
          <FeedsRight></FeedsRight>
          <Footer></Footer>
        </main>
      </>
    );
  }
}

export default MainLim;
