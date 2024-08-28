"use client";
import { createContext, useState } from "react";
import React from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [walletkey, setWalletkey] = useState();
  const [walletstatus, setWalletstatus] = useState();
  const [walletprovider, setWalletprovider] = useState();


  return (
    <DataContext.Provider
      value={{
        walletkey,
        walletstatus,
        walletprovider,
        setWalletkey,
        setWalletstatus,
        setWalletprovider,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;