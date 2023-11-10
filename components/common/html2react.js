import parse from "html-react-parser";

const Html2react = ({ html }) => {
  return parse(html);
};

export default Html2react;
