import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({onToggle, name, setFormData, formData, subOf}: {onToggle?: (e: boolean) => void; name: string; setFormData: (data: any) => void; formData: any; subOf: string}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (onToggle) onToggle(checked)
    if (subOf) {
      setFormData({
        ...formData,
        [subOf] : {
          ...formData[subOf],
          [name] : checked
        }
      })
    } else {
      setFormData({
        ...formData,
        [name] : checked
      })
    }
  }
  return (
    <>
        <label className={styles.switch}>
            <input type="checkbox" onChange={handleChange} name={name}/>
            <span className={`${styles.slider} ${styles.round}`} />
        </label>
    </>  

  )
}

export default ToggleSwitch;