import Displaymeme from './displaydetail.jsx';
function displayScore({course, data}) {
    let max =0;
    let sum =0 ;
    let min =100;
    data.map((item) => {
        if (item.score > max) {
            max = item.score;
        }
        if (item.score < min) {
            min = item.score;
        }
        sum += item.score;
    });
    sum = sum / data.length;
    return (
        <>
            <main className="scores-container">
                <div className="scores">
                    <h1>{course}</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item,index) => (
                                <tr key={item.firstName + index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td className={item.score < 50 ? 'warning' : ""}>{item.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Displaymeme max={max} min={min} average={sum} />
                </div>
            </main>
        </>
    );
}
export default displayScore;