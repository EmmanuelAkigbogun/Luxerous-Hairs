import Nav from "./Nav";
function Header({ bagBoolean }) {
  return (
    <>
      <header>
        <Nav bagBoolean={bagBoolean} />
      </header>
    </>
  );
}
export default Header;
