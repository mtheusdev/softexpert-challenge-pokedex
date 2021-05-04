import './table-info.style.scss'
const TableInfoPokemon = ({height, weight, stringStatus, stringSkills, stringTypes}) => {
  return (
    <div className="details">
      <table>
        <tbody>
          <tr>
            <th>Height</th>
            <td>{((height/10) * 100).toFixed(0)}cm</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{(weight/10)}kg</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{stringStatus}</td>
          </tr>
          <tr>
            <th>Skills</th>
            <td>{stringSkills}</td>
          </tr>
          <tr>
            <th>Types</th>
            <td>{stringTypes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default TableInfoPokemon
