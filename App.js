//ES6 const, let
//ES6 Destructuring 
const { Component } = React;

const ChildComponent = () => (
	<div>deliverr</div>
);

function App(){
	// apiの情報をstate管理
	const [statusTxt, setStatus] = React.useState('loading');
	const [statusBody, setBody] = React.useState('loading');
	const [statusAnswer, setAnswer] = React.useState('loading');
	
	const clicked = () =>{

		// axios.get(URL)でapiからgetしてjsonを取得
		axios.get('https://yesno.wtf/api')
		// thenで成功した場合の処理をかける
		.then(response => {
		  console.log('status:', response.status); // 200
		  console.log('body:', response.data);     // response body. 
		  console.log('image:', response.data.image);     // response body. 
		  setStatus(response.status);
		  setBody(response.data.image);
		  setAnswer(response.data.answer);

		  // catchでエラー時の挙動を定義する
		}).catch(err => {
		  console.log('err:', err);
		});
    

  	}
		return (
			<div>
				<p>下のボタンをクリックしてください。</p>
        		<button onClick={()=>clicked()}>Click</button>
				<h1>answer:{statusAnswer}</h1>
				<img src={statusBody}></img>
				<h1>status:{statusTxt}</h1>
				<h1>body:{statusBody}</h1>
			</div>
		);
	}

ReactDOM.render(<App />, document.querySelector(".container"));
