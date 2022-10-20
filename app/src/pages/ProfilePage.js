import React from "react"
import PastOrders from "../features/ProfilePage/PastOrders";
import { redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfilePage(props) {

    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = React.useState(null) 
   
  
    React.useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "dev-v7gopbxg.us.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
      
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            const { user_metadata } = await metadataResponse.json();
      
            setUserMetadata(user_metadata);
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getUserMetadata();
      }, [getAccessTokenSilently, user?.sub]);

    if (!isAuthenticated) {redirect('/')} else {
    
        return (
    <div className='profile--page'>
    <h1 className='page--header'>{user.name}</h1>
    <p>{user.email}</p>
    <PastOrders
    customeOrders={props.customeOrders}
    customerDetails={props.customerDetails}
    />
    <h3>Meta</h3>
    {userMetadata ?
      (<pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
            "No user metadata defined"
        )}
    </div>
    )
}}