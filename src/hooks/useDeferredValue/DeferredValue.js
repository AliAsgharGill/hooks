import { useDeferredValue, useEffect, useMemo } from "react";

function List({ input }) {
  const ListSize = 200;
  const defferdValue = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < ListSize; i++) {
      l.push(<div key={i}>{defferdValue}</div>);
    }
    return l;
  }, [defferdValue]);
  useEffect(() => {
    console.log(`Input: ${input} \n Deferred: ${defferdValue}`);
  }, [input, defferdValue]);
  return list;
}

export default List;
