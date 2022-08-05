import React, { useContext } from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from 'react-icons/bs'
import { TransactionContext } from '../context/TransactionContext'
import { Loader } from './'
import { shortenAddress } from "../utils/shortenAddress";
const commonStyles = 'min-h-[70px] sm:px-0 sm:min-w-[120px] flex justify-center items-center border-[0.5px] boder-gray-400 text-sm font-light text-white';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);
const Welcome = () => {

    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !message) return;

        sendTransaction();
    };

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w11/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily in Scoint.
                    </p>
                    {!currentAccount && (<button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row w-full justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>)}
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliabilyty
                        </div>
                        <div className={commonStyles}>
                            Secutity
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Scoint
                        </div>
                        <div className={commonStyles}>
                            Low fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-white text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-bl">
                                    Ethrereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 sm:w-96 w-full flex flex-col justify-strart items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Enter message" name="message" type="text" handleChange={handleChange} />
                        <Input name="file" type="file" handleChange={handleChange} />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button type="button" onClick={(handleSubmit)} className="text-white w-full mt-2 p-2 border-[1px] rounded-full cursor-pointer hover:bg-[#3d4f7c] ">
                                Send Now
                            </button>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Welcome;