import styles from './AddTask.module.scss'
import Image from 'next/image'
const AddTask = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} placeholder='ცხოვრების რა ნაწილის დაგეგმვა გსურს?'/>
            <button className={styles.button}>
                დამატება 
                <Image src ={'/plus.svg'} alt='plus' width = {16} height = {16}/>
                </button>
        </div>
    )
}
export default AddTask