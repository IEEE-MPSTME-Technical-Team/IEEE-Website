import Booklet from "booklet-react-component";
// import "./booklet.css";
import React, { useState, Component } from "react";

class UsingBookletComponent extends Component {
  constructor() {
    super();
    this.state = {
      index: 1,
      flipPageIndex: 1
    };
  }
  genNextPages = () => {
    this.setState({
      index: this.state.index + 2
    });
  };
  genPrevPages = () => {
    this.setState({
      index: this.state.index - 2
    });
  };
  flipPageIndexForward = () => {
    this.setState({
      flipPageIndex: this.state.flipPageIndex + 1
    });
  };
  flipPageIndexBack = () => {
    this.setState({
      flipPageIndex: this.state.flipPageIndex - 1
    });
  };
  render() {
    return (
      <div id="eve" className="pokemon__img whole">
        <Booklet
          flipPageIndex={this.state.flipPageIndex}
          index={this.state.index}
          nextPage={this.genNextPages}
          prevPage={this.genPrevPages}
          pages={[
            <div> Ele 0</div>,
            <div> Ele 1</div>,
            <div> Ele 2</div>,
            <div> Ele 3</div>,
            <div> Ele 4</div>,
            <div> Ele 5</div>,
            <div> Ele 6</div>
          ]}
        />

        <div className="button-container" style={{ width: "max-content",margin: "20px auto" }}>
          <button className="btn" onClick={this.flipPageIndexBack} style={{margin: "20px"}}>
            Prev
          </button>
          <button className="btn" onClick={this.flipPageIndexForward} style={{margin: "20px"}}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default UsingBookletComponent;
