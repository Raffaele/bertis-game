import './Main.css';
import numbers from './numbers.json';

function Main(props) {
    const numbersToShow = numbers.slice(0, props.toShow);
    return <main>
        {numbersToShow.map((num, id) => {
            return <div key={id} className="main__number">{num}</div>;
        })}
    </main>;
}

export default Main;