//should be possible to do SSR for this.
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'

import { useContext, useEffect, useState } from 'react';
import ChainImage from './ChainImage';
import Button from './Button';

interface ChainSwitcherProps {
  className?: string;
}
//were about to get real ugly
const ChainSwitcher = (props: ChainSwitcherProps) => {
  const { className = '' } = props;
  const modal = useWeb3Modal();
  const { selectedNetworkId } = useWeb3ModalState();
  //What the fuck kind of type is selectedNetworkId?
  //AAAAAGHHHHHHHHHHHGHGHGHGHGH
  
  // Initialize chainId as null
  let chainId: number | null = null;

  // Check if selectedNetworkId is a string and has the expected format "network:chainId"
  if (typeof selectedNetworkId === 'string') {
    console.log(selectedNetworkId);

    const parts = selectedNetworkId.split(':');
    if (parts.length === 2 && !isNaN(Number(parts[1]))) {
      chainId = parseInt(parts[1], 10);
    }
  }
  else{
    chainId = selectedNetworkId;
  }
  //this code is so ugly
  //and its all because javascript doesn't have proper numbers
  //I just default to ethereum 

  // Only attempt to get the chain icon if chainId is a number.
  if (chainId === undefined){
    chainId = 1
  }
  var chainIcon = ChainImage(chainId);
  if(chainIcon===null){
      console.log(chainId);
      console.log(typeof(chainId));
      console.log(selectedNetworkId);
      console.log("arbitrum error?");
  }
  console.log(chainIcon);

  return (
    <div className={'chain-switcher ' + className}>
      <Button
        onButtonClick={() => { modal.open({view: 'Networks'}) }}
        iconStart={chainIcon} // Render the appropriate chain icon
      >
        {chainId}
      </Button>
    </div>
  );
};

export default ChainSwitcher;
