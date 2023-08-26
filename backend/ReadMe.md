## Backend Docs

* Have to build a server which can perform mathematical operations via API (Get Req).

* Constraints

  ✅ '/' and '/history' endpoint response in HTML<br>
  ✅ Other endpoints response is in JSON<br>
  ✅ Multiple Operators calculation<br>
  ✅ History saved (Even after a server restart)
  
### CALBot (My server)

![](/backend\backend-config.png)

* The Name of my server is "CALBot" 
* Used Express with Bare Bones Scafold
* Tools/Softwares used: VScode, Insomnia(API) and GitHub(version control)
* For input '/' can't be used for expression seperator directly in the URL path, so approached to get the input as a seperate expression.

    **http://localhost:3000/calculate?expression=**

* Here calculate is the function performing the calculation and expression will handle the numbers and operators.
* To save the history even after the server restart, can be done by just having a database connection with this program. But to make more simple i have approached a common method of saving the history in file and whenever the server gets the history request it response with the recent 20 operations from the file. 

### How to run the CalBot

* Follow the below commands

  ```bash
  git clone https://github.com/p21nc3/Kalvium-Task.git
  ```

  ```bash
  cd backend
  ```

  ```bash
  node index.js
  ```
* Open http://localhost:3000

### Available Endpoint ('/')<br>

![available endpoint](/backend/available-endpoint.png)

### History Endpoint ('/history')<br>

![](/backend/history.png)


### Mathematical Operations <br>

![](/backend/cal2.png)

![](/backend/cal3.png)

![](/backend/cal4.png)

![](/backend/cal5.png)

![](/backend/cal6.png)

![](/backend/cal7.png)

![](/backend/cal8.png)

--------------------------------------------------------------
