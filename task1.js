const timer=(ms)=>{
    return new Promise((delay)=>setInterval(delay,ms))
}
const iterateWithAsyncAwait =async(arr)=>{
    for(const value of arr){
        await timer(1000)
        console.log(value)
        
    }
}

iterateWithAsyncAwait(['jason','jack'])