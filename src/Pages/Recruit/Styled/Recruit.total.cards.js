import styled from 'styled-components';
import * as tokens from '../../tokens';

export const TotalWrapper = styled.div`
  width: 100%;
  height: 2500px;
  padding-top: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
export const TotalCardsWrapper = styled.div`
  width: 930px;
  height: 1600px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
export const SortContainer = styled.div`
  width: 930px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const SortText = styled.div`
  font-size: 16px;
  color: ${(props) => (props.selected ? '#DD518C' : 'black')};

  padding: 5px;
`;
export const TotalTopWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
export const Title = styled.div`
  font-size: 35px;
  font-weight: medium;
`;
export const SearchWrapper = styled.div`
  width: 738px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 2px solid gray;

  margin-top: 20px;
`;

export const SearchInputBox = styled.input`
  font-family: Pretendard;
  width: 670px;
  height: 27px;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  outline: none;
`;

export const SearchInputIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const PaginationWrapper = styled.div`
  width: 200px;
  height: 100px;

  display: flex;
  flex-direction: row;
  top: 0;
  justify-content: center;
  margin-top: 15px;
`;
export const PaginationNumber = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0.5px solid #9d9d9d;
  background-color: white;
  ${(props) =>
    props.active &&
    `
      /* 선택된 페이지 번호의 스타일 */
      background-color:#DD518C ;
      color: white;
    `};
`;