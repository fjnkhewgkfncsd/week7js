function displaymeme({max,min,average}){
    return(
        <>
        <table>
            <tr>
                <th>max</th>
                <th>min</th>
                <th>avargae</th>
            </tr>
            <tr>
                <td>{max}</td>
                <td>{min}</td>
                <td>{average.toFixed(2)}</td>
            </tr>
        </table>
        </>
    );
}
export default displaymeme;