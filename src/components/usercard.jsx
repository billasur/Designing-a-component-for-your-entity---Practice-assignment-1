import React from "react";

const UserCard= () =>{
    const ProfilePhoto = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.febFJqJKuRDRJznjYsTFdQHaE8%26pid%3DApi&f=1&ipt=3adab63807e18a4e4ec4c812e7bde590f63f5971f22b0c9019ee3f1087f0e996&ipo=images"
    const name = "Prahalad Singh Gaur";
    const email = "singhgaurprahalad@gmail.com";
    const phone = "9829289833";
    const adress = "alliance university, Bangalore";

    const cardStyle = {
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        padding: '10px',
        textAlign: 'center',
        margin: '16px auto'

    };

    const phototStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit :'cover' 
    }


    return(
        <div style = {cardStyle}>
            <img src={ProfilePhoto} alt = "Profile"  style={phototStyle}/>
            <h2>{name}</h2>
            <p>
                <strong>
                    Email: {email}
                </strong>
            </p>
            <p>
                <strong>
                    Phone: {phone}
                </strong>
            </p>
            <p>
                <strong>
                    Address: {adress}
                </strong>
            </p>
            </div>
    )

    
}

export default UserCard;