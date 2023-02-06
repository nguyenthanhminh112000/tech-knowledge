import React from 'react'

const UseRefExample = () => {
  const [name,setName]=React.useState('')
  // const [renderTime,setRenderTime]=React.useState(0)
  // const render=React.useRef(1);//{current:0}
  // React.useEffect(()=>{
  //  render.current=render.current+1;
  // },[name])
  const inputRef=React.useRef()//{current:undefined}
  //{current:input}
  React.useEffect(()=>{
    console.log(inputRef);
  })

  return (
    <div>
      {/* <input type="text" value={name} onChange={(e)=>{
        setName(e.target.value)
      }} /> */}
      
      {/* <p>render {render.current}</p> */}
      <form action="">
        <input type="text"  ref={inputRef} />
      </form>
    </div>
  )
}

export default UseRefExample