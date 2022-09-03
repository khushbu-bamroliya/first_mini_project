// const handleClose = () => {

//     if(!allValues.id&&!allValues.name&&
//     !allValues.course&&!allValues.fees){
//       alert("plz fill data")
//     }
//     else if(updata.id&&updata.name&&
//       updata.course&&updata.fees){
//       console.log('total data',Totaldata)
//       console.log("allVal",allValues);
//       console.log( Array.isArray(allValues));
//       // const u =allValues.filter(e=>{
//       //   const isDup=nArray.includes(e.n);
//       //   if(!isDup){
//       //     nArray.push(e.n);
//       //     return true;
//       //   }
//       //   return false;
//       // });
//       // console.log(u);
//       setAllValues(
        

//         allValues.filter((elm,i,allArr)=>{
         
//           console.log('allarr',allArr)
//           console.log('elm.id',elm.id)
//           console.log('updata.unikId',updata.unikId)
            // if(elm.id==updata.unikId){
            //   console.log('elm',{...elm});
            //     return {
                
            //       ...elm,
            //       id:updata.id,
            //       name:updata.name,
            //       course:updata.course,
            //       fees:updata.fees,
            //     }
            // }
//             return elm;
//         })
//       )
//       setAllValues({})
//       updata={}
//     }
//     else{
//       // const allInputData ={nId:new Date().getTime().toString(),values:}
//       Totaldata.push(allValues);
//       props.setDataFun(allValues);
//       setOpen(false);
//       setAllValues({})
//     }
   
    

//   };





/// ----->>>  using for

// for (const key in Totaldata) {
//     console.log(`asdddddd${key}: ${Totaldata[key]}`);
//     console.log('updata.id',updata.id)
  
//     console.log(Totaldata.map(({id})=>[id]))
//     if(updata.id==Totaldata[key].id){
//     console.log('inner')
//         return {
        
//           ...allValues[key],
//          id:allValues[key].id==''?updata.id:allValues[key].id,
//          name:allValues[key].name==''?updata.id:allValues[key].name,
//          course:allValues[key].course==''?updata.id:allValues[key].course,
//          fees:allValues[key].fees==''?updata.id:allValues[key].fees,
//         }
         
//     }
//      Totaldata.push(allValues);
//   props.setDataFun(allValues);
//   setOpen(false);
//   setAllValues({})
  
//   }