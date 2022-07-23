import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { abi, contractAddressETH, contractAddressPolygon } from '../constants/contract';
import Router from 'next/router';

export const AlienContext = createContext();

export const AlienProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [currentAccount, setCurrentAccount] = useState('');
  const [aliens, setAliens] = useState([]);
  const [listedAliens, setListedAliens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [etherscanLink, setEtherscanLink] = useState('');
  const [alienPrice, setAlienPrice] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDNA, setModalDNA] = useState('0');
  const [modalPrice, setModalPrice] = useState('0');
  const [modalOwner, setModalOwner] = useState('0');
  const [modalGen, setModalGen] = useState('');
  const [modalBirth, setModalBirth] = useState('');
  const [isListed, setIsListed] = useState(false);
  const [isSelectedETH, setIsSelectedETH] = useState(true);


  const openModal = (dna, price, owner, listed, gen, birth) => {
    setModalDNA(dna);
    setModalPrice(price);
    setModalOwner(owner);
    setIsListed(listed);
    setModalGen(gen);
    setModalBirth(birth);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const connectWallet = () => {
    if (localStorage?.getItem('isWalletConnected') === 'true') {
      localStorage.setItem('isWalletConnected', false);
      setCurrentAccount();
    } else {
      connectMetamask();
    }
  }

  const changeChain = (chain) => {
    if (chain === 'ETH') {
      localStorage.setItem('isETHSelected', true);
      setIsSelectedETH(true);
    } else {
      localStorage.setItem('isETHSelected', false);
      setIsSelectedETH(false);
    }
  }


  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        connectMetamask();
        if (localStorage?.getItem('isETHSelected') === 'true') {
          changeChain('ETH');
        } else {
          changeChain();
        }
      }
    }
  }, []);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res);
        localStorage.setItem('isWalletConnected', true);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount) => {
    setCurrentAccount(newAccount[0]);
    setIsLoading(true);
    try {
      const { ethereum } = window;
      if (ethereum) {
        if (localStorage?.getItem('isETHSelected') === 'true') {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressETH, abi, signer);
          const balances = await Factory.tokensOfOwner(newAccount[0]);
          let aliensArray = [];
          for (let i = 0; i < balances.length; i += 1) {
            let alien = {
              owner: '',
              dna: '',
              birth: new Date(0),
              gen: '',
              price: '',
              listed: false
            };
            const rez = await Factory.getAlien(balances[i]);
            alien.owner = rez[0].toString();
            alien.dna = rez[1].toString();
            alien.birth.setUTCSeconds(Number(rez[2].toString()));
            alien.gen = rez[3].toString();
            alien.price = ethers.utils.formatEther(rez[4].toString());
            alien.listed = rez[5];
            aliensArray[i] = alien;
          }
          setAliens(aliensArray)
          const orderBalance = await Factory.getAllOrders();
          let listedAliensArray = [];
          for (let i = 0; i < orderBalance.length; i += 1) {
            let alien = {
              dna: '',
              birth: new Date(0),
              gen: '',
              owner: '',
              price: ''
            };
            const rez = await Factory.getAlien(orderBalance[i]);
            alien.owner = rez[0].toString();
            alien.dna = rez[1].toString();
            alien.birth.setUTCSeconds(Number(rez[2].toString()));
            alien.gen = rez[3].toString();
            alien.price = ethers.utils.formatEther(rez[4].toString());
            alien.listed = rez[5];
            listedAliensArray[i] = alien;
          }
          setListedAliens(listedAliensArray);
          setIsLoading(false);
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressPolygon, abi, signer);
          const balances = await Factory.tokensOfOwner(newAccount[0]);
          let aliensArray = [];
          for (let i = 0; i < balances.length; i += 1) {
            let alien = {
              owner: '',
              dna: '',
              birth: new Date(0),
              gen: '',
              price: '',
              listed: false
            };
            const rez = await Factory.getAlien(balances[i]);
            alien.owner = rez[0].toString();
            alien.dna = rez[1].toString();
            alien.birth.setUTCSeconds(Number(rez[2].toString()));
            alien.gen = rez[3].toString();
            alien.price = ethers.utils.formatEther(rez[4].toString());
            alien.listed = rez[5];
            aliensArray[i] = alien;
          }
          setAliens(aliensArray);
          const orderBalance = await Factory.getAllOrders();
          let listedAliensArray = [];
          for (let i = 0; i < orderBalance.length; i += 1) {
            let alien = {
              dna: '',
              birth: new Date(0),
              gen: '',
              owner: '',
              price: ''
            };
            const rez = await Factory.getAlien(orderBalance[i]);
            alien.owner = rez[0].toString();
            alien.dna = rez[1].toString();
            alien.birth.setUTCSeconds(Number(rez[2].toString()));
            alien.gen = rez[3].toString();
            alien.price = ethers.utils.formatEther(rez[4].toString());
            alien.listed = rez[5];
            listedAliensArray[i] = alien;
          }
          setListedAliens(listedAliensArray);
          setIsLoading(false);
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    Router.reload();
  };

  const mintAlien = async (DNA) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        if (localStorage?.getItem('isETHSelected') === 'true') {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressETH, abi, signer);
          const waveTxn = await Factory.createGenXAlien(DNA);
          await waveTxn.wait();
          setEtherscanLink(`https://goerli.etherscan.io/tx/${waveTxn.hash}`);
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressPolygon, abi, signer);
          const waveTxn = await Factory.createGenXAlien(DNA);
          await waveTxn.wait();
          setEtherscanLink(`https://mumbai.polygonscan.com/tx/${waveTxn.hash}`);
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Transaction Failed");
    }
  }

  const sellAlien = async (DNA, price) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        if (localStorage?.getItem('isETHSelected') === 'true') {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressETH, abi, signer);
          const waveTxn = await Factory.sellAlien(DNA, ethers.utils.parseEther(price));
          await waveTxn.wait();
          setEtherscanLink(`https://goerli.etherscan.io/tx/${waveTxn.hash}`);
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressPolygon, abi, signer);
          const waveTxn = await Factory.sellAlien(DNA, ethers.utils.parseEther(price));
          await waveTxn.wait();
          setEtherscanLink(`https://mumbai.polygonscan.com/tx/${waveTxn.hash}`);
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Transaction Failed");
    }
  }

  const buyAlien = async (DNA, price) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        if (localStorage?.getItem('isETHSelected') === 'true') {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressETH, abi, signer);
          const waveTxn = await Factory.buyAlien(DNA, { value: ethers.utils.parseEther(price) });
          await waveTxn.wait();
          setEtherscanLink(`https://goerli.etherscan.io/tx/${waveTxn.hash}`);
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressPolygon, abi, signer);
          const waveTxn = await Factory.buyAlien(DNA, { value: ethers.utils.parseEther(price) });
          await waveTxn.wait();
          setEtherscanLink(`https://mumbai.polygonscan.com/tx/${waveTxn.hash}`);
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Transaction Failed");
    }
  }

  const cancelOrder = async (DNA) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        if (localStorage?.getItem('isETHSelected') === 'true') {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressETH, abi, signer);
          const waveTxn = await Factory.cancelOrder(DNA);
          await waveTxn.wait();
          setEtherscanLink(`https://goerli.etherscan.io/tx/${waveTxn.hash}`);
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const Factory = new ethers.Contract(contractAddressPolygon, abi, signer);
          const waveTxn = await Factory.cancelOrder(DNA);
          await waveTxn.wait();
          setEtherscanLink(`https://mumbai.polygonscan.com/tx/${waveTxn.hash}`);
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Transaction Failed");
    }
  }

  return (
    <AlienContext.Provider
      value={{
        currentAccount,
        aliens,
        connectWallet,
        mintAlien,
        isLoading,
        setIsLoading,
        etherscanLink,
        setEtherscanLink,
        openModal,
        closeModal,
        isModalOpen,
        sellAlien,
        buyAlien,
        cancelOrder,
        listedAliens,
        errorMessage,
        setErrorMessage,
        modalPrice,
        modalOwner,
        modalDNA,
        modalGen,
        modalBirth,
        isListed,
        alienPrice,
        setAlienPrice,
        isSelectedETH,
        changeChain
      }}>
      {children}
    </AlienContext.Provider>
  );
}
