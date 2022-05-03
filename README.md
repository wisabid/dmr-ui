# Dashboard App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## HTML Structure 
```js
<form>
        <h4 className="dmrh4 text-left">GENERAL</h4>
        <section className="dmrSection">
                <div className="dmrSection__container">
                    <ArticleSettings label="CASE MANAGEMENT" name="casemanagement" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="MAP TIMELINE" name="maptimeline" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="VIEWS & BRIEFINGS" name="views" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="NOTIFICATIONS" name="notifications" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="MASS COMMUNICATIONS" name="masscomm" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="TRAFFIC CAMERAS" name="traffic" setFormData={setFormData} formData={formData}/>
                </div>
        </section>

        <h4 className="dmrh4 text-left">SETTINGS</h4>
        <section className="dmrSection">
                <div className="dmrSection__container">
                    <ArticleSettings label="AUDIT LOG" name="auditlog2" setFormData={setFormData} formData={formData}/>
                    <ArticleSettings accordion={true} label="USERS" name="users" setFormData={setFormData} formData={formData}>
                        <div className="dmrSection__container subSettings">
                            <ArticleSettings label="USERS ADD" name="usersadd" setFormData={setFormData} formData={formData} subOf="users"/>
                            <ArticleSettings label="USERS DELETE" name="usersdel" setFormData={setFormData} formData={formData} subOf="users" />
                            <ArticleSettings label="USERS EDIT" name="usersedit" setFormData={setFormData} formData={formData} subOf="users" />
                            <ArticleSettings dropDown={true} dropDownName="maxusersdd" label="MAX USERS" dropDownData={['10', '20', '30', '40', '50', '60']} name="maxusers" setFormData={setFormData} formData={formData} subOf="users" />
                        </div>
                    </ArticleSettings>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="AUDIT LOG" name="auditlog" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="AUDIT LOG" name="auditlog1" setFormData={setFormData} formData={formData}/>
                </div>
        </section>

       <h4 className="dmrh4 text-left">ALERTS</h4>
        <section className="dmrSection">
                <div className="dmrSection__container">
                    <ArticleSettings label="ALERT MANAGER" name="alertm" setFormData={setFormData} formData={formData}/>
                    <ArticleSettings dropDown={true} dropDownName="alertsrulesdd" label="ALERT RULES" dropDownData={['10', '20', '30', '40', '50', '60']} name="alertrules" setFormData={setFormData} formData={formData} />
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="SOUND ALERT" name="soundalert" setFormData={setFormData} formData={formData}/>
                </div>
                <div className="dmrSection__container">
                    <ArticleSettings label="MSG ALERT" name="msgalert" setFormData={setFormData} formData={formData} />
                </div>
        </section>

        
    </form>
```

## Checklist

* Develop a react component based on the screenshot - `./src/pages/Settings.tsx`  ✅

* Toggles either sit in a group or their own ✅

* They can sometimes have an additional input such as numeric dropdowns against the toggle ✅

* If a parent toggle is enabled, the child toggles should be expanded and displayed providing the ability to toggle them off/on ✅

* If a parent toggle is disabled, the child toggles should be disabled and then collapsed ✅

* Use TypeScript - Clean up is yet to be done as `any` type is yet to be substituted. ✅

* A dynamic schema should be provided to drive the form. The input wording and response should not be hardcoded into the UI - Basic JSON has been put to use for generating form and not something like `react-json-schema` library. ✅

* This can run on ReactDOM.render() on a single page for demo purposes. ✅

* In addition, the CRA app is hosted on https://dataminr-db.netlify.app/ ✅

* Unit tests - Basic ones are in place ✅

## Whats Pending?

* Unit tests with all testing scenarios such as toggling etc.

* Schema validation 
