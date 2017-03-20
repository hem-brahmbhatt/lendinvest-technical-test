import React, {PropTypes} from 'react';

import Modal from 'react-modal';
import { Money } from '../utils/formatter';
import moment from 'moment';

export default class InvestModal extends React.Component {

  render() {
    const { isOpen, close, title, amountAvailable, remainingTime } = this.props;
    return (
      <Modal
        className="modal"
        isOpen={isOpen}
        onRequestClose={close}
        contentLabel="InvestModal"
      >
        <h2>Invest in Loan</h2>
        <p>{title}</p>
        <p>Amount available: {Money.format(amountAvailable)}</p>
        <p>Loan ends in: {moment.duration(Number.parseInt(remainingTime), 'seconds').humanize()}</p>
        <div>
          <button onClick={close}>Invest</button>
        </div>
      </Modal>
    );
  }

}

InvestModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  amountAvailable: PropTypes.number,
  remainingTime: PropTypes.number
}
