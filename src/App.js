import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import QuoteArr from "./QuoteFile";
import Colors from "./Colors";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      quotes: [...QuoteArr],
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    const quotes = this.state.quotes;
    const num = Math.floor(quotes.length * Math.random());

    this.setState({
      num,
    });
  }

  render() {
    const quotes = this.state.quotes;
    const num = this.state.num;
    const quoteObj = quotes[num];
    const color = Colors[num];

    return (
      <section style={{ backgroundColor: color }}>
        <div id="quote-box">
          <p id="text" style={{ color: color }}>
            "{quoteObj.quote}"
          </p>
          <cite id="author" style={{ color: color }}>
            -{quoteObj.author}
          </cite>
          <br />
          <div id="btns-div">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              <FontAwesomeIcon
                style={{ color: color }}
                icon={faTwitterSquare}
              />
            </a>
            <button
              style={{ backgroundColor: color }}
              onClick={this.getNewQuote}
              id="new-quote"
            >
              New Quote
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
