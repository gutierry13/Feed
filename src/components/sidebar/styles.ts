import styled from "styled-components";
export const Aside = styled.aside`
  background-color: var(--grey-800);
  border-radius: 8px;
  overflow: hidden;
  img{
    width: 100%;
    height: 72px;
    object-fit: cover;
    object-position: center center;
   
  }
  .profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      box-sizing: initial;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      border: 4px solid var(--grey-800);
      outline: 2px solid var(--green-500);
      margin-top: -2rem;
      
    }
    strong{
      margin-top: 1rem;
      color: var(--grey-100);
      line-height: 1.6;
    }
    span{
      font-size: 0.875rem;
      color: var(--grey-400);
      line-height: 1.6;
    }
  }
  footer{
    border-top: 1px solid var(--grey-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    a{
      background-color: transparent;
      color: var(--green-500);
      border: 1px solid var(--green-500);
      border-radius: 8px;
      height: 50px;
      font-weight: bold;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      transition: all .2s;
      &:hover{
        background-color: var(--green-500);
        color: var(--white);
      }
    }
  }
`
