import './Main.css';

function Main(props) {
    const numbers = [
        1000,
        30,
        1000,
        30,
        1000,
        30,
        1000,
        10
    ];
    const numbersToShow = numbers.slice(0, props.toShow);
    return <main>
        {numbersToShow.map((num, id) => {
            return <div key={id} className="main__number">{num}</div>;
        })}
    </main>;
}

export default Main;