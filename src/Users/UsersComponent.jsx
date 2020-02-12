import React from 'react'
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next'
import userTableColumns from './userTableColumns'

const UsersComponent = props => {
  const { listOfUsers, handleClipBoardFn } = props
  const defaultSorted = [
    {
      dataField: 'name',
      order: 'asc',
    },
  ]

  return (
    <div className="px-4 pt-5">
      <button onClick={() => handleClipBoardFn()}>Copy To Clipboard</button>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={listOfUsers}
        columns={userTableColumns}
        defaultSorted={defaultSorted}
        id="usersTable"
      />
    </div>
  )
}

UsersComponent.propTypes = {
  listOfUsers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClipBoardFn: PropTypes.func.isRequired,
}

export default UsersComponent
