import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UsersComponent from './UsersComponent'
import getListOfUsers from './usersActions'
import LoaderComponent from 'UI/Loader/LoaderComponent'

class UsersContainer extends React.PureComponent {
  componentWillMount() {
    const { getListOfUsersFn } = this.props
    getListOfUsersFn()
  }

  render() {
    const { isLoading, listOfUsers } = this.props
    if (isLoading || listOfUsers === undefined) {
      return (
        <div className="d-flex justify-content-center">
          <LoaderComponent />
        </div>
      )
    }

    return <UsersComponent listOfUsers={listOfUsers} />
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.users.isLoading,
    listOfUsers: state.users.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListOfUsersFn: () => dispatch(getListOfUsers()),
  }
}

UsersContainer.propTypes = {
  getListOfUsersFn: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  listOfUsers: PropTypes.arrayOf(PropTypes.shape({})),
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
