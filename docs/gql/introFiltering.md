---
title: "Introduction to Filtering"
hide:
    -toc
    -navigation
search:
  exclude: true
---


# Introduction 

In this lab we will be exploring how to add filters to your query.

## Prerequisites  
- Complete Getting Started
- Complete Exploring the Query

## Lab Objective
- Understand the available filter criteria
- Understand criteria grouping
- Ability to identify available filter criteria
- Create a basic filter
- Create a grouped filter

## Available Filters Types
1. Strings - scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
   - Comparisons
     - equals - Returns data if the value equals the criteria 
     - notequals - Returns all other data than the values which equal the criteria
     - contains - Returns data if the value contains a sub-string given for the criteria. (Can use RegEx)
     - match - Returns data if the criteria matches a pattern. (Can use RegEx)
2. Boolean - true/false
3. Integer - scalar type represents non-fractional signed whole numeric values
   - Comparisons
     - equals - Returns data if the value equals the criteria
     - notequals - Returns all other data than the values which equal the criteria
     - gt - greater than
     - gte - greater than or equal to
     - lt - less than
     - lte - less than or equal to
4. Enumerations - scalar type represents a predefined list of values. Similar to a string, but does not accept quotes.
   - Comparisons
     - equals - Returns data if the value equals the criteria 
     - notequals - Returns all other data than the values which equal the criteria


## Filter Grouping
While single filters can be useful, it is common to need more that one filter to return the data you are looking for.  The grouping filters are "and", "or", and "not".  They can be used by themselves to group one or more filters or in conjunction with each other to create more complex filters.



<!-- <button class="btn" onclick="vidPop('d2c7b761-9291-40ec-b76f-3cb25c657c83')">Launch Video</button> -->


## Adding our first filter

1. <details><summary>Click + Add new in the top bar of Altair </summary>
         <img src="https://webexcc-sa.github.io/tools/gql/images/addNew.png"/>
         </details>
2. <details><summary>Copy the query from the "Exploring the Query" lab.</summary>
   
    <textarea spellcheck="false" cols="70" rows="138">
  {
    task(
      from: " ___ "
      to: " ___ "
      timeComparator: createdTime
      # filter: 
      # aggregation: 
      # aggregations: [{ field: "string", type: count, name: "string" }]
      # aggregationInterval: { interval: FIFTEEN_MINUTES }
      # pagination: 
    ) {
      tasks {
        id
        status
        channelType
        createdTime
        endedTime
        origin
        destination
        contactReason
        direction
        owner {
          id
          name
          signInId
          sessionId
          phoneNumber
          channelId
        }
        terminationType
        channelSubType
        customer {
          name
          phoneNumber
          email
        }
        isActive
        isCallback
        channelMetaData {
          email {
            subject
            metaData
          }
          chat {
            chatReason
          }
          inBoundTranscript
          outBoundTranscript
        }
        callbackData {
          callbackRequestTime
          callbackConnectTime
          callbackNumber
          callbackStatus
          callbackOrigin
          callbackType
          callbackQueueName
          callbackAgentName
          callbackTeamName
          callbackRetryCount
        }
        recordingLocation
        lastWrapupCodeName
        lastQueue {
          id
          name
          duration
        }
        lastSite {
          id
          name
        }
        lastTeam {
          id
          name
        }
        lastEntryPoint {
          id
          name
        }
        previousQueue {
          id
          name
        }
        totalDuration
        csatScore
        blindTransferCount
        conferenceCount
        conferenceDuration
        consultCount
        consultDuration
        holdCount
        holdDuration
        selfserviceCount
        selfserviceDuration
        connectedCount
        connectedDuration
        consultToQueueCount
        consultToQueueDuration
        transferCount
        wrapupDuration
        ringingDuration
        queueDuration
        queueCount
        captureRequested
        isTranscriptionAvailable
        consultToEPCount
        consultToEPDuration
        outdialConsultToEPCount
        outdialConsultToEPDuration
        agentToDnTransferCount
        agentToAgentTransferCount
        callCompletedCount
        sentiment
        autoCsat
        outdialConsultToQueueCount
        outdialConsultCount
        # integerGlobalVariables(name: "string")
        # stringGlobalVariables(name: "string")
        # longGlobalVariables(name: "string")
        # doubleGlobalVariables(name: "string")
        # booleanGlobalVariables(name: "string")
        # intervalStartTime
        # aggregation
      }

      pageInfo {
        endCursor
        hasNextPage
      }
      intervalInfo {
        interval
        timezone
      }
    }
    }
</textarea></details>

1. Uncomment "filter:"
2. Next to "filter:" add <textarea spellcheck="false" cols="70">{ channelType: { equals: telephony } }</textarea>
3. Send the request
4. Open the Docs panel
5. Navigate Query > task > filter > ChannelTypeExpression (do not click channelType as it will not show you the next level of information) > (next to equals) ChannelTypes
   - Note that this is an enum filter type
6. In the Docs panel, click the back button until you get back to TaskFilters
7. Navigate to terminiationType
    - <details><summary>What type of filter is terminationType?</summary>String</details>
8.  Before we can add this filter to our query, we need to create an "and" group.  Add the "and" group like this. <textarea spellcheck="false" cols="70" rows="4" >and: [
        { channelType: { equals: telephony } }
]</textarea>
1.  <details><summary>Below the channelType filter and still inside the and brackets, add a filter for terminationType to equal "normal".</summary> <textarea spellcheck="false" cols="70" rows="1">{ terminationType: { equals: "normal" } }</textarea></details>
2.  Send the request.
    - You should only have records returned which were both from the telephony channelType and had a "normal" terminationType
    - <details><summary>What if you wanted to see all calls which did not terminate normally?</summary> you could change "equals" to "notequals"
        <textarea spellcheck="false" cols="70" rows="1">{ terminationType: { notequals: "normal" } }</textarea>

        OR you could place the filter in a "not" group filter 
        
        <textarea spellcheck="false" cols="70" rows="1">{ not: { terminationType: { equals: "normal" } } }</textarea></details>
3.  Change your filters to return calls which did not have a terminiationType of "normal"
    - What terminationTypes are returned?


### ⚠️ Note that the use of the "not" group filter will be evaluated differently based on placement.

- This filter will evaluate as not channelType email AND not isActive false and will return every record that matches both criteria 

  
    <textarea spellcheck="false" cols="70" rows="6">
    filter: {
        and: [ 
            { not: { channelType: { equals: email } } }
            { not: { isActive: { equals: false } } }
        ]
    }</textarea>

- This filter will evaluate as not channelType email AND not isActive false and return every record that does not match both criteria
  
    <textarea spellcheck="false" cols="70" rows="8">
    filter: {
        not: {
            and: [
                { channelType: { equals: email } }
                { isActive: { equals: false } }
            ]
        }
    }</textarea>


### Click Next to continue to the next lesson
<!-- <textarea spellcheck="false" cols="70" rows="5"></textarea> -->