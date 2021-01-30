import './Footer.css';

function Footer(props) {
    console.log('footer', props);
    return <footer>
      <button onClick={props.onReset} className="footer-btn">0</button>
      <button onClick={props.onIncrement} className="footer-btn">+</button>
    </footer>;
}

export default Footer;