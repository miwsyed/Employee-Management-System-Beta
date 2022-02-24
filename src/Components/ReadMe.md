TO ADD EMPLOYEES OR TO ADD A TEAM YOU WILL REQUIRE EMPLOYEE IDS PLEASE FIND THEM IN THE BROWSER LOCAL STORAGE

There are Three arrays inside the initialData file

1. EMPLOYEES : contains all the employee details

2. DEPARTMENTS : Containes all the department information as "DESCRIPTION",
   department id as "ID", employee id of HOD as as "HOD_ID" and teams id as "TEAMS_IDS"
   because each team will have their own ID's so team IDs inside this shows us how many
   and which teams are present under the current department.

3. TEAMS : Each team have their own id as "ID", employee Id of Team lead as "TEAM_LEADER_ID"
   and employee Id of team members as "TEAM_MEMBERS_ID" denoting the team members inside the team.

Now all data everywhere is fetched using these IDS. This is a basic information for now will
probably write more in the next release.
