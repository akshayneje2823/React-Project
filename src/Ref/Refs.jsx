import React,{useEffect} from 'react'

function Refs() {
    const Ref = React.createRef();
    let calBaRef = null;
    const setCalBaref = (element)=>{calBaRef=element}

    useEffect(() => {
    //     Ref.current.focus()
    //   console.log(Ref)
        if(calBaRef){
            calBaRef.focus()
        }
    })

    
  return (
    <div>
        <input type="text" ref={Ref}/>
        {/* <input type="text" ref={Ref}/> */}
        <input type="text" ref={setCalBaref}/>
        <button onClick={()=>{
            alert(Ref.current.value)
        }}>Click</button>
    </div>
  )
}

export default Refs