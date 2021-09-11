# Hello there!

This is a little styled component with React component viewer I'm working on, partially as another way to deep dive into React and see the fine little detials that I don't always have a chance to experiement with on client projects, it's also a nifty way at letting clientelle see the pieces of the project as they are built. They can fiddle with it and not mess with your project.

It's not complete, but so far - it recursively searches your components folder and created an index.js that imports all components and exports them as an array.

It builds from the view folder.

The sidebar takes the array and created buttons that set the component to the component assiciated with the button.

The Main component shows us the component (initally with default props)

The bottom Main gives us the selectors to play with the props. Soon to each items show css as well (parent and children).

---

It does require some configuration on your components, but its not too much. Unless you have props defining each and every css property.

ex for a component with changing bg color

import styled from 'styled-components';
import { theme } from '../../theme/theme.js';

const paletteArray = Object.entries(theme.palette);
const colorNames = paletteArray.map((color) => {
return color[0];
});

const FooterStyle = styled.div` background-color: ${(props) => props.details.color}; height: 100px;`;

const Footer = ({ bgColor = 'one' }) => {
let details = {};
for (let each of paletteArray) {
if (bgColor === each[0]) {
details.color = each[1];
}
}
if (details.color === undefined) details.color = 'grey';

return <FooterStyle details={details}>Footer</FooterStyle>;
};

Footer.defaultProps = {
bgColor: 'one',
bgColor_Options: colorNames,
};

export default Footer;

1. pull colors array from theme

2. convert to array, map and return colors

3. loop through paletteArray and set if's for each potential color - default if undefined just in case (usually to color1 or color5)

4. pass default props for the item (usually color1 or color5)

5. pass array of colorNames as '<property>\_Options': colorNames

---

This pattern can be followed for any values being manupilated via props. eg css, a number you create an array from than iterate over for items, really anything you need.
