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
    const { isLoading } = this.props
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <LoaderComponent />
        </div>
      )
    }

    return <UsersComponent />
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.users.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListOfUsersFn: () => dispatch(getListOfUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
