const Container=()=>{
    const[follow,setFollow]=React.useState(0);
    const[subs,setSubs]=React.useState(0);
    const follows=()=>{
        setFollow(follow+1);
    }
    const subscribe=()=>{
        setSubs(subs+1);
    }
    return(
        <div>
           <h2> Projects </h2>
           <button onClick={follows}>follow</button>
           <button onClick={subscribe}>subscribe</button>
           <h3>followed project:{follow}</h3>
           <h3>subscribed project:{subs}</h3>
        </div>
        )
}