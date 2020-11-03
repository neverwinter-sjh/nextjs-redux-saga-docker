import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from 'src/modules/Counter';
import { increase, decrease } from 'src/reducers/counter';

const CounterContainer = () => {
  const counterNum = useSelector((state) => state.counter.value);
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

export default CounterContainer;
