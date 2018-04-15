import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { closeModal} from "../utils/actions";
import ScrollWrapper from "./ScrollWrapper";

import debounce from "lodash/debounce";

const Expanded = styled.div`
  position: absolute;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  text-align: center;
  cursor: pointer;
`;


/* --- COMPONENTS --- */
class Modal extends React.Component {

  constructor(props) {
    super(props);

  }

  onClose(){
    console.log('closing');
    this.props.dispatch(closeModal({}));

  }

  componentDidMount() {
    console.log('modal did mount');
  }

  render() {
    if (this.props.modalContent) {
      return (
        <ScrollWrapper onWindowScroll={() => this.onClose()}>
          <Expanded style={{top: window.pageYOffset}} onClick={() => this.onClose()}>
            {this.props.modalContent && this.props.modalContent.expandContent}
          </Expanded>
        </ScrollWrapper>
      )
    }

    return null;
  }
}

const ModalContainer = connect(
  function mapStateToProps(state) {
    return {
      ...state,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }
)(Modal);

export default ModalContainer;
