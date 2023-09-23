import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import './style.css'
import ShoppingList from '../products/ListProduct';
import Mybutton from '../button/MyButton';
import Avatar from '../../assets/avatar.jpg';

const user = {
    name: 'Bao Nguyen Quoc',
    imageSrc: Avatar,
    imageSize: 90,
};


export default function Profile({ islogin , onLogout }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageSrc}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <ShoppingList />
            {islogin === true ? (<>
                <Mybutton onclick={onLogout} label='Đăng xuất' />
            </>) : (<></>)}
            
        </div>
    );
}