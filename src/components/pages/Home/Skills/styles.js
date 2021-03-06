import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  @media (max-width: 900px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const SkillsRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  width: 80%;
  max-width: 1000px;
  @media (max-width: 900px){
    flex-direction: column;
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    padding: 10px;
    margin: 10px
  }

  & img {
    width: 100px;
  }

  & p {
    color: black;
    font-size: 20px;
  }
`;