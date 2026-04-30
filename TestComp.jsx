import { useState } from "react";

function reducer() { }

function TestComp() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>0{count}</bold>
      </div>
      <div>
        <button onClick=()=>dispatch({type: "increase", data: 1 })>
        +
      </button>
      <button onClick=()=>dispatch({type: "decrease", data})>
      -
    </button>
        </div >
    );
}

import { use }Reducer } from "react";

function reducer(state, action) {
  switch (action.type) {
        (...)
        case "INIT":
  return 0;
        default:
  return state;
}
}

function TestComp() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <bold>{count}</bold>
    </div>
    </div >
    (...)
  <button onClick={() => dispatch({ type: "INTI" })}>0으로 초기화</button>
    </div >
    );
}