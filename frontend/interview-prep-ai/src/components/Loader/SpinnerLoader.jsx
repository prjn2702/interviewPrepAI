import React from 'react'

import { Circles } from 'react-loader-spinner'

const SpinnerLoader = () => (
  <div role="status">
    <Circles
      height="40"
      width="40"
      color="#00BFFF"
      ariaLabel="loading"
    />
  </div>
)

export default SpinnerLoader;