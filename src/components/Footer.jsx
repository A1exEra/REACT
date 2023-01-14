import "../index.css";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>God Of Code &copy;{date.getFullYear()}</p>
    </footer>
  );
}
export default Footer;
