import React from 'react'


const DataTables = ({ data }) => (
  <table>
    <tbody>
    {data ? data.map((object,index) => {
      return (
        <tr className="" id={"table" + index }  >
          <td>
            <p><strong>Member: </strong> {object.member}</p>
            <p><strong>Influence Type: </strong> {object.influencerType}</p>
            <p><strong>Indication Category: </strong> {object.indicationCategory}</p>
            <p><strong> Affiliation: </strong> {object.affiliation}</p>
            <p><strong>Affiliation Position: </strong> {object.affiliationPosition}</p>
            <p><strong>Primary State:</strong> {object.primaryState}</p>
            <p><strong>Priority: </strong> {object.priority}</p>
          </td>
        </tr>)
    }) : null}
    </tbody>
  </table>

)


export default DataTables
