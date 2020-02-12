import React from 'react'
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next'
import userTableColumns from './userTableColumns'

const UsersComponent = props => {
  const { listOfUsers } = props
  const defaultSorted = [
    {
      dataField: 'name',
      order: 'asc',
    },
  ]

  return (
    <div className="px-4 pt-5">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={listOfUsers}
        columns={userTableColumns}
        defaultSorted={defaultSorted}
      />
    </div>
  )
}

UsersComponent.propTypes = {
  listOfUsers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default UsersComponent
