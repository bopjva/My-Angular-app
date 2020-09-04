Two-way data binding.
The communication between the html and type script by using ngModel to get react from html and response from type script.
Component creations....
• We can create any new component using command ng g c componentname.
• We should create multiple components to simplifying the app development and also for the performance.
• When we create component it will create html, css, ts and spec.ts files
• Components are used to sending request to service to get backend response
Modules
Each project has module folder, where it imports all the components created by default.
Functions...
• Constructor and ngOnInit are two defaults functions created automatically with the component creation
• These two functions are executed all the time whenever we execute the component
• Custom function we create in component to perform some specific actions according to business requirements and standards
• Functions/methods are the backbone of application and we use most in the code to send or receive data from component<->service<->backend and vice versa

Objects...
• Objects can have multiple variable with assigned values
• Objects are easy way get the multiple information about customers or anything.

Variables
• Variables are used to store the data and also change the value depending on the condition and input.
DataTypes
• We use different data types like null, string, number and Boolean types as data can be available in different formats
Scope of variables
• Variables are used to passing the data in different forms like string, number and Boolean.

Steps to make sending request to backend from web page and get response from backend to from web page

1. When user click on button from web page, it will make a call to component.ts by function which is mentioned in component.html
2. From component.ts, we can make service call using function created in component.ts by calling function which is created in the service
3. We should create service instance in constructor as private variable to make calls to service from component.ts
4. You can pass same number of arguments in service function if you declare any variables there
5. whenever you call service function, thisflows go to service and look for the function to make some actions
6. after came to the service and it will go to the same function mentioned in component.ts and look for the arguments passed or not in that function and also store the data in their arguments which came from input request to send backend
   HTTP handing the all backend calls fro get response by using 4 different method types like Get,Put,Post and Delete

6 We need to create string variable and It should be assigned with url which we got it from backend team to make backend call from service
7 create another response variable and make required http call to capture the data in this created variable
8 We should use return keyword for response variable send response back to component where it came from
9 Once response came back to component.ts by using subscribe, then it will store the data in result variable as it came from the service
10 html will print the same data in the browser by using component.ts function which is mentioned in html button

<!-- ng serve (This is to run UI application) -->
<!-- HTTP Client installed -->

Interview Questions

1. Two way data binding
   This will make two way events, for example if customer make changes in input html page will reflect the changes in component and same if any changes happen in component will reflect in html
   (Note:1 Here we use ngModel to bind the global variable to input field in html page
   Note 2: We should have global variable to two way data binding)
   Ex:

   <!-- <input type="number" name="myId" id="myId" [(ngModel)]="myId" /> -->

2. What is the role of component
   Componet we used to write varibles and functions
3. What are selectors
   Lets say if you want load 2 different components on application home page like header and footer components, we have to keep these header and footer component selectors on main app component html
   ex: we did same in app component.html for header and footer
4. What are modules
   Module is place where to register all components in decalaration and modules in imports
5. String interpolation
   Binding the data any global variable
   One way data binding is string interpolation
   <!-- {{ myId }} -->
   <!-- <button (click)="oneWayDataBinding()">One Way Binding</button> -->

Routing

1. What is single page application
   Single page application is nothing but switching to other pages by not loading/refreshing the pages, using roter-outlet to route the all compoents and come and go from app component.html
2. What is routing
   Navigate to one page to other page
3. Programatic routing
   Prgramatic routing is like moving to other pages by clicking on buttons, links etc.. and also using angular routing logic

     <!-- this.router.navigate(['/employee']); -->

4. How you pass dynamic params to url
   Here we are passing the id value to the end of the url by using below logic to display that id information in table

   <!-- this.router.navigate([`/school/edit/${id}`]); -->

   Ex: we did same for edit student in

5. How to extract data from url params
   Here we are extracting the data form the backend by using http methods and keeps them in the variable which is initialzed here

   <!-- this.id = this.route.snapshot.paramMap.get('id'); -->

6. Lazy Loading
   We implement lazy loading module to the components which we don't want to download all the time when load our application.
   This will helps to reduce the time of loading the main app, increase the performance, control using the internet data  
   ex:
     <!-- {
       path: 'student',
       loadChildren: () =>
         import('./student/student.module').then(m => m.StudentModule)
     } -->
7. Child routing
   Adding component as child to other component
   Ex: localhost4200/parent/child

Forms (Reactive forms)

1. How to add reactive validations
2.

Can we import routes in app module instead of app route module?
Polyfills
what is forRoot?
Component to component intyeraction- 3 Ways

1. @input, @output
2. Behavioural subject(Services)
3. Redux

Router Link is a directive will be used for naviagting the pages without refreshing or reloading everytime
RouterLinkActive and RouterLinkActiveOptions are directives

string params
http://localhost:4200/api/student/getById/CT0014

query params
http://localhost:4200/api/student?name='bhargav'&state='va'&age=27

Use push operator to add new object to array
Use spread operator to add to new variable to object

Adding data into store

1.  dispatch an action
2.  action will call reducer
3.  reducer will update store

Receiving data into component from store

1.  just subscribe store variable in ngOnInIt in the component.
