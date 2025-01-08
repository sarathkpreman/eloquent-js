const interval = () => {
    setInterval(()=>{
        console.log("Hi , this is Me..")
    }, 2000)
}

const call = interval()

const timout = setTimeout(()=>{
    clearInterval(interval)
    console.log("Now you can't hear me")
}, 3000)

