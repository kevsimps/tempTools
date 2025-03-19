---
title: "Getting Started"
hide:
    -toc
    -navigation
search:
  exclude: true

---



# Introduction
In this group of labs we will be exploring how to use GraphQL to get data from the Webex Contact Center's search API.

## Pre-requisites
- You will need to have administrator access on the tenant from which you will be accessing data. 
  <!-- (**You cannot use an external or partner account for these labs**) -->
- You will need the ORG ID of the tenant from which you will accessing data.
- You watched the introduction video so that you understand how to navigate the tools in the lab.
- It is recommended to create a new profile in your browser to access the labs
  
    >  [For Firefox](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles){:target="_blank"}
    >
    >  [For Chrome](https://support.google.com/chrome/answer/2364824){:target="_blank"}

- While not required, it is a good idea to use a tenant which has had some recent traffic so that you have data to query

## Lab Objective
- Get your Bearer token set as a global environment variable in Altair.
- Retrieve introspection information from the Search API
- Execute your first query


## Get Authorization
1. Hover over the tools menu and click Authorization
2. You will see a screen popup and ask you for your credentials
3. After providing your credentials you should see a modal popup with your Bearer token formatted as a header.
4. Copy the full text, including the curly braces.
5. Toggle the Guide tab closed by clicking on Guide in the top ribbon or click the flip button to move the Guide to the other side of the screen.
6. Click No environment
7. Click Environments...
8. In the modal, click Global environment in the left pane
9. Replace all of the text in the right pane with the copied text from the authorization modal
10. Click Save

## Retrieve introspection information
1. Copy the URL into Altair replacing `<orgID>` with your Org ID.
   > <textarea spellcheck="false" cols="70">https://api.wxcc-us1.cisco.com/search?orgId=\<orgID\></textarea>
2. Click the Docs button (you may need to toggle or move the guide tab)
3. You should see the word Query in the third pane, click it.
4. Click task and observe the available arguments and fields.

## Your first query
1. Copy the query below into the query pane of Altair.
2. Using the Time Widget, select from "1 week ago" to "Now"

    > <textarea spellcheck="false" cols="70" rows="25" >
  {
  task(
    from: " __ "
    to: " __ "
    timeComparator: createdTime
    aggregations: [{ field: "id", type: count, name: "calls" }]
    aggregationInterval: { interval: DAILY }
  ) {
    tasks {
      intervalStartTime(sort: asc)
      aggregation {
        name
        value
      }
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
    }</textarea>

1. Run the query by clicking the Send Request button (you may need to toggle or move the guide tab) or use the keyboard shortcut ctrl+enter
2. Copy an intervalStartTime value from the response pane
3. Open the time tool and switch to the Lookup tab
4. Paste the value and click Convert
   > <details> <summary>What is that timestamp telling you?</summary>

    > The day of the week
    > </details>
    > <details> <summary>What time zone is the timestamp in?</summary>
    > <details> <summary>Hint: Scroll down in the results to the interval info  </summary>
    > UTC
    > </details>
    > 
    > </details>
 
5. Update the aggregation interval to be in your preferred time zone by adding the timezone field of the aggregationInterval argument. 
    > Example:
    > <textarea spellcheck="false" cols="70">aggregationInterval: { interval: DAILY, timezone:"America/New_York" }</textarea>

    > You can find a list of time zone [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones){:target="_blank"}

6. Note that the daily intervals now begins at 0:00 in the set time zone.

### Click Next to continue to the next lesson

