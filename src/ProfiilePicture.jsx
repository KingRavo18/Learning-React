
export default function ProfilePicture() {

    const imageURL = "./assets/react.svg";

    //const handleClick = (e) => console.log("Ouch");

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imageURL}/>
    );
}