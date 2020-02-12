import React from 'react'
import PropTypes from 'prop-types'
import { GridLoader } from 'react-spinners'

const LoaderComponent = ({ size }) => {
  return <GridLoader sizeUnit="px" size={size} color="#ECECEC" />
}

LoaderComponent.propTypes = {
  size: PropTypes.number,
}

LoaderComponent.defaultProps = {
  size: 50,
}

export default LoaderComponent
