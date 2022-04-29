import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import ExpandCollapse from '../../components/ExpandCollapse/ExpandCollapse';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import styles from './ArticleSettings.module.css';

type Props = {
  dropDown?: boolean; 
  accordion?: boolean; 
  children?: React.ReactNode; 
  label: string; 
  dropDownData?: string[], 
  name: string; 
  setFormData: (data: any) => void; 
  formData: any; 
  dropDownName?: string; 
  subOf?: string
}
const ArticleSettings = ({dropDown, accordion, children, label, dropDownData, name, setFormData, formData, dropDownName, subOf=''}: Props) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
        <article className={styles['dmrSection__settings']}>
            <label className={styles['dmrSection__label']}>{label}</label>
            {dropDown &&  <Dropdown data={dropDownData} setFormData={setFormData} formData={formData} name={dropDownName as string} subOf={subOf} />}
            <ToggleSwitch onToggle={(value: boolean) => setExpand(value)} name={name} setFormData={setFormData} formData={formData} subOf={subOf}/>
            {accordion && <ExpandCollapse expand={expand} handleClick={() => setExpand(prev => !prev)} />}
        </article>
        {expand && children && 
            <div className="dmrSection__container subSettings">
               {children}
            </div>
        }
    </>
  )
}

export default ArticleSettings