import styles from './Input.module.scss'

export function Input (props) {
    return <>
    <div><b>{props.label}</b></div>
    <div>
        <input class = {styles.input__field} placeholder={props.placeholder}/>
    <div>{props.description}</div>
    </div>
    </>
}

