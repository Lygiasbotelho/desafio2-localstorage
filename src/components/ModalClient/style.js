import styled from "styled-components";

export const Container = styled.div`
  

	.display-block{
	display: block;
	/* background-color: yellow;
	height: 100%; */
}
 .display-none{
	display: none;
/* background-color: blue;
height: 100%; */

}
.cart {
	 height: 70vh;
  width: 350px;
  max-width: 100%;
  background-color: #fff;
  border-radius: .25rem 0 0 .25rem;
  outline: none;
  color: #333333;
  font-size: .9rem;
  position: absolute;
  left: 0;
 // z-index: 1;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0 .5em #c3c3c3;
 // margin-top:35px; 
	//display: none;
}

  .cart-header {
    background-color: red;
    border-radius: .25rem 0 0 .25rem;
  }
  h2 {
    display: inline-block;
    text-align: center;
    padding-top:15px;
    padding-bottom: 10px;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    width: 90%;
  }
  .close {
  //  display: inline-flex;
 //   position: absolute;
    right:0;
    top: 0;
    height:100%;
    background-color: blue;
    width: 10px;
  }


`;

export const Modal = styled.div `

  .modal.left .modal-dialog,
	.modal.right .modal-dialog {
		position: fixed;
		margin: auto;
		width: 320px;
		height: 100%;
		-webkit-transform: translate3d(0%, 0, 0);
		    -ms-transform: translate3d(0%, 0, 0);
		     -o-transform: translate3d(0%, 0, 0);
		        transform: translate3d(0%, 0, 0);
	}

	.modal.left .modal-content,
	.modal.right .modal-content {
		height: 100%;
		overflow-y: auto;
	}
	
	.modal.left .modal-body,
	.modal.right .modal-body {
		padding: 15px 15px 80px;
	}

/*Left*/
	.modal.left.fade .modal-dialog{
		left: -320px;
		-webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
		   -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
		     -o-transition: opacity 0.3s linear, left 0.3s ease-out;
		        transition: opacity 0.3s linear, left 0.3s ease-out;
	}
	
	.modal.left.fade.in .modal-dialog{
		left: 0;
	}
       
/*Right*/
	.modal.right.fade .modal-dialog {
		right: -320px;
		-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
		   -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
		     -o-transition: opacity 0.3s linear, right 0.3s ease-out;
		        transition: opacity 0.3s linear, right 0.3s ease-out;
	}
	
	.modal.right.fade.in .modal-dialog {
		right: 0;
	}

/* ----- MODAL STYLE ----- */
	.modal-content {
		border-radius: 0;
		border: none;
	}

	.modal-header {
		border-bottom-color: #EEEEEE;
		background-color: #FAFAFA;
	}
`