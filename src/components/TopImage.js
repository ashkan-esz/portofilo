import styled from 'styled-components';

const TopImage = styled.header`
  height: 40vh;
  background: url(${props => props.image}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TopImage;