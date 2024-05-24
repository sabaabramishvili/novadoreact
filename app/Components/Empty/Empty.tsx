import Image from "next/image"
import styles from './Empty.module.scss'
const Empty = () => {
    return (
        <div className={styles.container}>
            <Image src='./Clipboard.svg' alt='Clipboard' width={56} height={56} />
            <div className={styles.infoWrapper}>
                <h2>დავალებები ჯერ არ გაქვს</h2>
                <span>შექმენით დავალებები და დაიწყეთ თქვენი ცხოვრების დაორგანიზება
                    ჩვენთან ერთად</span>
            </div>
        </div>
    )
}
export default Empty