import React, { useState, useContext } from 'react';
import { AlienContext } from '../context/AlienContext';
import AlienCard from '../components/AlienCard';
import Modal from '../components/Modal';


const styles = {
    container: ` h-screen w-full flex flex-wrap justify-center items-center `,
    cardContainer: `m-5`,
    atributtesContainer: ` h-[400px] w-[400px] flex flex-col items-ceter justify-start border-solid border-gray-600 border-4 shadow-lg shadow-gray-400/50 rounded-xl m-5 `,
    atributtesSlider: ` p-2 flex flex-col items-center`,
    menu: `w-[400px] flex items-center justify-center`,
    menuItem: ` cursor-pointer p-2 text-gray-300 `,
    button: ` h-[40px] w-[150px] whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-md shadow-md shadow-indigo-500/50 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 `,
    slidersContainer: ` h-[300px] flex flex-col items-center `,
    slider: ` cursor-pointer form-range appearance-none w-[370px] h-1 p-0 m-5 bg-gray-300 rounded-md focus:outline-none focus:ring-0 focus:shadow-none `
};

const AlienFactory = () => {
    const [DNA, setDNA] = useState('7865487959540765');
    const [colors, setColors] = useState(true);
    const [shapes, setShapes] = useState(false);
    const [attributes, setAttributes] = useState(false);

    const handleColors = () => {
        setColors(true);
        setShapes(false);
        setAttributes(false);
    } 

    const handleShapes = () => {
        setColors(false);
        setShapes(true);
        setAttributes(false);
    } 

    const handleAttributes = () => {
        setColors(false);
        setShapes(false);
        setAttributes(true);
    } 

    const {
        openModal
    } = useContext(AlienContext);

  return (
    <>
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <AlienCard DNA={ DNA } />
        </div>
        <div className={styles.atributtesContainer}>

            <div className={styles.menu}>
                <label onClick={handleColors} className={styles.menuItem}>Colors</label>
                <label onClick={handleShapes} className={styles.menuItem}>Shapes</label>
                <label onClick={handleAttributes} className={styles.menuItem}>Atributtes</label>
            </div>
            
            <div className={styles.slidersContainer}>
                {colors &&
                <>
                    <div className={styles.atributtesSlider}>
                        <label className='form-label text-gray-400'>Primary Body Color</label>
                        <input type="range" min={0} max={999}  value={DNA.slice(1,4)} className={styles.slider} onChange={(e) => {
                            if(e.target.value<10){setDNA(DNA.slice(0,1) + '00'+ e.target.value + DNA.slice(4))}
                            else if(e.target.value<100 && e.target.value>9){setDNA(DNA.slice(0,1) + '0' + e.target.value + DNA.slice(4))}
                            else {setDNA(DNA.slice(0,1) + e.target.value + DNA.slice(4))}}}/>
                    </div>
                
                    <div className={styles.atributtesSlider}>           
                        <label className='form-label text-gray-400'>Secondary Body Color</label>
                        <input type="range" min={0} max={999} value={DNA.slice(4,7)} className={styles.slider} onChange={(e) => {
                            if(e.target.value<10){setDNA(DNA.slice(0, 4) + '00' + e.target.value + DNA.slice(7))}
                            else if(e.target.value<100 && e.target.value>9){setDNA(DNA.slice(0, 4) + '0'+ e.target.value + DNA.slice(7))}
                            else {setDNA(DNA.slice(0, 4) + e.target.value + DNA.slice(7))}}}/>
                    </div>

                    <div className={styles.atributtesSlider}>
                        <label className='form-label text-gray-400'>Eye Color</label>
                        <input type="range" min={0} max={999} value={DNA.slice(7,10)} className={styles.slider} onChange={(e) => {
                            if(e.target.value<10){setDNA(DNA.slice(0, 7) + '00' + e.target.value + DNA.slice(10))}
                            else if(e.target.value<100 && e.target.value>9){setDNA(DNA.slice(0, 7) + '0' + e.target.value + DNA.slice(10))}
                            else {setDNA(DNA.slice(0, 7) + e.target.value + DNA.slice(10))}}}/>            
                    </div>
                </>
                }

                {shapes &&
                <>
                    <div className={styles.atributtesSlider}>
                        <label className='form-label text-gray-400'>Head Shape</label>  
                        <input type="range" min={1} max={9}  value={DNA.slice(0,1)} className={styles.slider} onChange={(e) => {setDNA(e.target.value + DNA.slice(1))}}/>
                    </div>

                    <div className={styles.atributtesSlider}>            
                        <label className='form-label text-gray-400'>Body Marks</label>
                        <input type="range" min={0} max={9}  value={DNA.slice(10,11)} className={styles.slider} onChange={(e) => {setDNA(DNA.slice(0,10) + e.target.value + DNA.slice(11))}}/>
                    </div>
                </>
                }

                {attributes && 
                <>
                    <div className={styles.atributtesSlider}>
                        <label className='form-label text-gray-400'>Home Planet</label>
                        <input type="range" min={0} max={999} value={DNA.slice(11,14)} className={styles.slider} onChange={(e) => {
                            if(e.target.value<10){setDNA(DNA.slice(0, 11) + '00' + e.target.value + DNA.slice(14))}
                            else if(e.target.value<100 && e.target.value>9){setDNA(DNA.slice(0, 11) + '0' + e.target.value + DNA.slice(14))}
                            else {setDNA(DNA.slice(0, 11) + e.target.value + DNA.slice(14))}}}/>
                    </div>

                    <div className={styles.atributtesSlider}>
                        <label className='form-label text-gray-400'>Role</label>
                        <input type="range" min={0} max={9} value={DNA.slice(14,15)} className={styles.slider} onChange={(e) => {setDNA(DNA.slice(0,14) + e.target.value + DNA.slice(15))}}/>
                    </div>
                    
                    <div className={styles.atributtesSlider}>
                        <label className='form-label text-gray-400'>Special Ability</label>
                        <input type="range" min={0} max={9} value={DNA.slice(15)} className={styles.slider} onChange={(e) => {setDNA(DNA.slice(0,15) + e.target.value)}}/>
                    </div>
                </>
                }
            </div>
            <div className='flex'>
            <div className="w-[400px] flex justify-start p-4">
                <button
                onClick={() => openModal(DNA, 0, 0, false, undefined, undefined)}
                className={styles.button}
                >
                Mint Alien
                </button>
            </div>
            <div className="w-[400px] justify-end p-4">
                <button
                onClick={() => {
                    const min = Math.ceil(1000000000000000)
                    const max = Math.floor(9999999999999999)
                    var randomDNA = Math.floor(Math.random() * (max - min + 1) + min)
                    setDNA(`${randomDNA}`)
                    }
                }
                className={styles.button}
                >
                Random Alien
                </button>
            </div>
            

            </div>
        </div>
    </div>
    <Modal/>
    </>
  )
}

export default AlienFactory