import styled from "styled-components";
export const Container = styled.article`
  background-color: var(--grey-800);
  border-radius: 8px;
  padding: 2.5rem ;
  &:not(:first-child) {
    margin-top: 2rem;
  }
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    time{
      font-size: .875rem;
      color: var(--green-400);


    }
    .author{
      display: flex;
      align-items: center;
      gap: 1rem;
      img{
        box-sizing: initial;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      border: 4px solid var(--grey-800);
      outline: 2px solid var(--green-500);
      }
      .author-info{
        display: flex;
        flex-direction: column;
        strong{
          color: var(--green-100);
          line-height: 1.6;
        }
        span{
          font-size: 0.875rem;
          color: var(--green-400);
        }
      }
    }
  }
  .content{
    line-height: 1.6;
    color: var(--grey-300);
    margin-top: 1.5rem;
    p{
      margin-top: 1rem;
    }
    a{
      font-weight: bold;
      color: var(--green-500);
      transition: color .2s;
      :hover{
        color: var(--green-300);
      }
    }
  }
`
export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--grey-600);
  strong{
    line-height: 1.6;
    color: var(--grey-100);
  }
  textarea{
    width: 100%;
    background-color: var(--grey-900);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--grey-100);
    line-height: 1.4;
    margin-top: 1rem;

  }
  :focus-within footer{
      visibility: visible;
      max-height: none;
    }
  footer{
    visibility: hidden;
    max-height: 0;
    button{
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background-color: var(--green-500);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
    transition: background-color .2s;

    &:hover{
      background-color: var(--green-300);
    }
  }
  }

`