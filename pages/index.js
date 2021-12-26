import { Button } from "../components/buttons/Buttons";
import { ButtonM } from "../components/buttons/Buttons";
import styles from './index.module.scss';
import { Input } from "../components/input/Input";

export default function Post() {
  return (<div>
      <h1>COMPONENTS</h1>
      <div className = {styles.controls}>
        <div className= {styles.controls__item}><Button text = 'Text'/></div>
        <div className= {styles.controls__item}><ButtonM text = 'Text'/></div>
      </div>
      <div className = {styles.input}>
        <Input label='Label' placeholder='Placeholder' description='Description'/>
      </div>
  </div>)
}