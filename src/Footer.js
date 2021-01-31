import './Footer.css';

function Footer(props) {
    return <footer>
        <button onClick={props.onReset} className="footer-btn footer-reset-btn">
            <span>+</span>
        </button>
      <button onClick={props.onIncrement} className="footer-btn">+</button>
    </footer>;
}

export default Footer;