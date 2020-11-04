import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from 'src/components/counter/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from 'src/redux/stores/counter';

const CounterContainer = () => {
  const counterNum = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseAsync = useCallback(() => dispatch(increaseAsync()), [dispatch]);
  const onDecreaseAsync = useCallback(() => dispatch(decreaseAsync()), [dispatch]);
  return (
    <Counter
      number={counterNum}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseAsync={onIncreaseAsync}
      onDecreaseAsync={onDecreaseAsync}
    />
  );
};

export default CounterContainer;
