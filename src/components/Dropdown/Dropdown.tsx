import { useState } from 'react';
import ExpandCollapse from '../ExpandCollapse/ExpandCollapse';
import styles from './Dropdown.module.css';

type Props = {
  data?: string[]; 
  setFormData: (data: any) => void; 
  formData: any; 
  name: string; 
  subOf: string
}

const Dropdown = ({data, setFormData, formData, name, subOf}: Props ) => {
  const [expand, setExpand] = useState(false);
  const [ddValue, setDdValue] = useState('');
  
  const handleClick = () => {
    setExpand(prev => !prev)
  }
  const liElements = data?.map((item: string, index: number) => <li key={index} onClick={() => {
      setDdValue(item);
      if (subOf) {
        setFormData({
          ...formData,
          [subOf] : {
            ...formData[subOf],
            [name] : item
          }
        })
      } else {
        setFormData({
          ...formData,
          [name] : item
        })
      }
      setExpand(prev => !prev);
  }}>{item}</li>)

  return (
    <div className={styles.dmrDd}>
        <div className={styles['dmrDd__container']}> 
            <span>{ddValue}</span>
            <ExpandCollapse handleClick={handleClick} expand={expand} />
        </div>
        {expand && <ul className={styles['dmrDd__ul']}>
            {liElements}
        </ul>}
    </div>
  )
}

export default Dropdown