import React, { Component } from "react";
import Header from "./Header";
import Post from "./Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          user: "Diego Schell Fernandes",
          time: "há 3 min",
          desc:
            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus."
        },
        {
          user: "Rubia Savolksi ",
          time: "há 10 min",
          desc:
            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. "
        },
        {
          user: "Mr. Mustache ",
          time: "há 20 min",
          desc:
            "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum."
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.posts.map(e => (
          <Post post={e} />
        ))}
      </div>
    );
  }
}

export default App;
