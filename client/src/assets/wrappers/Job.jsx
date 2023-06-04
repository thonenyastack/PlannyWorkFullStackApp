import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    width: min(140px, 80vw)
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    // background: var(--primary-500);
    background: #1c6d8b;
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.2rem;
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
    @media screen and (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1201px) {
      grid-template-columns: 1fr;
    }
    // @media (min-width: 576px) {
    //   grid-template-columns: 1fr 1fr;
    // }
    // @media (min-width: 992px) {
    //   grid-template-columns: 1fr 1fr;
    // }
    // @media (min-width: 1120px) {
    //   grid-template-columns: 1fr;
    // }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
  .img {
  width: min(400px, 80vw)
  height: min(360px, 70vh)
  
  }
`;

export default Wrapper;
