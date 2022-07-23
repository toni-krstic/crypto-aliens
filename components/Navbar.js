import { Fragment, useContext } from 'react';
import { AlienContext } from '../context/AlienContext';
import { Popover, Transition } from '@headlessui/react';
import ethLogo from '../assets/ethereum-eth-logo.svg';
import polygonLogo from '../assets/polygon-matic.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
  MenuIcon,
  ShoppingBagIcon,
  UserAddIcon,
  XIcon,
  UserGroupIcon
} from '@heroicons/react/outline';

const styles = {
  container: `relative bg-black border-b-2 border-gray-600 `,
  menuContainer: `absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40`,
  menu: `rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-500`,
  menuHeaderContainer: `flex items-center justify-between`,
  closeMenuButton: `bg-gray-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 `,
  buttonContainer: `-mr-2 -my-2 md:hidden`,
  button: `bg-gray-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`,
  menuItems: `pt-5 pb-6 px-5`,
  menuItem: `-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`,
  menuIcon: `flex-shrink-0 h-6 w-6 text-indigo-600`,
  menuItemText: `ml-3 text-base font-medium text-gray-300`,
  menuConnectButton: `w-full cursor-pointer flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700`,
  navbarContainer: `max-w-7xl mx-auto px-4 sm:px-6`,
  navbar: `flex justify-between items-center py-6 md:space-x-10`,
  navbarItems: `hidden md:flex space-x-10`,
  navbarItem: `text-base font-medium text-gray-300 hover:text-gray-100 whitespace-nowrap cursor-pointer flex items-center`,
  connectWalletContainer: `hidden md:flex items-center justify-end md:flex-1 lg:w-0 `,
  connectWalletButton: `ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700`,
  logoContainer: `flex flex-col justify-start lg:w-0 lg:flex-1 `,
  ethLogo: `mx-5 p-1 flex items-center rounded-full cursor-pointer flex-shrink-0`,
  polygonLogo: `p-1 flex items-center rounded-full cursor-pointer flex-shrink-0`,
  ethPolygonContainer: ` flex items-center justify-center md:hidden`
};

const Navbar = () => {

  const {
    connectWallet,
    currentAccount,
    isSelectedETH,
    changeChain
  } = useContext(AlienContext);

  return (
    <Popover className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Link href="/" className='border-none'>
              <svg height="30" width="180">
                <text x="0" y="20" fill='white' className="font-Audiowide text-2xl cursor-pointer ">CryptoAliens</text>
              </svg>
            </Link>
          </div>
          <div className={styles.ethPolygonContainer}>
            <div className={styles.ethLogo} style={{ backgroundColor: isSelectedETH ? 'white' : 'black' }} onClick={() => changeChain('ETH')}>
                <Image src={ethLogo} alt="Ethereum Logo" height={25} width={25}/>
              </div>
              <div className={styles.polygonLogo} style={{ backgroundColor: isSelectedETH ? 'black' : 'white' }} onClick={changeChain}>
                <Image src={polygonLogo} alt="Polygon Logo" height={25} width={25}/>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Popover.Button className={styles.button}>
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className={styles.navbarItems}>
            <Link href="MyAliens" className={styles.navbarItem}>
              <span className={styles.navbarItem}>
                My Aliens 
              </span>
            </Link>
            <Link href="Marketplace" className={styles.navbarItem}>
              <span className={styles.navbarItem}>
                Marketplace 
              </span>
            </Link>
            <Link href="AlienFactory" className={styles.navbarItem}>
              <span className={styles.navbarItem}>
                Create Alien 
              </span>
            </Link>
          </Popover.Group>
          <div className={styles.connectWalletContainer}>
            <div className={styles.ethLogo} style={{ backgroundColor: isSelectedETH ? 'white' : 'black' }} onClick={() => changeChain('ETH')}>
              <Image src={ethLogo} alt="Ethereum Logo" height={25} width={25}/>
            </div>
            <div className={styles.polygonLogo} style={{ backgroundColor: isSelectedETH ? 'black' : 'white' }} onClick={changeChain}>
              <Image src={polygonLogo} alt="Polygon Logo" height={25} width={25}/>
            </div>
            <button
              onClick={connectWallet}
              className={styles.connectWalletButton}
            >
              {currentAccount ? `${currentAccount.slice(0,7) + '...' + currentAccount.slice(38)}` : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className={styles.menuContainer}>
          <div className={styles.menu}>
            <div className={styles.menuItems}>
              <div className={styles.menuHeaderContainer}>
                <svg height="30" width="160">
                  <text x="0" y="20" fill='white' className="font-Audiowide text-xl border-none focus:outline-none">CryptoAliens</text>
                </svg>
                <div className="-mr-2">
                  <Popover.Button className={styles.closeMenuButton}>
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                    <Link href='MyAliens'>
                      <a className={styles.menuItem}>
                        <UserGroupIcon className={styles.menuIcon} aria-hidden="true" />
                        <span className={styles.menuItemText}>My Aliens</span>
                      </a>
                    </Link>
                    <Link href='Marketplace'>
                      <a className={styles.menuItem}>
                        <ShoppingBagIcon className={styles.menuIcon} aria-hidden="true" />
                        <span className={styles.menuItemText}>Marketplace</span>
                      </a>
                    </Link>
                    <Link href='AlienFactory'>
                      <a className={styles.menuItem}>
                        <UserAddIcon className={styles.menuIcon} aria-hidden="true" />
                        <span className={styles.menuItemText}>Create Alien</span>
                      </a>
                    </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
                <a
                  onClick={connectWallet}
                  className={styles.menuConnectButton}
                >
                  {currentAccount ? `${currentAccount.slice(0,7) + '...' + currentAccount.slice(38)}` : "Connect Wallet"}
                </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar