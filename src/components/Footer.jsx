import "../index.css";

function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      <p>&copy;{date.getFullYear()}</p>
    </div>
  );
}
export default Footer;
