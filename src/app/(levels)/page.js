import React from 'react'
import PropTypes from 'prop-types'

const page = props => {
  return (
    <div>{postId}</div>
  )
}

page.propTypes = {
    postId: PropTypes.number
}

export default page