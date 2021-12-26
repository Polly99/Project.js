import styles from './Buttons.module.scss';

export function Button (props) {
    return <div className = {styles.button}>{props.text}</div>

}

export function ButtonM (props) {
    return <div className = {styles.buttonM}>{props.text}</div>

}


