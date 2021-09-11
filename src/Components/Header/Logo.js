import styled from 'styled-components';

const LogoStyle = styled.div`
  width: 80px;
  height: 80px;
  background-image: url('logo.png');
  margin-left: 20px;
  opacity: ${(props) => props.opacity};
`;

const Logo = ({ opacity = 1 }) => {
  return <LogoStyle opacity={opacity}></LogoStyle>;
};
Logo.defaultProps = {
  opacity: 1,
  opacity_Options: [0.5, 1],
};
export default Logo;
