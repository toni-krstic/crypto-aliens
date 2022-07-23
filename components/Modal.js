import { Fragment, useRef, useContext } from 'react';
import { AlienContext } from '../context/AlienContext';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/outline';
import { CircleLoader } from 'react-spinners';
import Link from 'next/link';
import Router from 'next/router';
import AlienCard from './AlienCard';

const styles = {
    center: `flex items-center justify-center min-h-screen min-w-[380px]  text-center`,
    backdrop: `fixed inset-0 bg-gray-600 bg-opacity-25 transition-opacity`,
    modalContainer: `inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-xl shadow-gray-400/50 transform transition-all  border-gray-600 border-4 `,
    modalHeaderContainer: `bg-black flex `,
    closeModalButtonContainer: `mt-6 mx-4`,
    closeModalButton: `w-[30px] bg-gray-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`,
    header: `w-full pl-[62px] `,
    titleContainer: `text-center mt-6 `,
    title: `text-2xl font-medium text-gray-500`,
    modalBodyContainer: `bg-black px-8 py-6 `,
    loaderContainer: `w-[300px] h-[200px] flex items-center justify-center`,
    message: `w-full h-full flex items-center justify-center text-xl mt-[20px] text-gray-300 font-bolder`,
    etherscan: `w-full h-full mt-10 flex items-center justify-center text-green-500 text-2xl font-bold cursor-pointer`,
    input: `h-9 bg-gray-700 text-gray-200 rounded-lg p-[10px] flex mt-6`,
    inputBox: `w-full h-full flex items-center justify-center bg-gray-700 focus:outline-none `,
    price: `w-full h-full flex justify-center items-center mt-4 font-bold text-2xl text-gray-500 `,
    button: `mt-6 h-9 w-full inline-flex items-center justify-center rounded-md border border-transparent shadow-md shadow-indigo-500/50 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 `,
};

const Modal = () => {

    const{
        isModalOpen,
        closeModal,
        modalPrice, 
        modalOwner,
        modalDNA,
        modalGen,
        modalBirth,
        isListed,
        currentAccount,
        alienPrice, 
        setAlienPrice,
        mintAlien,
        sellAlien,
        cancelOrder,
        buyAlien,
        isLoading, 
        setIsLoading,
        etherscanLink,
        setEtherscanLink,
        errorMessage,
        setErrorMessage,
        isSelectedETH
    } = useContext(AlienContext);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-30 inset-0 overflow-auto"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <div className={styles.center}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={styles.backdrop} />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={styles.modalContainer}>
              <div className={styles.modalHeaderContainer}> 
                <div className={styles.header}>
                  <div className={styles.titleContainer}>
                    <Dialog.Title as="h3" className={styles.title}>
                      {isLoading ? "Mining..." : modalOwner == 0 ? "Mint" : !isListed ? "Sell" : modalOwner.toUpperCase() == currentAccount.toUpperCase() ? "Cancel" : "Buy"}
                    </Dialog.Title>
                  </div>
                </div>
                <div className={styles.closeModalButtonContainer}>
                    <button 
                      className={styles.closeModalButton} 
                      onClick={() => {
                        closeModal()
                        setAlienPrice('')
                        setEtherscanLink('')
                        setErrorMessage('')
                        setIsLoading(false)
                        Router.reload()
                      }}
                      ref={cancelButtonRef}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-4 w-4" aria-hidden="true" />
                    </button>  
                </div>
              </div>
              <div className={styles.modalBodyContainer}>
                {isLoading ? (
                  <>
                    {!etherscanLink && !errorMessage && (
                      <>
                        <div className={styles.loaderContainer}>
                          <CircleLoader size={100} color={"#d1d5db"}/>
                        </div>
                      </>
                    )}
                    {etherscanLink && (
                      <>
                        <div className={styles.loaderContainer}>
                          <CheckCircleIcon className='h-[150px] w-[150px] text-[#22c55e] stroke-[0.7]' />
                        </div> 
                        <div className={styles.message}>
                            Transaction Successfull!
                        </div>
                        <Link href={`${etherscanLink}`} className={styles.etherscan}>
                          <a className={styles.etherscan} target='_blank'>
                              Transaction Receipt
                          </a>
                        </Link>
                      </>
                    )}
                    {errorMessage && (
                      <>
                        <div className={styles.loaderContainer}>
                          <XCircleIcon className="h-[150px] w-[150px] text-red-600 stroke-[0.7]" />                      
                        </div> 
                        <div className={styles.message}>
                            {errorMessage}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <AlienCard DNA={modalDNA} owner={modalOwner} price={modalPrice} gen={modalGen} birth={modalBirth} />

                    {modalOwner == 0 ? (
                      <>
                        <button
                          type="button"
                          className={styles.button}
                          onClick={() => {
                            mintAlien(modalDNA)
                            setIsLoading(true)
                          }}
                        >
                          Mint
                        </button>
                      </>
                    ) : ( 
                        <>
                          {!isListed ? (
                            <>
                              <div className={styles.input}>
                                <input  
                                type="text"
                                placeholder='Amount...'
                                className={styles.inputBox}
                                onChange={e => setAlienPrice(e.target.value)}
                                value={alienPrice}
                                />  
                              </div>
                              <div className={styles.price}>
                                Price: {''} {alienPrice ? (isSelectedETH ? alienPrice + ' ETH' : alienPrice + ' MATIC') : (isSelectedETH ? '0 ETH' : '0 MATIC') }
                              </div>
                              <button
                                type="button"
                                className={styles.button}
                                onClick={() => {
                                  sellAlien(modalDNA, alienPrice)
                                  setIsLoading(true)
                                }}
                              >
                                Sell
                              </button>
                            </>
                          ) : (
                                <>
                                  {modalOwner.toUpperCase() == currentAccount.toUpperCase() ? (
                                    <>
                                      <button
                                        type="button"
                                        className={styles.button}
                                        onClick={() => {
                                          cancelOrder(modalDNA)
                                          setIsLoading(true)
                                        }}
                                      >
                                        Cancel
                                      </button>
                                    </>
                                  ) : (
                                        <>
                                          <button
                                            type="button"
                                            className={styles.button}
                                            onClick={() => {
                                              buyAlien(modalDNA, modalPrice)
                                              setIsLoading(true)
                                            }}
                                          >
                                            Buy
                                          </button>
                                        </>
                                  )}
                                </>
                              )}
                        </>   
                    )}                  
                  </>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal