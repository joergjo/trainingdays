(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{245:function(e,t,a){e.exports=a.p+"assets/img/architecture_day3.73915077.png"},512:function(e,t,a){e.exports=a.p+"assets/img/portal_day4_bo_cgnsvc1.99ec5e44.png"},513:function(e,t,a){e.exports=a.p+"assets/img/bo2_code.dce0e5f3.png"},514:function(e,t,a){e.exports=a.p+"assets/img/browser_bo2_stats.9c25a8ee.png"},515:function(e,t,a){e.exports=a.p+"assets/img/browser_bo2_stats_contact.caba5d09.png"},755:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"💎-breakout-2-add-congitive-services-💎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-2-add-congitive-services-💎"}},[e._v("#")]),e._v(" 💎 Breakout 2: Add Congitive Services 💎")]),e._v(" "),t("p",[e._v("⏲️ "),t("em",[e._v("Est. time to complete: 30 min.")]),e._v(" ⏲️")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("p",[e._v("Now that we have seen how Azure Congitive Services can easily enhance applications with out-of-the-box AI functionality, let's add one of those services from the text analytics space to our application.")]),e._v(" "),t("p",[e._v("In this challenge you will:")]),e._v(" "),t("ul",[t("li",[e._v("use Azure Cognitive Services / Text Analytics to analyze the sentiment of visit report results")])]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#-breakout-2-add-congitive-services-"}},[e._v("💎 Breakout 2: Add Congitive Services 💎")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#here-is-what-you-will-learn-"}},[e._v("Here is what you will learn 🎯")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#table-of-contents"}},[e._v("Table Of Contents")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-a-cognitive-services-account"}},[e._v("Create a Cognitive Services Account")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-an-azure-function-to-analyze-visit-report-results"}},[e._v("Create an Azure Function to Analyze Visit Report Results")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#add-service-bus-topic-subscription"}},[e._v("Add Service Bus Topic Subscription")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-the-azure-function-app"}},[e._v("Create the Azure Function App")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#deploy-the-text-analytics-function"}},[e._v("Deploy the Text Analytics Function")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#adjust-the-frontend"}},[e._v("Adjust the Frontend")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])])])]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("It's time to finish our sample application from a services perspective. We'll now add Azure Cognitive Services to enhance our application with Artificial Intelligence.")]),e._v(" "),t("p",[e._v("Whenever a visit report will be saved - "),t("strong",[e._v("and the visit report "),t("em",[e._v("results")]),e._v(" field is filled with text")]),e._v(' - we will be calling the Text Analysis services of Azure Cognitive Services to analyze the sentiment of the text. With that analysis, we can determine, if the visit was a "negative" or "positive" experience on a scala from "0" to "100". When the text has been analyzed, the Cosmos DB is updated to reflect the findings of our analysis.')]),e._v(" "),t("p",[e._v("The text analysis is triggered by a Service Bus topic which will receive a message, whenever a Visit Report will be added or updated.")]),e._v(" "),t("p",[e._v("This is a very common technique to add functionality to your application without touching the "),t("em",[e._v("core")]),e._v(" of it. You can extend without having to worry to break something.")]),e._v(" "),t("p",[e._v("Here is the resulting architecture:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(245),alt:"Architecture Day 3 - Breakout 2",title:"Architecture Day 3 - Breakout 2"}})]),e._v(" "),t("h2",{attrs:{id:"create-a-cognitive-services-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-cognitive-services-account"}},[e._v("#")]),e._v(" Create a Cognitive Services Account")]),e._v(" "),t("p",[e._v("To be able to use the text analysis services, we need to add an Azure Cognitive Services account.")]),e._v(" "),t("p",[e._v("Go to the Portal and create the new resource (search for "),t("em",[e._v("Cognitive Services")]),e._v("). Choose the "),t("strong",[e._v("scm-breakout-rg")]),e._v(' resource group, location "West Europe" and the lowest pricing tier available (probably '),t("strong",[e._v("S0")]),e._v(").")]),e._v(" "),t("p",[t("img",{attrs:{src:a(512),alt:"Azure Congitive Services Account",title:"Azure Congitive Services Account"}})]),e._v(" "),t("h2",{attrs:{id:"create-an-azure-function-to-analyze-visit-report-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-function-to-analyze-visit-report-results"}},[e._v("#")]),e._v(" Create an Azure Function to Analyze Visit Report Results")]),e._v(" "),t("p",[e._v("As described in the introduction section, we will be using an Azure Function to call the Text Analyisis services - this time the function will be hosted on a Linux OS. It will be triggered by an Azure Service Bus Topic ("),t("strong",[e._v("sbt-visitreports")]),e._v(") we created in the Break Out 1 session earlier this day.")]),e._v(" "),t("h3",{attrs:{id:"add-service-bus-topic-subscription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-service-bus-topic-subscription"}},[e._v("#")]),e._v(" Add Service Bus Topic Subscription")]),e._v(" "),t("p",[e._v("First, we need to add the Service Bus Topic subscription. Please go to your Azure Service Bus and open the topic "),t("strong",[e._v("sbt-visitreports")]),e._v(". Under "),t("strong",[e._v("Subscriptions")]),e._v(", add a new one called "),t("strong",[e._v("textanalytics")]),e._v(". Make sure sessions are "),t("strong",[e._v("disabled")]),e._v(" and "),t("strong",[e._v("Max delivery count")]),e._v(" is set to "),t("code",[e._v("10")]),e._v(" - leave all other properties as proposed by the Azure Portal.")]),e._v(" "),t("h3",{attrs:{id:"create-the-azure-function-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-azure-function-app"}},[e._v("#")]),e._v(" Create the Azure Function App")]),e._v(" "),t("p",[e._v("Now, create an Azure Function App. Please keep in mind, that we need to add the function to a "),t("strong",[e._v("new resource group")]),e._v(", because we can't mix Windows and Linux workloads at the time of writing.")]),e._v(" "),t("p",[e._v('So please open the "Create a Resource" wizard and start creating an Azure Function.')]),e._v(" "),t("p",[t("strong",[e._v("Azure Function Properties")])]),e._v(" "),t("p",[e._v("Create the Azure Function App with the following parameters.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter")]),e._v(" "),t("th",[e._v("Value / Hint")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Resource Group")]),e._v(" "),t("td",[e._v("Create a "),t("strong",[e._v("new")]),e._v(" resource group, e.g. "),t("strong",[e._v("scm-breakout-tuxfunc-rg")]),e._v(" (Linux dynamic workers currently can't be mixed with Windows dynamic workers. Use this link to learn more "),t("a",{attrs:{href:"http://go.microsoft.com/fwlink/?LinkId=825764",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://go.microsoft.com/fwlink/?LinkId=825764"),t("OutboundLink")],1),e._v(".)")])]),e._v(" "),t("tr",[t("td",[e._v("Publish")]),e._v(" "),t("td",[t("em",[e._v("Code")])])]),e._v(" "),t("tr",[t("td",[e._v("Runtime Stack")]),e._v(" "),t("td",[t("em",[e._v("Node.js")])])]),e._v(" "),t("tr",[t("td",[e._v("Version")]),e._v(" "),t("td",[t("em",[e._v("14 LTS")])])]),e._v(" "),t("tr",[t("td",[e._v("Region")]),e._v(" "),t("td",[t("em",[e._v("West Europe")])])]),e._v(" "),t("tr",[t("td",[e._v("Storage Account")]),e._v(" "),t("td",[e._v("use the Storage Account you created in the breakout resource group (or you can also create a new one)")])]),e._v(" "),t("tr",[t("td",[e._v("Operating System")]),e._v(" "),t("td",[t("em",[e._v("Linux")])])]),e._v(" "),t("tr",[t("td",[e._v("Plan Type")]),e._v(" "),t("td",[t("em",[e._v("Consumption")])])])])]),e._v(" "),t("p",[e._v("Create it and when the Function App has been deployed, go to the "),t("strong",[e._v("Configuration")]),e._v(" section and add the following App configuration/settings.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter")]),e._v(" "),t("th",[e._v("Value / Hint")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("ServiceBusConnectionString")]),e._v(" "),t("td",[e._v("Primary Connection String of the Service Bus "),t("strong",[e._v("Visit Reports")]),e._v(" Topic ("),t("strong",[e._v("sbt-visitreports")]),e._v(" / "),t("strong",[e._v("listen")]),e._v(" Shared Access Key) "),t("br"),t("br"),t("span",{staticStyle:{color:"red"}},[t("strong",[e._v("Important")])]),e._v(": Please remove the "),t("em",[e._v("EntityPath")]),e._v(" variable (incl. the value) at the end of the connection string!")])]),e._v(" "),t("tr",[t("td",[e._v("COSMOSDB")]),e._v(" "),t("td",[e._v("the endpoint to the Cosmos DB, e.g. "),t("a",{attrs:{href:"https://adcd3cosmos-dev.documents.azure.com:443/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://adcd3cosmos-dev.documents.azure.com:443/"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("COSMOSKEY")]),e._v(" "),t("td",[e._v("Primary Key of your Cosmos DB")])]),e._v(" "),t("tr",[t("td",[e._v("TA_SUBSCRIPTION_KEY")]),e._v(" "),t("td",[e._v("the Azure Cognitive Services "),t("strong",[e._v("subscription key")]),e._v(". Obtain it from the "),t("em",[e._v("Keys and Endpoint")]),e._v(" view under "),t("em",[e._v("Resource Management")]),e._v(" of your Cognitive Services account")])]),e._v(" "),t("tr",[t("td",[e._v("TA_SUBSCRIPTIONENDPOINT")]),e._v(" "),t("td",[e._v("the Azure Cognitive Services "),t("strong",[e._v("endpoint URL")]),e._v(". Obtain it from the "),t("em",[e._v("Keys and Endpoint_view under_Resource Management")]),e._v(" of your Cognitive Services account")])])])]),e._v(" "),t("p",[e._v("Save the settings. We can now start deploying the code that will call the Azure Cognitive services.")]),e._v(" "),t("h3",{attrs:{id:"deploy-the-text-analytics-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-text-analytics-function"}},[e._v("#")]),e._v(" Deploy the Text Analytics Function")]),e._v(" "),t("p",[e._v("This is the last part that we add to our application. The code for the Azure Function that sends visit report results to Azure Congitive Services / Sentiment Analysis has been prepared for. Please open the VS Code Worskpace "),t("code",[e._v("day3/day3-breakout2.code-workspace")]),e._v(".")]),e._v(" "),t("p",[e._v("The folder structure is now as follows:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(513),alt:"VS Code Day 3 - Breakout 2",title:"VS Code Day 3 - Breakout 2"}})]),e._v(" "),t("p",[e._v("You will see one additional project added to the workspace compared to "),t("code",[e._v("Breakout 1")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Text Analytics Function")]),e._v(" - contains the logic to send visit reports to Azure Congitive Services / Text Analytics to analyze the sentiment of visit report results")])]),e._v(" "),t("p",[t("strong",[e._v("You can now deploy the project")]),e._v(' to the previously created Azure Function via "right-click deployment" directly from VS Code - as done many times by now.')]),e._v(" "),t("h2",{attrs:{id:"adjust-the-frontend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adjust-the-frontend"}},[e._v("#")]),e._v(" Adjust the Frontend")]),e._v(" "),t("p",[e._v('There is one last step to do, until we can see the new functionality in action. We need to adjust the frontend and enable the feature flag "enableStats". Please set this flag to '),t("strong",[t("em",[e._v("true")])]),e._v(". You can either do this on you local machine and redeploy the frontend (again, see "),t("RouterLink",{attrs:{to:"/day3/challenges/challenge-bo-1.html#deploy-new-frontend"}},[e._v("Breakout Session 1")]),e._v(") or you simply open the "),t("strong",[e._v("Azure Storage Explorer in the Portal")]),e._v(" and edit the file directly.")],1),e._v(" "),t("p",[e._v("The settings file should look similar to that one now:")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("var uisettings = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpoint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmapi-dev.azurewebsites.net/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"resourcesEndpoint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmresourcesapi-dev.azurewebsites.net/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"searchEndpoint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmrsearchapi-dev.azurewebsites.net/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"reportsEndpoint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://adcday3scmvr-dev.azurewebsites.net"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enableStats"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aiKey"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Now open a browser and reload the frontend. You will see, that a new menu item is available.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(514),alt:"Sentiment Statistics",title:"Sentiment Statistics"}})]),e._v(" "),t("p",[e._v("Also, the contacts detail view will show results of visit reports, if they are available for the current contact.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(515),alt:"Contact Detail - Sentiment Analysis",title:"Contact Detail - Sentiment Analysis"}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("📝 To kick-off the sentiment analysis process, create a "),t("code",[e._v("Visit Report")]),e._v(", open the detail view for it and enter a "),t("code",[e._v("Visit Result")]),e._v(" text. Then wait a few seconds and open the "),t("code",[e._v("Statistics")]),e._v(" view.")])]),e._v(" "),t("h2",{attrs:{id:"wrap-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),t("p",[e._v("Congratulations! It was a hard and tough way to get to where you are now standing! You have created a basic, microservice oriented application with multiple backend services (contacts, resources, visit reports, search backend), that work independently, have their own storage, communicate via a Service Bus, can be granularly scaled etc. Ready to run globally!")]),e._v(" "),t("p",[e._v("From a services perspective, we have a full working, modern cloud application! Hold on for a while to reflect what we have done so far - and celebrate!")]),e._v(" "),t("p",[e._v("Tomorrow, we will show you how to deploy the application including the Azure infrastructure within minutes!")]),e._v(" "),t("p",[e._v("In this Breakout Challenge, you made use of:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/text-analytics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services / Text Analytics"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/create-function-app-linux-app-service-plan",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions on Linux"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day3/challenges/05-challenge-cognitive-services.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day3/"}},[e._v("🔼 Day 3")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);