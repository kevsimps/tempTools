---
title: "Exploring the Query"
---


# Introduction
In this lab we will be exploring the available fields in task

## Pre-requisites
- Complete the Getting Started lesson

## Lab Objective
- Use the Add Query feature of Docs to produce a value of report
- Observer the data values available along with their definitions 
- Review the data which is returned  
  
## Check your Authorization 
  - If it has been over 12 hours since you completed the last lesson
    - In the Tools menu, click Authorization 
      - If you are asked to log in, follow the directions.
      - If the "Copy this text into your Global Environment Variable" modal opens you have already logged in.
    - Copy the entire Global Environment Variable text and paste it in the Global Environment Variable box
  


## Add Query from Docs
<!-- <button class="btn" onclick="vidPop('d2c7b761-9291-40ec-b76f-3cb25c657c83')">Launch Video</button>  -->

1.  <details><summary>Click + Add new in the top bar of Altair </summary>
         <img src="https://webexcc-sa.github.io/tools/gql/images/addNew.png"/>
         </details> 
2.  Open the Docs panel
3.  Click Query
4.  <details><summary>Next to task, click ADD QUERY</summary>
    <img style="width:75%" src="https://webexcc-sa.github.io/tools/gql/images/addTaskQuery.gif"/></details>
5. In the query window use the keyboard shortcut `ctrl + /` to comment out the following fields in the arguments section:
   - filter
   - aggregation   
   - aggregations   
   - aggregationInterval   
   - pagination
6. You can delete all of the lines in the has section (line 84-150) as they are not needed
7. Comment out or delete the following fields from the fields section:
    - integerGlobalVariables
    - stringGlobalVariables   
    - longGlobalVariables   
    - doubleGlobalVariables   
    - booleanGlobalVariables    
    - intervalStartTime   
    - aggregation

8. Hover over owner in the fields list of the query pane

   <img src="https://webexcc-sa.github.io/tools/gql/images/ownerField.png"/>
10. In the Docs pane, click on task to expand the documentation
11. Scroll down to Fields and click on tasks
    - Note that this lists all of the available fields in the Task object
12. Scroll down to owner
    - Note the type of data is AgentInfo
13. Click on owner
    - You can now see the AgentInfo fields
14. Next to owner in the query pane, type open curly braces (`{`), press enter, and type `id`
    - Note that you should have gotten the option to auto complete by pressing enter 
15. Fill in the rest of the field names:
    - name
    - signInId
    - sessionId
    - phoneNumber
    - channelId
16. Work your way down the rest of the fields which have lines underneath them and hover your mouse over the fields
   - If the field is deprecated, delete it or comment it out 
   - If the field is not deprecated, place your cursor after the field lane and use the keyboard shortcut `ctrl + shift + enter ` 
17. While in the query pane and use the keyboard shortcut `ctrl + f` to bring up the find and replace dialog box
18. In the find box paste `(sort: asc)`, put nothing in the replace box, and click replace all.
19. Using the time widget, set the from and to fields for 1 day (this query could bring back a lot of data)
20. Execute the query by clicking the send request button or the keyboard shortcut `ctrl + enter`

## Pick a single task and answer the following questions:
1. <details><summary>What Channel type is this task from?</summary>Hint: Check field channelType</details>
2. <details><summary>What is the last queue name?</summary>Hint: Check field lastQueue > name</details>
3. <details><summary>Was this a callback?</summary>Hint: Check field isCallback</details>
4. <details><summary>Is this an active task?</summary>Hint: Check field isActive</details>
5. <details><summary>Was this task abandoned?</summary>Hint: Check field terminationType</details>


### Click Next to continue to the next lesson





<!-- ---

### testing section

<button onclick="vidPop('d2c7b761-9291-40ec-b76f-3cb25c657c83')">Launch Video</button>

<button onclick="vidPop('483abf7f-d623-49fe-a1f6-ea2fcb082763')">Launch Video 2</button> -->