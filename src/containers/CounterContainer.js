import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../modules/Counter';
import { increase, decrease } from '../reducers/counter';

const CounterContainer = () => {
  const counterNum = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={counterNum}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

CounterContainer.getInitialProps = ({ store }) => {
  return {};
};

export default CounterContainer;
