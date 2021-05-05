import React from 'react';
// import './table-info.style.scss';
import PropTypes from 'prop-types';

/** Must return a formatted object to assemble a component
 * @param props
 * @returns object
 */
const TableInfoPokemon = ({
  height,
  weight,
  stringStatus,
  stringSkills,
  stringTypes,
}) => {
  TableInfoPokemon.propTypes = {
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    stringStatus: PropTypes.string.isRequired,
    stringSkills: PropTypes.string.isRequired,
    stringTypes: PropTypes.string.isRequired,
  };
  return (
    <div className="details">
      <table>
        <tbody>
          <tr>
            <th>Height</th>
            <td data-testid="height-field">
              {((height / 10) * 100).toFixed(0)}cm
            </td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{weight / 10}kg</td>
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
  );
};

export default TableInfoPokemon;
