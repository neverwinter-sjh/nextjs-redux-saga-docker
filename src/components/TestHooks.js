import React, { useEffect, useState, useCallback } from 'react';

const TestHooks = () => {
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(0);

  useEffect(() => {
    console.log('didMount useEffect done');
  }, []);

  useEffect(() => {
    console.log('useEffect test', test);

    return () => {
      console.log('useEffect before :', test);
    };
  }, [test]);

  useEffect(() => {
    console.log('always test', test);
    console.log('always test2', test2);
  });

  const handlerTest = useCallback(() => {
    setTest(test + 1);
  }, [test]);

  const handlerTest2 = useCallback(() => {
    setTest2(test2 - 1);
  }, [test2]);

  return (
    <div>
      <h2>test: {test}</h2>
      <p>
        <button type="button" onClick={handlerTest}>
          setTest
        </button>
      </p>
      <hr />
      <h2>test2: {test2}</h2>
      <p>
        <button type="button" onClick={handlerTest2}>
          setTest
        </button>
      </p>
    </div>
  );
};

export default TestHooks;
