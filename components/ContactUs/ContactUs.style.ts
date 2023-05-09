import styled from "styled-components"

export default styled.section`
  .heading{
    h2{
      color:var(--color-buff)
    }
  }
  .text{

    .info-card{
      background-color: var(--color2);
    }
  }
  .contact-card{
    background-color: var(--color2 );
    color:var(--color-white) 
  }
  input,textarea{
    display:block;
    border:none;
    outline:none;
    background-color: var(--color3);
    color:var(--color-mint-green);
    width:100%;
    :focus{
      outline:none;
      border:none;
    }
  }
  button{
    background-color: var(--color3);
  }
`