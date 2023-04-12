import styled from "styled-components";
import ReactPaginate from 'react-paginate';

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
  margin-bottom: 30px;
  font-size: 18px;
  
  .selected {
    color: ${(prop) => prop.theme.footer};
  }
  a {
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  .activeLink{
    color: #FFFFFF;
  }
  .prev{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background-color: ${(prop)=> prop.theme.header};
    a:hover,
    a:focus {
        color: #FFFFFF;
    }
  }
  .page{
    min-width: 15px;
    height: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${(prop)=> prop.theme.header};
    a:hover,
    a:focus {
        color: #FFFFFF;
    }
    &:hover,
    &:focus {
        color: #FFFFFF;
        background-color: ${(prop)=> prop.theme.footer};
    }
    
  }
/* .container{
}
.next{
}
.linkclass{
}
.pagebuilder{
} */
`;