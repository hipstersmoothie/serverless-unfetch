import fetch from "isomorphic-unfetch";

const Index = ({ people }) => <ul>fpp</ul>;

Index.getInitialProps = async () => {
  // This should do nothing it just using the imported fetch module
  const response = await fetch("http://localhost:3000/");
  return { response };
};

export default Index;
