import styled from "styled-components";

export default styled.div`
  width:100%;
  border-radius: 10px;
  margin: auto;
  color: var(--color-white);
  overflow: hidden;
  .content::before {
    content: "";
    position: absolute;
    height: 0;
    aspect-ratio: 1/1;
    background: black;
    top: -100px;
    left: -100px;
    border-radius: 100%;
    transition: 0.8s all ease;
    z-index: -1
  }

  .content::after {
    content: "";
    position: absolute;
    height: max(20%, 200px);
    aspect-ratio: 1/1;
    background: var(--color-buff);
    top: -100px;
    left: -100px;
    z-index: -2;
    border-radius: 100%;
    transition: 0.8s all ease;
    p{
      transition: 0.8s all ease;
    }    
    h2{
      transition: 0.8s all ease;
    }
  }

  :hover {
    p{
      color:var(--color1);
    }
    .content::before {
      height: max(20%, 200px)
    }
    .content::after {
      height: 250%;
      border-radius: 0;
    }
    .card-heading{
      color:lightgreen;
    }
  }

  .icon img {
    width: 40px;
    height: 40px;
    z-index: 2;
  }

  .card-heading {
    color:var(--color-mint-green)
  }
`;