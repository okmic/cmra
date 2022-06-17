import { memo, MouseEvent } from 'react'
import styles from './modal.module.css'
import { PropsModalType } from './type'


export default memo(function Modal ({callback, children}: PropsModalType) {

    const hundleSubmit = (e: MouseEvent) => {
        e.stopPropagation()
    }

    return <div className={styles.wrapper} onClick={callback}>
                <div className={styles.container}>
                    <button className={styles.close} onClick={callback}>
                        X
                    </button>
                    <div className={styles.children} onClick={hundleSubmit}>
                        {children}
                    </div>
                </div>
    </div>

})