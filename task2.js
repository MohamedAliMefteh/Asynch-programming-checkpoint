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