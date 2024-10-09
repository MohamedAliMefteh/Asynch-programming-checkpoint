const fetchData=()=>{
    return new Promise((delay)=>
        setInterval(()=>{
            delay({data:"fetching data"},1000)
        })
    )
}
const awaitCall =async()=>{
        try{
            const response=await fetchData()
            console.log(response.data)
        }
        catch(error){
            console.error("error fetching data:",error)
        }
}

awaitCall()

const delay=(ms)=>{
    return new Promise((time)=>setInterval(time,ms))
}
const function1=async()=>{
    await delay(1000)
    console.log("async function 1")
}
const function2=async()=>{
    await delay(1000)
    console.log("async function 2")
}
const function3=async()=>{
    await delay(1000)
    console.log("async function 3")
}
const chaniAsyncFunction=async()=>{
    await function1()
    await function2()
    await function3()
}
chaniAsyncFunction()