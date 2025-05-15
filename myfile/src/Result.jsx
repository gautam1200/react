import React from 'react'

function Result({demo}) {

    function total(item){
        return item.s1 + item.s2 + item.s3
    }
    function Per(item){
        if(item.s1 >= 33 && item.s2 >=33 && item.s3 >=33)
        {
            return (item.s1 + item.s2 + item.s3) / 3
        }
        else{
            return 0
        }
    }
    function min(item){
            return Math.min(item.s1 , item.s2 , item.s3)
    }
    function max(item){
        return Math.max(item.s1 , item.s2 , item.s3)
    }
    function grade(item)
    {
        let s1 = item.s1
        let s2 = item.s2
        let s3 = item.s3
        if(s1 >= 33 && s2>= 33 && s3 >=33)
        {
            return('pass')
        }
        else{
            return('fail')
        }
    }
  return (
    <>
      <table border={2}>
        <tr>
            <td>Name</td>
            <td>s1</td>
            <td>s2</td>
            <td>s3</td>
            <td>total</td>
            <td>grade</td>
            <td>Per</td>
            <td>min</td>
            <td>max</td>
        </tr>
        {
            demo.map((item , index) => {
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.s1}</td>
                        <td>{item.s2}</td>
                        <td>{item.s3}</td>
                        <td>{total(item)}</td>
                        <td>{grade(item)}</td>
                        <td>{Per(item).toFixed(2)}</td>
                        <td>{min(item)}</td>
                        <td>{max(item)}</td>
                    </tr>
                )
            })
        }
      </table>
    </>
  )
}
export default Result

