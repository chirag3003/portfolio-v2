import styled from "styled-components"

export default styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  .text {
    .intro{;
      p{
        color: var(--color-mint-green);
      };
      h1{
        color: var(--color-buff)
      }
    }
    .desc{
      p{
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
  .image{d
    img{
      width: 100%;
    }
  }
`