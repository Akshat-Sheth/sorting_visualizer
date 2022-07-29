import React, {useState, useEffect} from 'react'
import './bar.css'
function Bar() {

  const [list,setList] = useState([])
  const [color, setColor] = useState([])

  let arr = [];
  let c = []

  const handle = () => {
    arr = [];
    for(let i=0;i<20;i++){
      let num = (Math.floor(Math.random() * 100) +1);
      arr.push(num)
      c.push('white')
    }
    setList(arr)
    setColor(c)
  }

  useEffect(()=>{
    handle()
  },[])

  const pauser = (i,j) => {

    return new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve()
      },100)
    })
  }

  const start_sort = async() => {
    let final = list

    var i,j;
    for(i =0;i<20;i++){
      let counter = 20;
        for(j=0;j<20-i-1;j++){   
          let c = [];
          for(let k=0;k<counter;k++){
            if(k===j || k ===j+1){
              c[k] = 'green';
            }else{
              c[k] = 'white'
            }
          }
          setColor(c)
          await pauser(i,j)
          if(final[j] > final[j+1]){
            final = swap(final,j,j+1)
            let temp = [...final]
            setList(temp)
          }
        }
    }
  }


  const swap = (arr, a, b) => {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
  }

  return (


    <>
      <button className='bubble_sort' onClick={start_sort}  >BUBBLE SORT</button>

      {
        list.map((item,i) => (
              <div className={`bar ${item}`}  style={{height:`${7 * item}px`, backgroundColor:`${color[i]}`}} >
                {item}
              </div>
        ))
      }

      <button className="create" onClick={handle} >CREATE NEW ARRAY</button>


    </>
  )
}

export default Bar