import styled from "styled-components"

export default styled.div`
  z-index: 100;
  background: var(--color-buff);
  width:100%;
  height: 65px;
  padding:10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:var(--color-honey-drew);
  font-weight:bold;
  margin:auto;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  .container{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .title{
    h1{
      font-size: 1.8rem;
    }
  }

  .links{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      margin:5px 15px;
    }
  }
  .social{
    a{
      margin: 0 15px;
    }
  }
  .menu-btn{
    button{
      background: transparent;
      outline: none;
      border:none;
      svg{
        color: var(--color-honey-drew);
      }
    }
    display: none;
  }
  @media(max-width: 850px){
    padding: 10px 20px;
    .title{
      h1{
        font-size: 1.4rem;
      }
    }
    .social{
      display:none;
    }
    .links{
      display:none;
    }
    .menu-btn{
      display: block;
    }
  }
`