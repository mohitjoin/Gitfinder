import React, { useState } from 'react'
import './style.css'
import Button from '@mui/material/Button';
import Axios from 'axios';

function GitfindBody() {


    var [uname, setuname] = useState("")
    var [errname, seterr] = useState("user found")
    var [yourname, getuname] = useState({})
    const [myinns, setinn] = useState("invi")


    const buttonStyle = {

        marginLeft: "40px",
        marginTop: "10px"

    };






    const handelGetUser = () => {
        //   console.log(uname);
        seterr((pre) => { //safer approach

            return pre = "";


        });


        Axios
            .get(`https://api.github.com/users/${uname}`)
            .then(resp => {
                const usdata = resp.data;



                getuname((pre1) => { //safer approach

                    return pre1 = usdata;


                });
                //  console.log(resp.data);

            }).catch(error => {
                seterr((pre) => { //safer approach

                    return pre = "No user found";


                });
            });


        setinn((pp) => {
            return pp = 'vis';
        });
        if (errname === "No user found") {

        }

        // console.log(yourname);
        setuname((pp) => {
            return pp = '';
        });


    }


    return <div className = "GitBody" > < div > <
        input
    type = "text"
    className = "input-username"
    value = { uname }
    placeholder = "Enter your Github username"
    onChange = {
        (e) => {

            setuname(e.target.value)

        }
    }
    / > <
    Button variant = "contained"
    onClick = { handelGetUser }

    >
    Get User Data < /
    Button > < /
    div >

        <
        div className = "Userinfo-div "
    id = { myinns } >

        <
        div className = "mage-cont" >
        <
        div className = "image-div" > <
        img src = { yourname.avatar_url }
    alt = "User avatar" /
        >

        <
        /div> <
    a className = "github-link"
    href = { yourname.html_url } > <
        Button variant = "contained"
    color = "success"
    style = { buttonStyle }

    >
    View on Github < /
    Button > < /a><
    Button
    variant = "text"
    style = { buttonStyle } > Repositories: { yourname.public_repos } < /
    Button > < /
    div >
        <
        div className = "info-div" > < div > < /div> 
    Name: { yourname.name } < div > < /div>
    About: { yourname.bio } < div > < /div> 
    Api Url: { yourname.url } < div > < /div> 
    Followers: { yourname.followers } < div > < /div> 
    Following: { yourname.following } < div > < /div> 
    Username: { yourname.login } < div > < /div> 
    User type: { yourname.type } < div > < /div> 





    <
    /div>

    <
    /div>






    <
    /div>;

}

export default GitfindBody;