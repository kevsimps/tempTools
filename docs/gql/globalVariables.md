---
title: "Adding Global Variables Into Your Query"
hide:
    -toc
    -navigation
search:
  exclude: true
---



# Introduction
This lab serves as a supplement to show how to use Reportable Global Variables in your query as returned values, filters, and/or aggregations.


## Pre-requisites
- Complete Getting Started
- Complete Exploring the Query
- The tenant you are querying must have Reportable Global Variables 
- The Reportable Global Variables must be in a flow in order to return values
- You must know the name and type of Reportable Global Variables you are adding to your queries

## Lab Objective
- Understand the types of Global Variables
- Understand how Global Variables types map between the Search API and Webex Contact Center 
- Add Reportable Global Variables to a query
- Add more than one of the same type of Global Variable

## Variable type mapping

| GraphQL Global Variable Type | Webex Contact Center Global Variable Type | 
|:-:|:-:|
| integerGlobalVariables | Integer |
| stringGlobalVariables | String |
| longGlobalVariables | DateTime |
| doubleGlobalVariables | Decimal |
| booleanGlobalVariables | Boolean |

## Returning a Global Variable
   <textarea spellcheck="false" cols="70" rows="4">stringGlobalVariables(name:"nameOfVariable"){
    name
    value
}</textarea>

## Returning more than one of the same type of variable
  
<textarea spellcheck="false" cols="70" rows="4">nameOfVariable: stringGlobalVariables(name:"nameOfVariable"){
    name
    value
}</textarea>
  <details><summary>Note you can comment out name or omit name in the return field list as the variable type will be replaced with the alias provided</summary><textarea spellcheck="false" cols="70" rows="4">nameOfVariable: stringGlobalVariables(name:"nameOfVariable"){
    # name
    value
}</textarea></details>

## Filtering with Global Variables
Filtering with global variables is similar to using them in the returned fields section of the query without the need to use aliases.

#### String Global Variables
<textarea spellcheck="false" cols="70" rows="6">
filter: {
  stringGlobalVariables: {
    name: { equals: "nameOfVariable" }
    value: { equals: "mySpecialValue" }
  }
}</textarea>

#### Numeric Global Variables 
<textarea spellcheck="false" cols="70" rows="6">
filter: {
  doubleGlobalVariables: {
    name: { equals: "nameOfDoubleVariable" }
    value: { gte: 17 }
  }
}</textarea>


## Global Variable Aggregations
Similarly to filtering with global variables you do not need to use aliases as you will define the label of the field which is returning the aggregation.  

#### Count of a String Global Variable
<textarea spellcheck="false" cols="70" rows="12">
aggregations: [
  {
  field: "id"
  name: "Count of nameOfVariable" 
  type: count
  filter: {
    stringGlobalVariables: {
      name: { equals: "nameOfVariable" }
      value: { equals: "mySpecialValue" }
    }
  }
} 
]</textarea>


#### Sum of an Integer Global Variable
<textarea spellcheck="false" cols="70" rows="12">
aggregations: [
  {
  field: "integerGlobalVariables.value"
  name: "Sum of nameOfVariable"
  type: sum
  predicate: {
    integerGlobalVariables: {
      name: { equals: "nameOfVariable" }
    }
  }
  }
]</textarea>

### Click Next to continue to the next lesson
<!-- <textarea spellcheck="false" cols="70" rows="4"></textarea> -->