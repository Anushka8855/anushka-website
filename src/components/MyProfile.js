import React, {useState} from 'react';


const user = {
    name: 'Anushka Singh',
    imageUrl: 'C:\Users\anush\Downloads\Anushka profile photo.jpg',
    imageSize: 90,
};

function Profile(){
    const [name, picture] = useState('');

    return(
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar" 
                src={user.imageUrl.createObjectURL}
                alt={"Photo of " + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

export default Profile;