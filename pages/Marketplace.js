import { useContext } from 'react';
import { AlienContext } from '../context/AlienContext';
import AlienCard from '../components/AlienCard';
import Modal from '../components/Modal';
import { RingLoader } from 'react-spinners';

const styles = {
  loaderContainer: `h-screen w-full flex items-center justify-center`,
  container: ` h-screen w-full flex flex-wrap items-start justify-center md:justify-start overflow-auto `,
  cardContainer: `m-5 transform transition duration-300 hover:scale-105 flex justify-center items-center cursor-pointer flex-col `,
  message: `font-Audiowide text-4xl text-gray-200 text-center mt-8`
};

const Marketplace = () => {

  const {
    listedAliens,
    openModal,
    isLoading
  } = useContext(AlienContext);


  return (
    <>
      {isLoading &&
        <div className={styles.loaderContainer}>
          <RingLoader size={100} color={"#d1d5db"}/>
        </div>
      }
      <div className={styles.container} >
        {!isLoading && listedAliens.length === 0 ? 
          <div className={styles.loaderContainer}>
            <p className={styles.message}>
              Currently there are no Aliens for sale!!!
            </p>
          </div>
          :
          listedAliens.map(( alien )=>(
            <div onClick={() => {
              openModal(alien.dna, alien.price, alien.owner, alien.listed, alien.gen, alien.birth)
            }} className={styles.cardContainer} key={alien.dna}>
                <AlienCard DNA={alien.dna} gen={alien.gen} birth={alien.birth} owner={alien.owner} price={alien.price}/>
            </div>
        ))}
        <Modal/>
      </div>
    </>
  )
}

export default Marketplace