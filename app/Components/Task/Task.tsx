import styles from './Task.module.scss'
import Image from 'next/image'
type Props = {
    done?: boolean
}
const Task = (props: Props) => {
    const classNames = [styles.container]

    if(props.done){
        classNames.push(styles.done)
    }
    return (
        <div className={classNames.join(' ').trim()}>
            <div className={styles.checkboxWrapper}>
                <input type='checkbox' />
                <h3>დავალება 1</h3>
            </div>
            <Image src={'/trash.svg'} width={24} height={24} alt='trash' />
        </div>
    )
}
export default Task