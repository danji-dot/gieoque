<style>

body{
    margin:0;
    font-family:"Arial";
    color:white;

    background:url("assets/bg.jpg");
    background-size:cover;
    background-position:center;
}


/* bảng chính */
.box{

    width:90%;
    max-width:500px;

    margin:30px auto;
    padding:25px;

    background:url("assets/panel.png");
    background-size:100% 100%;

    border:none;
    border-radius:20px;

}


/* popup */
.popup{

    position:fixed;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);

    width:420px;
    padding:30px;

    background:url("assets/popup.png");
    background-size:100% 100%;

}



/* ô nhập */
input,select{

    width:80%;
    height:40px;

    color:#fff;

    background:url("assets/input.png");
    background-size:100% 100%;

    border:none;

    text-align:center;

    outline:none;

}



/* nút */
button{

    padding:15px 30px;

    color:#fff;

    font-weight:bold;

    border:none;

    cursor:pointer;


    background:url("assets/button.png");
    background-size:100% 100%;

}



/* đồng xu */

.coin{

    width:80px;
    height:80px;

    background:url("assets/coin.png");

    background-size:cover;

    display:inline-flex;

    justify-content:center;
    align-items:center;


    font-size:25px;

}



/* đĩa */

.plate{

    width:250px;

    height:100px;

    margin:auto;


    background:url("assets/plate.png");

    background-size:contain;

    background-repeat:no-repeat;

}



</style>
