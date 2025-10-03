import React, { useContext } from 'react';
import { WishlistContext } from "../../context/context";
import { Container, Table, Button, Image } from 'react-bootstrap';
const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
  
  return (

    <Container>
      {/* {JSON.stringify(wishlistState, null, 2)} */}
      {wishlistState.wishlistItems.length <= 0 ?
        <div>There are no iteams added</div> :
        <Table>
          <thead>
            {/* <tr>product</tr>
            <tr>Action</tr> */}
          </thead>
          <tbody>
            {wishlistState.wishlistItems.map((item) => {
              return (
                <tr key={item.id} className='border'>
                 
                  <td>
                    <Image
                      src={item.thumbnail}
                      alt={item.productID}
                      style={{ width: "100px" }}rounded /></td> 
                       <td className=''>{item.title}</td>                 
                      <td><Button variant="outline-danger" onClick={() => wishlistDispatch({type :'REMOVE_FROM_WISHLIST',payload :item.id})}>Remove</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      }
    </Container>
  );
}
export default Wishlist;