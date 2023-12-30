import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
    display :flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin:20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:#${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;


const Center = styled.div`
    flex:1;
    padding:20px;
  ${mobile({ display: "none" })}
    
`;

const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:0; 
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap; 
`;
const ListItem = styled.li`
    list-style:none;
    width:50%;  
    margin-bottom:10px;
`;



const Right = styled.div`
    flex:1;
    padding:20px;
  ${mobile({ backgroundColor: "#eeee" })}

`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;    
`


const Payment = styled.img``

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptate non possimus. Sit, modi temporibus? Ipsam, tenetur aut accusamus mollitia, pariatur ad doloribus nemo hic vitae enim quod animi sunt!</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List >
                    <ListItem >Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accecries</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Condition</ListItem>


                </List>
            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "20px" }} />  622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "20px" }} />  +1 234 5678 987
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "20px" }} />  contact@lama.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer