import { ContentBoxFrame } from './styles/Frame';
import Walletconnection from './components/Connection/Walletconnection';
import Wallet from './index';
import { DataProvider } from './context/Dataprovider';

export default async function Home() {
  return (
  
    <>       
    


    <DataProvider>
    <ContentBoxFrame>
    <Wallet/>

    <h1>Body4</h1>    <h1>Body4</h1>    <h1>Body4</h1>    <h1>Body4</h1>    
    </ContentBoxFrame>
    </DataProvider>
    </>
  )
}