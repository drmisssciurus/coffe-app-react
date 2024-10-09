import styles from './PreHeader.module.scss'

function PreHeader() {
    return (
        <div className={styles.wrapper}>
            <p>Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.</p>
        </div>
    )
}

export default PreHeader;