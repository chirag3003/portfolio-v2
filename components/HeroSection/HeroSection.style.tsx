import styled from "styled-components"

export default styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 10% ;
  align-items: center;
  .text {
    width:50%;
    .intro{
      font-size: 2.4rem;
      p{
        color: var(--color-mint-green);
      };
      h1{
        color: var(--color-buff)
      }
    }
    .desc{
      p{
        margin-top: 2rem;
        font-size: 1.25rem;
        max-width: 35rem;
      }
    }
    .buttons{
      .contact{
        margin-top: 1.5rem;
        padding: 10px 20px;
        font-size:1.5rem;
        font-weight: bold;
        outline: none;
        border:none;
        border-radius: 0.2rem;
        color:var(--color4);
        background: var(--color-buff);
      }
    }
  }
  .image{
    width: 50%;
    img{
      width: 100%;
    }
  }
`