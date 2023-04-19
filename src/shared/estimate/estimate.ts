export default function estimate (time:string) {
    const date = new Date(time);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    console.log(Date.now())
    
    if (unixTimestamp < Date.now()/1000) {
        return true
    } else {
        return false
    }
}