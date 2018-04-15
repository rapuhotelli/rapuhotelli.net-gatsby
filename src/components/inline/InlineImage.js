import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/constants"
import { connect } from "react-redux";
import { openModal } from "../../utils/actions";

const StyledInlineImage = styled.figure`
  margin-bottom: 1.45rem;
  padding: 1rem;
  border: 1px solid ${colors.gray};
  
  @media (max-width: 800px) {
    padding: 0;
    border: 0;
  }
  
`;

const ExpandedImage = (props) => {
  // <img src={e.currentTarget.querySelector('a').href} style={{maxWidth: '100vw', maxHeight: '100vh'}} />
  return <div style={{
    width: '100%',
    height: '100%',
    maxWidth: '1080px',
    backgroundImage: 'url('+props.url+')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    margin: 'auto'
  }} />
}

const Figcaption = styled.figcaption`
  font-style: italic;
  color: ${colors.orange};
  text-align: center;
  padding-top: 1rem;
`;


class InlineImage extends React.Component {

  expandImage = (e) => {
    e.preventDefault();

    // Dispatch!
    this.props.dispatch(openModal({
      rect: e.target.getBoundingClientRect(),
      hrefImage: e.currentTarget.querySelector('a').href,
      expandContent: <ExpandedImage url={e.currentTarget.querySelector('a').href}/>,
      onClose: () => console.log("fire at closing event"),
      onConfirm: () => console.log("fire at confirming event"),
    }));

    return false;
  };


  getImageElement = children => children.filter((child) => (child.type === 'a' || child.type === 'img'))[0];

  getCaption = children => children.filter((child) => child.type === 'figcaption')[0];

  render() {
    const image = this.getImageElement(this.props.children);
    const caption = this.getCaption(this.props.children);
    return (
      <StyledInlineImage>
        <div onClick={this.expandImage}>
          {image}
        </div>
        <Figcaption>
          {caption}
        </Figcaption>
      </StyledInlineImage>
    );
  }
}

const InlineImageContainer = connect(
  null,
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    }
  }
)(InlineImage);

export default InlineImageContainer;