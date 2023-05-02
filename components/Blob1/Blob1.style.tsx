import styled from "styled-components"

export default styled.div`
  position: fixed;
  height: 30vw;
  width: 30vw;
  min-height: 10vh;
  min-width: 10vh;
  top: -10vw;
  left: -10vw;
  transform:translate(-30vw,-30vw);
z-index: 0;
  img{
    height: 100%;
    width: 100%;
    animation: rotate 5s infinite;
  }
  @keyframes rotate{
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`