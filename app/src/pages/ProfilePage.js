import React from "react"
import PastOrders from "../features/ProfilePage/PastOrders";
import { redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfilePage(props) {

    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = React.useState(null) 

    React.  useEffect(() => {
      (async () => {
        try {
          const token = await getAccessTokenSilently({
            audience: 'http://localhost:7143', // Value in Identifier field for the API being called.
            scope: 'records:read-write' 
          });
          console.log(token)
          const response = await fetch('https://localhost:7143/customer', {
            headers: {
            Authorization: `Bearer ${token}`,
            },
          });
          console.log((await response.json()));
        } catch (e) {
          console.error(e);
        }
      })();
    }, [getAccessTokenSilently]);
  

      


    if (!isAuthenticated) {redirect('/')} else {
    
        return (
    <div className='profile--page'>
        <h1 className='page--header'>{user.name}</h1>
        <div className='profile--page--container'>
        <PastOrders
        customerOrders={props.customerOrders}
        customerDetails={props.customerDetails}
        recordData={props.recordData}
        />
        <h3>Meta</h3>
        {userMetadata ?
          (<pre>{JSON.stringify(userMetadata, null, 2)}</pre>
            ) : (
                "No user metadata defined"
            )}
        </div>
    </div>
    )
}}