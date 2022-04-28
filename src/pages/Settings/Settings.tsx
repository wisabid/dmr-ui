import { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import Form from '../../containers/Form/Form'

const Settings = () => {
  const [formData, setFormData] = useState({});
  console.log(formData)
  const template = [{
    "title" : "GENERAL",
    "fields" : [
        {
          "title": "CASE MANAGEMENT",
          "type": "switch",
          "name" : "casemanagement"
        },
        {
          "title": "MAP TIMELINE",
          "type": "switch",
          "name" : "maptimeline"
        },
        {
          "title": "VIEWS & BRIEFINGS",
          "type": "switch",
          "name" : "views"
        },
        {
          "title": "NOTIFICATIONS",
          "type": "switch",
          "name" : "notifications"
        },
        {
          "title": "MASS COMMUNICATIONS",
          "type": "switch",
          "name" : "masscomm"
        },
        {
          "title": "TRAFFIC CAMERAS",
          "type": "switch",
          "name" : "traffic"
        }
    ]
  },
  {
      "title" : "SETTINGS",
      "fields" : [
          {
              "type": "multiple",
              "fields" : [
                  {
                      "title": "AUDIT LOG",
                      "type": "switch",
                      "name" : "auditlog2"
                    },
                    {
                      "title": "USERS",
                      "type": "switch",
                      "name" : "users",
                      "accordionData" : true,
                      "fields" : [
                        {
                            "title": "USERS ADD",
                            "type": "switch",
                            "name" : "usersadd",
                            "subOf" : "users"
                        },
                        {
                            "title": "USERS EDIT",
                            "type": "switch",
                            "name" : "usersedit",
                            "subOf" : "users"
                        },
                        {
                            "title": "USERS DELETE",
                            "type": "switch",
                            "name" : "usersdel",
                            "subOf" : "users"
                        },
                        {
                            "title": "MAX USERS",
                            "type": "switch",
                            "name" : "maxusers",
                            "subOf" : "users",
                            "dropdown" : {
                                "name": "maxusersdd",
                                "data": ["10", "20", "30", "40", "50", "60"]
                            }
                        }
                      ]
                    }
              ]
          },
         
          {
            "title": "AUDIT LOG",
            "type": "switch",
            "name" : "auditlog"
          },
          {
            "title": "AUDIT LOG",
            "type": "switch",
            "name" : "auditlog1"
          }
      ]
    },
    {
      "title" : "ALERTS",
      "fields" : [
          {
              "type": "multiple",
              "fields" : [
                  {
                      "title": "ALERT MANAGER",
                      "type": "switch",
                      "name" : "alertm"
                  },
                  {
                      "title": "ALERT RULES",
                      "type": "switch",
                      "name" : "alertrules",
                      "dropdown" : {
                          "name": "alertsrulesdd",
                          "data": ["10", "20", "30", "40", "50", "60"]
                      }
                  },
              ]
          },
          {
              "title": "SOUND ALERT",
              "type": "switch",
              "name" : "soundalert"
          },
          {
              "title": "MSG ALERT",
              "type": "switch",
              "name" : "msgalert"
          }
      ]
    }
];

  return (
    <>
      <Layout>
        <Form template={template} setFormData={setFormData} formData={formData}/>
      </Layout>
    </>
  )
}

export default Settings