import Reac,{useState} from 'react'


function Page() {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const writeFile = async () => {
    await fetch('http://localhost:5000/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    alert('File written');
  };

  const readFile = async () => {
    const res = await fetch('http://localhost:5000/read');
    const data = await res.json();
    setOutput(data.content);
  };

  return (
    <>
      <h1>FS MODEL FOR NODE</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={writeFile}>FS Write</button>
      
      <button onClick={readFile}>FS Read</button>
      <p>{output}</p>
    </>
  )
}

export default Page
