import { useContext } from 'react';
import { AlienContext } from '../context/AlienContext';
import homePlanets from '../constants/homePlanets';
import roles from '../constants/roles';
import specialAbilities from '../constants/specialAbilities';
import ethLogo from '../assets/ethereum-eth-logo.svg';
import polygonLogo from '../assets/polygon-matic.svg';
import Image from 'next/image';
import Alien from './Alien';

const AlienCard = ({ DNA, gen, birth, owner, price }) => {
    const styles = {
        container: ` h-[450px] w-[300px] bg-black flex flex-col justify-center border-4 border-gray-600 rounded-2xl shadow-lg shadow-gray-400/50 p-6 md:mt-0 `,
        alienContainer: `relative top-[100px]`,
        attribute: ` font-VT323 text-md text-gray-600 `,
        attributeIcon: `w-4 h-4 inline-block text-gray-600 ml-1`,
        homePlanet: ` relative top-[95px] left-[-20px] bg-yellow-200 w-[140px] rounded-xl mb-2 `,
        role: ` relative top-[62px] left-[125px] bg-yellow-200 w-[140px] rounded-xl mb-2 `,
        specialAbility: ` relative top-[60px] left-[-20px] bg-yellow-200 w-[140px] rounded-xl mb-2 `,
        DNA: ` relative top-[27px] left-[125px] bg-yellow-200 w-[140px] rounded-xl mb-2 `,
        gen: `relative top-[-401px] left-[-6px] w-max bg-yellow-200 px-2 rounded-xl`,
        birth: `relative top-[-93px] left-[-20px] bg-yellow-200 w-[140px] px-2 rounded-xl`,
        owner: `relative top-[-118px] left-[125px] bg-yellow-200 w-[140px] px-2 rounded-xl`,
        price: `relative top-[-476px] left-[190px] w-max bg-yellow-200 px-2 rounded-xl`
    };

    const { isSelectedETH } = useContext(AlienContext);

  return (
    <div className={styles.container}>
        <div className={styles.alienContainer}>
            <Alien DNA={DNA} />
        </div>
        <div className={styles.homePlanet}>
            <svg className={styles.attributeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className={styles.attribute}>  {homePlanets[DNA.slice(11,14)].toUpperCase()}</span>
        </div>
        <div className={styles.role}>
        <svg className={styles.attributeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span className={styles.attribute}>  {roles[DNA.slice(14,15)].toUpperCase()}</span>  
        </div>
        <div className={styles.specialAbility}>
        <svg className={styles.attributeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <span className={styles.attribute}>  {specialAbilities[DNA.slice(15)].toUpperCase()}</span>
        </div>
        <div className={styles.DNA}>
        <svg className={styles.attributeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
            <span className={styles.attribute}>  {DNA}</span>
        </div>
        {gen ? ( 
                <div className={styles.gen}>
                    <span className={styles.attribute}>
                        Gen: {gen}
                    </span>
                </div>
        ) : (

                <div className={styles.gen}>
                    <span className={styles.attribute}>
                        Gen: ?
                    </span>
                </div>
        )}
        {birth ? (
            <>
                <div className={styles.birth}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-gray-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                    <span className={styles.attribute}>
                        {`  ${birth.toLocaleDateString()}`}
                    </span>
                </div>
            </>
        ) : (
            <>
                <div className={styles.birth}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-gray-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                    <span className={styles.attribute}>
                        ???
                    </span>
                </div>
            </>
        )}
        {owner ? (
                <>
                    <div className={styles.owner}>
                        <span className={styles.attribute}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 w-4 h-4 inline-block text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                            </svg>  
                                {owner.slice(0,7) + '...' + owner.slice(38)}
                        </span>
                    </div>
                </>
        ) : (
                <>
                    <div className={styles.owner}>
                        <span className={styles.attribute}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 w-4 h-4 inline-block text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                            </svg>  
                                {'???'}
                        </span>
                    </div>
                </>
        )}
        {price ? (
            <>
                <div className={styles.price}>
                    <span className={styles.attribute}>
                        {price}
                        {isSelectedETH ? 
                            <Image src={ethLogo} alt="Ethereum Logo" height={15} width={15}/>
                        :
                            <Image src={polygonLogo} alt="Ethereum Logo" height={15} width={15}/>
                        }
                    </span>
                </div>
            </>
        ) : (
            <>
                <div className={styles.price}>
                    <span className={styles.attribute}>
                        0
                        {isSelectedETH ? 
                            <Image src={ethLogo} alt="Ethereum Logo" height={15} width={15}/>
                        :
                            <Image src={polygonLogo} alt="Ethereum Logo" height={15} width={15}/>
                        }
                    </span>
                </div>
            </>
        )}
    </div>
  )
}

export default AlienCard