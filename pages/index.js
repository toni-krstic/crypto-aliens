import Alien from "../components/Alien"
import Link from "next/link"

const styles = {
  container: `h-full w-full flex flex-col`,
  title: `font-Audiowide text-6xl text-white text-center mt-6`,
  alienContainer: `flex justify-around flex-wrap`,
  content: `font-Audiowide text-4xl text-gray-200 text-center mt-8`
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Crypto Aliens
      </h1>
      <div className={styles.alienContainer}>
        <div className="mt-6 mx-12">
          <Alien DNA={'1538664607888828'}/>
        </div>
        <div className="mt-6 mx-12">
          <Alien DNA={'7865487959540765'}/>
        </div>
        <div className="mt-6 mx-12">
          <Alien DNA={'9514583564533148'}/>
        </div>
      </div>
      <p className={styles.content}>
        MINT BUY AND SELL ALIENS
      </p>
      <Link href='AlienFactory' className={styles.content}>
        <a className={styles.content}>
        Create Alien
        </a>
      </Link>
    </div>
  )
}
