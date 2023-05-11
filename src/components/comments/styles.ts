import styled from "styled-components";
export const CommentsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  img{
    box-sizing: initial;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      margin-right: 1rem;
  }
  .comment-box{
    flex: 1;
    .comment-content{
    background-color: var(--grey-700);
    border-radius: 8px;
    padding: 1rem;
    
    header{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      button{
        background: transparent;
        border: 0;
        color: var(--grey-400);
        cursor: pointer;
        line-height: 0;
        border-radius: 4px;
        transition: color .2s;
        &:hover{
          color: var(--red-500);
        }
      }
      .author{
        display: flex;
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        strong{
          font-size: 0.875rem;
          line-height: 1.6;

        }
        time{
          font-size: 0.75rem;
          line-height: 1.6;
          color: var(--grey-400);
        }
      }
    }
    p{
      margin-top: 1rem;
      color: var(--grey-300);
    }
  }
  footer{
    margin-top: 1rem;
    button{
      background: transparent;
      border: 0;
      color: var(--grey-400);
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 8px;

      svg{
        margin-right: 0.5rem;
      }

      &:hover{
        color: var(--green-300);
      }
    }
  }
  }

`