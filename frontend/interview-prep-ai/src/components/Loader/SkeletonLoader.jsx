import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({ count = 1, height = 40, width = 40 }) => (
  <div role="status">
    <Skeleton
      count={count}
      height={height}
      width={width}
      borderRadius={8}
    />
  </div>
);

export default SkeletonLoader;
