import './App.css';
import { firestore } from './firebase';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // bucket이라는 변수로 firestore의 collection인 bucket에 접근
    const user = firestore.collection("user");

    // collection의 document인 "bucket_item"을 가져온다.
    user.doc("user").get().then((doc) => {

      // document의 데이터를 가져옴
      console.log(doc.data());
      // document의 id를 가져옴
      console.log(doc.id);
    });
  });

  return (
    <div className="App">
      firebase 확인해보기!
    </div>
  );
}

export default App;