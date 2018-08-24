# battery-task
# mern-stack
Postgres, Express, React/Redux, Node

To run:
1. Git clone
2. in the file server/config/environment/developement change the postgresql uri to local db and seedDb to true
3. Client: cd client, npm i, npm run dev
4. Server: in root directory do npm i, node index.js

Server port: 8000
Client port: 3000

In the app:
The app opens and starts generating temperatures that go and get saved in the postgresql db.
You can select the date and time and filter the temperature graph as per the selected date and time by clicking on the button that says "Get Filtered Temperature Chart".
