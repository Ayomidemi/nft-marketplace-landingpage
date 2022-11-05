import Head from "next/head";

import { Download, SectionWrapper, Features } from "../components";
import assets from "../public/assets";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT-MarketPlace</title>
        <meta name="description" content="NFT-Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SectionWrapper
          title="Your own store of Nifty NFTs. Start Selling & Growing"
          description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
          // className='banner'
        />
        <SectionWrapper
          title="Smart User Interface Marketplace"
          description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
          mockupImg={assets.homeCards}
          reverse
        />
        <Features />
        <SectionWrapper
          title="Deployment"
          description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
          mockupImg={assets.feature}
          reverse
        />
        <SectionWrapper
          title="Creative way to showcase the store"
          description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
          mockupImg={assets.mockup}
          banner="banner02"
        />
        <Download />

        <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
          <p
            className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-white`}
          >
            Made with &hearts; by <b>Pease Adeniji</b>
          </p>
        </div>
      </main>
    </div>
  );
}
