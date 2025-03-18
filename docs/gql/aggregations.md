---
title: "Using Aggregations in the Query"
---


# Introduction
In this lab we will be combining all that we have learned in the previous labs to add aggregations to a query.  As you progress through the lab, try to figure out how to achieve the the step before uncovering the answer.


## Pre-requisites
- Complete Getting Started
- Complete Exploring the Query
- Complete Introduction to Filtering


## Lab Objective

- Understand which aggregations are available for a query
- Properly format aggregations
- Use compound filters
- Isolate our aggregation data to answer common contact center questions
- Use filters in aggregations

## Exploring Aggregation Options
1. <details><summary>Click + Add new in the top bar of Altair </summary>
         <img src="https://webexcc-sa.github.io/tools/gql/images/addNew.png"/>
         </details>
2. Open the Docs tab and navigate to Query > task > aggregations 
   - (Note that if you click into "aggregation" instead of "aggregations" it shows as deprecating soon, so we will not be using it.)
3. Note the list of fields that you have available to construct your aggregation
   - The required fields are:
     -  field - The field on which the aggregation operation is to be done
     -  type - The type of aggregation operation
     -  name - The name field of the output aggregation
  
   - {% raw %}If you wanted to return a count of tasks and name it "All Tasks":
  
        <textarea spellcheck="false" cols="70" rows="2">aggregations: [{ field: "id", type: count, name: "All Tasks" }]</textarea>

   - If you wanted to also return a count of tasks which were calls and name it "Calls":
  
        <textarea spellcheck="false" cols="70" rows="9">aggregations: [
  { field: "id", type: count, name: "All Tasks" }
  {
  field: "id"
  type: count 
  name: "Calls" 
  filter:{channelType:{equals:telephony}}
  }
  ]</textarea>
{% endraw %}
     
     - Note that you can separate via a comma or new line.

## Gathering some statistics
1. Copy this query to return the average queue duration
   - Use the Time Widget to retrieve a weeks worth of data and run the query
  
    {% raw %} <textarea spellcheck="false" cols="70" rows="19">{
  task(
    from: "____"
    to: "____"
    timeComparator: createdTime
    filter: {}
    aggregations: [
      { field: "queueDuration", type: average, name: "Average Queue Duration" }
    ]
  ) {
    tasks {
      aggregation {
        name
        value
      }
    }
  }
}</textarea>

2. <details><summary>Add the min and max queue duration and run the query</summary><textarea spellcheck="false" cols="70" rows="6">aggregations: [
      { field: "queueDuration", type: average, name: "Average Queue Duration" }
      { field: "queueDuration", type: min, name: "Minimum Queue Duration" }
      { field: "queueDuration", type: max, name: "Maximum Queue Duration" }
    ]</textarea> </details>

3. <details><summary>Isolate the queue durations by channelType by adding channelType in the fields list directly above aggregation and run the query</summary><img src="https://webexcc-sa.github.io/tools/gql/images/channelType.gif"></details>
4. <details><summary>Let's filter the entire query to only return telephony tasks using the report filter and remove channelType from the fields list in task</summary><img src="https://webexcc-sa.github.io/tools/gql/images/channelTypefilter.gif"></details>
5. <details><summary>Isolate the queue durations by terminationType</summary><img src="https://webexcc-sa.github.io/tools/gql/images/terminationType.gif"></details>
   
   - What is the average time to abandon?
   - What is the average speed of answer?
   - What is the maximum time in queue?

## Delving into the Data
1. <details><summary>Add filters to the main query filter to only return normal and abandoned calls</summary><textarea spellcheck="false" cols="70" rows="11">  filter: {
      and: [
        { channelType: { equals: telephony } }
        {
          or: [
            { terminationType: { equals: "abandoned" } }
            { terminationType: { equals: "normal" } }
          ]
        }
      ]
    }</textarea></details>
2. <details><summary>Add an aggregation to return the count of calls.</summary><textarea spellcheck="false" cols="70" rows="1">{ field: "id", type: count, name: "Calls" }</textarea></details>
3. <details><summary>Isolate the call count and durations by queue name and termination type.</summary><img src="https://webexcc-sa.github.io/tools/gql/images/lastQueue.gif"></details>
4.  Comment out the filter for termination type of abandoned, the aggregation for Minimum Queue Duration, and termination type in the fields list (`ctrl + /`)
5. <details><summary>Add max and average for connectedDuration to your aggregations.</summary><textarea spellcheck="false" cols="70" rows="10">  {
        field: "connectedDuration"
        type: max
        name: "Maximum Connected Duration"
      }
      {
        field: "connectedDuration"
        type: average
        name: "Average Connected Duration"
      }</textarea></details>
6. <details><summary>Isolate the queue aggregations to additionally be broken up by lastWrapupCodeName</summary><img src="https://webexcc-sa.github.io/tools/gql/images/lastWrapupCodeName.png"></details>
7. <details><summary>Add an aggregation to return a count of callback tasks.</summary><textarea spellcheck="false" cols="70" rows="6">
      {
        field: "isCallback"
        type: count
        name: "callback"
        filter: { isCallback: { equals: true } }
      }</textarea></details>
8. <details><summary>Bifurcate the max and average queue duration aggregations on if the call was a callback without splitting the Connected Duration aggregations.</summary><textarea spellcheck="false" cols="70" rows="24">  {
        field: "queueDuration"
        type: max
        name: "Callback Maximum Queue Duration"
        filter: { isCallback: { equals: true } }
      }
      {
        field: "queueDuration"
        type: average
        name: "Callback Average Queue Duration"
        filter: { isCallback: { equals: true } }
      }
      {
        field: "queueDuration"
        type: max
        name: "Maximum Queue Duration No Callback"
        filter: { isCallback: { equals: false } }
      }
      {
        field: "queueDuration"
        type: average
        name: "Average Queue Duration No Callback"
        filter: { isCallback: { equals: false } }
      }</textarea></details>  


{% endraw %}
### Click Next to continue to the next lesson
<!-- <textarea spellcheck="false" cols="70" rows="4"></textarea> -->