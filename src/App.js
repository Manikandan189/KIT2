import React, { useEffect, useState } from 'react';
import './App.css';
import Color from './Color';

function App() {
  const api = "http://localhost:3000/data";
   const[name,loadname]=useState('');
   const[id,loadid]=useState('');
   const[sub,loadsub]=useState('');
   const[grade,loadgrade]=useState('');
   const[mark,loadmark]=useState('');

  const [data, setData] = useState([]); 
  const data1={name:"mani",id:26,subject:"API"}
  let c=0;
  useParams()
  useEffect(() => {
    c++;
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        const list = await res.json();
        console.log(list.id);
        setData(list); 
      } catch (e) {
        console.log(e.stack);
      }
    };
    
  fetchData();
 
   
}, []);
async function fetc(id,n,s,m,g)
{
  await fetch(api,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({id:id,name:n,subject:s,mark:m,grade:g})
  })
  const f=await fetch(api);
  setData(await f.json())
}
async function up(id,nam,sub,mark,grade)
{
  await fetch(`${api}/${id}`,{
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({name:nam,subject:sub,mark:mark,grade:grade})
  })
  const up=await fetch(api);
  setData(await up.json());
}
async function del(id)
{
  const f=await fetch(`${api}/${id}`,{
    method:'DELETE'
  })
  const up=await fetch(api);
  setData(await up.json());

}
  return (
    <>
      <Color />
      <input onChange={(e)=>loadid(e.target.value)}/>
      <input onChange={(e)=>loadname(e.target.value)}/>
      <input onChange={(e)=>loadsub(e.target.value)}/>
      <input onChange={(e)=>loadmark(e.target.value)}/>
      <input onChange={(e)=>loadgrade(e.target.value)}/>
      <button onClick={(e)=>fetc(id,name,sub,mark,grade)}>add</button>
      <button onClick={(e)=>up(id,name,sub,mark,grade)}>update</button>
      <button onClick={(e)=>del(id)}>delete</button>
      <ul>
        {data.map((item) => (
          <li>
            <p>[{item.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.subject}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.mark}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.grade}]</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
