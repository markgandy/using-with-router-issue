import ActiveLink from "./ActiveLink";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("called constructor");
  }
  componentDidMount() {
    console.log("called componentDidMount");
  }

  render() {
    return (
      <div>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/error">Error</ActiveLink>
      </div>
    );
  }
}
