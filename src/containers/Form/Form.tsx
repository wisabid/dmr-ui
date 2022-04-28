import ArticleSettings from '../ArticleSettings/ArticleSettings'

const Form = ({template, setFormData, formData} : {template: any; setFormData: any; formData:any}) => {
  const formElements = template.map((item:any) => {
    const { title, fields } = item;
    return (
        <div key={title}>
            <h4 className="dmrh4 text-left">{title}</h4>
            <section className="dmrSection">
                {
                    fields.map((it: any) => {
                        const {title, type, name, fields } = it;
                        switch (type) {
                            case "switch":
                                return (
                                    <>
                                    <div className="dmrSection__container" key={name}>
                                        {title && name && <ArticleSettings label={title} name={name} setFormData={setFormData} formData={formData}/>}
                                    </div>
                                    </>
                                )
                                break;
                            case 'multiple':
                                return (
                                    <>
                                    <div className="dmrSection__container">
                                        {
                                            fields?.map((itm: any) => {
                                                // @ts-ignore
                                                const { title, type, name, dropdown, accordionData, fields } = itm;
                                                let dropDownFlag = false;
                                                let dropDownName = '';
                                                let dropDownData: string[] = [];
                                                if (dropdown) {
                                                    dropDownFlag = true;
                                                    dropDownName = dropdown.name;
                                                    dropDownData = dropdown.data;
                                                }
                                                return (
                                                    <>
                                                    <ArticleSettings key={name} dropDown={dropDownFlag} dropDownName={dropDownName} dropDownData={dropDownData} label={title} name={name} setFormData={setFormData} formData={formData} accordion={accordionData}>
                                                        {accordionData && <div className="dmrSection__container subSettings">
                                                        
                                                        {fields.map((itmi:any) => {
                                                            const { name, title, subOf } = itmi;
                                                            return (
                                                                <ArticleSettings key={name} label={title} name={name} setFormData={setFormData} formData={formData} subOf={subOf} />
                                                            )
                                                        })}</div>}
                                                    </ArticleSettings>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    </>
                                )
                            default:
                                return <></>
                                break;
                        }
                        
                    })
                }
            </section>
        </div>
    )
  }); 
  return (
    <form>
        {formElements}
    </form>
  )
}

export default Form;