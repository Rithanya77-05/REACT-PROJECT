export default function Home() {
    return(
        <div style ={{padding:"20px"}}>
            <h1>Home Page</h1>
            <p>Welcome to our Simple React </p>
            <Link to ="/products">
            <img src="https://headsupfortails.com/blogs/dogs/dog-breeds-in-india?srsltid=AfmBOopYzbRR0UUkSkoAkqzdMJBLurXMxfEYUg6YNJ4JWtNkkSDPVPo6"
            alt="Store banner" 
            style={{width:"100%" , cursor:"pointer"}}>
                </img>
            </Link>
        </div>
    )
}