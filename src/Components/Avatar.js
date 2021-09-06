import styled from 'styled-components';
import { theme } from '../theme/theme';

const AvatarStyle = styled.div`
  height: ${(props) => props.details.height};
  width: ${(props) => props.details.width};
  background-color: ${(props) => props.details.color};
  border-radius: ${(props) => props.details.variant};
  background-image: ${(props) => (props.url ? `url(${props.url})` : null)};
  background-position: center center;
  background-size: cover;
`;

function Avatar({ size, color, id, variant }) {
  const details = {};

  const sizes = Object.entries(theme.avatarSizes);
  for (let each of sizes) {
    if (size === undefined) {
      details.height = `${theme.spacing * each[1]}px`;
      details.width = `${theme.spacing * each[1]}px`;
    }
    if (size === each[0]) {
      details.height = `${theme.spacing * each[1]}px`;
      details.width = `${theme.spacing * each[1]}px`;
    }
  }

  const colors = Object.entries(theme.palette);
  for (let each of colors) {
    if (color === undefined) {
      details.color = each[1];
    }
    if (color === each[0]) {
      details.color = each[1];
    }
  }

  const variants = Object.entries(theme.avatarVariant);
  for (let each of variants) {
    if (variant === undefined) {
      details.variant = each[1];
    }
    if (variant === each[0]) {
      details.variant = each[1];
    }
  }

  return (
    <AvatarStyle id={id} details={details} url={'/baby2.jpg'}></AvatarStyle>
  );
}

let colorOptions = [];
const colors = Object.entries(theme.palette);
for (let each of colors) {
  colorOptions.push(each[0]);
}
let sizeOptions = [];
const sizes = Object.entries(theme.avatarSizes);
for (let each of sizes) {
  sizeOptions.push(each[0]);
}
let variantOptions = [];
const variants = Object.entries(theme.avatarVariant);
for (let each of variants) {
  variantOptions.push(each[0]);
}

Avatar.defaultProps = {
  size: 'small',
  size_Options: sizeOptions,
  color: 'one',
  color_Options: colorOptions,
  variant: 'rounded',
  variant_Options: variantOptions,
};

export default Avatar;
