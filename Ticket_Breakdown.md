# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### create new column in agents table for custom ID database

---

### Ticket 1

---

#### Unknowns:

- can multiple Agents have the same custom ID?
- What data-type is the custom ID?

#### Breakdown

- Create a new column in the database that holds a `custom_id`
- Add restraints, if needed, once product determines criteria for the custom ID
- This is an itterative step, this can be pushed to production without effecting the rest of the code base.

#### Acceptance Criteria

- Another engineer will have to check that the new column appears and has the correct restraints in the pull request.

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

### Ticket 2

---

#### Breakdown

- Create a database insert statement that writes the existing information as well as the new `custom_id`

#### Acceptance Criteria

An engineer can mannually run an insert state ment and the data is entered correctly into the database.

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

### Ticket 3

---

Create a new database query that returns previous information and the new `custom_id` field

### Breakdown

- Write a query that returns all previous information and the new `custom_id field`
- Once data is input into the database (a seeding script to populate a non production database may be usefull) an engineer can test the script manually.

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

### Ticket 4

---

Rewrite the API to accomodate the new field.

### Breakdown

- Refactor and document the API so that a custom_id is now returned via a RESTful or GraphQL interface call from the front end
- Refactor and document the API so that a custom_id is now written to the database.

### Acceptance Criteria

- Acceptance Criteria will be test in a combination of the next several tickets

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

### Ticket 5

---

Create a form field for writing a `custom_id` to the `agents` table in the database.

#### Create a form field for inserting custom ID

- Discuss UX/UI with product as to where the new field input should go.
- Write frontend validation test to cover the criteria from product in Ticket 1
- Create form field.
- Hook form field up to the API.

#### Acceptance Criteria

- When a user inputs a `custom_id` into the correct formfield is written to the databas (can be checked via query from ticket #3)
- If an ill-formatted entry is entered a user should get feedback about the formatting and submitting of form should be disabled.

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

### Ticket 6

---

Rewrite `generateReport` to show the new `custom_id`

#### Unknown

- Where the form field should go in the new report.
- If a `custom_id` is not entered how should this be shown

#### Acceptance Criteria

When a well formatted `custom_id` is added to the database when a report is generated the `custom_id` shows in the correct location. If no `custom_id` is entered do what product desires

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

### Ticket 7

---

Write a script that inserts a `custom_id` into production data in the `agent` table with a null value

#### Time Estimate

_Time estimation (only half days increments):_

Best case 1/2 day, Likely case 1/2 day, Worst Case 1 day

---

## Tickets 2-7 can live in a feature branch with each step having a pull request along the way. With a full code review once all work is done, a push to production can then take place.
