const ExpandCollapse = ({handleClick, expand} : {handleClick: () => void; expand: boolean}) => {
  return (
    <span onClick={handleClick} style={{marginLeft: '20px'}}>{expand?`▲`:`▼`}</span>
  )
}

export default ExpandCollapse;
