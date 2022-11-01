import styled from "styled-components";

export const Cont = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .date {
    height: 25px;
    padding: 2px 5px;
  }
  input {
    margin: 0 10px;
  }
  .select {
    width: 100px;
    height: 30px;
    padding: 5px;
    flex: 1;
  }
  .value {
    height: 25px;
    flex: 1;
  }
  .title {
    height: 25px;
    flex: 2;
  }
  button {
    flex: 1;
    height: 35px;
    cursor: pointer;
    background-color: #00c;
    border: none;
    color: #fff;
    border-radius: 4px;
    transition: all ease 0.4s;
    font-weight: bold;
    margin: 0 10px;
    :hover {
      border: 1px solid #00c;
      background-color: #fff;
      color: #000;
    }
  }
`;
