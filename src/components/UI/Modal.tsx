import { FC } from 'react';
import { currencyConvert, getItems } from '../../utils/helpers';

const Modal: FC<ModalProps> = ({ isOpen, handleClose, isLoading, exchangeRage, error }) => {

  const amount = getItems("amount")
  if (error) {
    return <p>Sorry Something went wrong</p>
  }
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-md relative z-30">
            <h2 className="text-lg font-semibold mb-4 text-purple-800">Currency Converted To USD</h2>
            {
              isLoading && <p>Loading...</p>
            }
            <span>Dollar rate : {exchangeRage?.conversion_rate}</span>
            <p className="text-lg font-semibold">
              {currencyConvert(amount, 'en-NG', 'NGN')} is approximately <span className='text-purple-900'>{currencyConvert(exchangeRage?.conversion_result, 'en-US', 'USD')
              }</span>
            </p>
            <div className='flex justify-end items-center'>
              <button
                className="mt-4 bg-purple-800 text-white p-2 rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

interface ModalProps {
  isOpen: boolean,
  handleClose: () => void,
  exchangeRage: {
    conversion_rate: number,
    conversion_result: number,
  },
  isLoading: boolean,
  error?: unknown
}
