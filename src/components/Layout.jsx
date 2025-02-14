import  { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../css/Layout.module.css";
import logo from "../assets/ophir-remove.png";
import polygon from "../assets/polygon.jpg";
import nftStorage from "../assets/nftstorage.svg"; 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        <Image src={logo} />
                    </Link>
                </div>
                <ul className={isActive === false ? styles.navmenu : styles.navmenu + " " + styles.active}>
                    {}
                    <li className={styles.navLink}>
                        <Link href={"/create"}>Create</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href={"/marketplace"}>Marketplace</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href={"/account"}>Account</Link>
                    </li>
                    <li className={`${styles.navLink} ${styles.small}`}>
                        <ConnectButton />
                    </li>
                </ul>
                <button onClick={handleClick} className={isActive === false ? styles.hamburger : styles.hamburger + " " + styles.active}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
            {children}
            <div className={styles.sponsors}>
                <h2>Powered By</h2>

                <div className={styles.sponsor_images}>
                    <div className={styles.sponsor}>
                        <Image src={polygon} />
                    </div>
                    <div className={styles.sponsor}>
                        <Image src={nftStorage} />
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <h4>
                    Built by {""}
                    <u>
                        <a href="https://twitter.com/techwithmide" target="_blankspace" rel="noreferrer">
                            Ide 
                        </a>
                    </u>
                    <span> &#38; </span>
                    <u>
                        <a href="https://twitter.com/midesofek" target="_blankspace" rel="noreferrer">
                            mide sofek
                        </a>
                    </u>
                </h4>
            </footer>
        </div>
    )
}

