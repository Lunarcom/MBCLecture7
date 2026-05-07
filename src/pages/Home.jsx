import Editor from "../component/Editor";
import { useState } from "react";

const Home = () => {
  return (
    <div>
      <Editor
        initData={{
          date: new Date().getTime(),
          EmotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => {
          alert("작성 완료!");
        }}
      />
    </div>
  );
};
export default Home;

import { useState } from "react";

const [pivotDate, setPivotDate] = useState(new Date());

};

const Home = () => {

  const onIncreaseMonth = () +> {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
};

const onDecreaseMonth = () => {
  setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
};
    
};
export default Home;</div >

const HOme = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년
                         ${pivotDate.getMonth() + 1}월

    return (
        <div>
            <Header
            title={headerTitle}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
            rightChild={<Button text={">"} onClick={onIncreaseMonth} />
            </div>
            );
    };

    import { useState, useContent } from "react";
    import { DiaryStateContent } from "../App";


    const Home = () => {
    const data = useCintext(DiaryStateContext);
    
    }

    const Home = () => {
        const data =  useContext(DiaryStateContext);
        const [pivotDate, setPivotDate] = useState(new Date());
        const [filterdDate, setFilteredData] = useState([]);
    };
    export default Home;

    const Home = () +> {
       const }
