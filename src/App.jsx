import { useState } from "react";

export default function App() {

    function randomValueFromArray(array){
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }

    function handleClick (){
        setXItem(randomValueFromArray(arrayA));
        setYItem(randomValueFromArray(arrayB));
        setZItem(randomValueFromArray(arrayC));
        setShowStory(true);

        if(inputName !== ""){
          setName(inputName);
          //setInputName(""); //一回入力したら中身を空にする(A)
        }else{
          setName("Bob")
        }

        if(ukus === "us"){
            setUnit("300 pounds");
            setCf("94 fahrenheit");
        }else{
            setUnit("21 stone");
            setCf("34 centigrade");
        }

    }
  
    function inputValue(event){  //valueをsetInputNameにinputする
          setInputName(event.target.value);
    }
  
    const arrayA = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const arrayB = ["the soup kitchen", "Disneyland", "the White House"];
    const arrayC = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away",];
    const [xItem, setXItem] = useState("");
    const [yItem, setYItem] = useState("");
    const [zItem, setZItem] = useState("");
    const [showStory, setShowStory] = useState(false);

    const [inputName,setInputName] = useState(""); //リアルタイムで変わってほしくないので、値保存の状態変数を作成
    const [name,setName] = useState(""); //nameの状態を定義(最初は空白)

    const [ukus,setUkus] = useState("us"); //リアルタイムで変わっていいならこれだけでいい
    
    const [unit,setUnit] = useState("300 pounds");
    const [cf,setCf] = useState("94 fahrenheit");

    
    return(
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
            <input
                type="text"
                value={inputName}//printNameは状態変数　(A)で空になる
                onChange={inputValue}//inputの変更で呼び出される

          />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus=="us"} onChange={(e) => setUkus(e.target.value)}/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus=="uk"} onChange={(e) => setUkus(e.target.value)}/>
        </div>
        <div>
          <button onClick={handleClick}>Generate random story</button>
        </div>
        {showStory && (
            //nameが空白なら"Bob"、入力されているならname
          <p>
            It was {cf} outside, so {xItem} went for a walk. When they got to {yItem}, they stared in horror for a few moments, then {zItem}. {name} saw the whole thing, but was not surprised — {xItem} weighs {unit}, and it was a hot day.
          </p>
        )}
      </>
    );
}

