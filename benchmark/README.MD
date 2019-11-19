**Vue vs React vs mls_mvP**

The tests were performed as follows:

1- Create a component that renders a list

2- Render an array with 10,000 ex objects ({cod: *****})

3- The files were made using both cdn and cli of their frameworks.

4- The files were hosted on aws amazon.

**Access Links:**

React-Cli:   https://mlsamazons3testepublish.s3.amazonaws.com/reactCli/index.html       
React-Cdn: https://mlsamazons3testepublish.s3.amazonaws.com/react3/index.html

Vue-Cli:    https://mlsamazons3testepublish.s3.amazonaws.com/vueCli/index.html         
Vue-Cdn: https://mlsamazons3testepublish.s3.amazonaws.com/vue/index.html

**The versions used were:**

React-Cli: 16.11.0
React-Cdn:16

Vue-Cli:  @vue/cli: 4.0.5
Vue-Cdn: Vue.js v2.6.10


**Test environment:**

  OS: Linux 5.0 Ubuntu 18.04.3 LTS (Bionic Beaver)
  CPU: (2) x64 Intel(R) Celeron(R) CPU  J1800  @ 2.41GHz       
  Browsers: Chrome: 78.0.3904.87 


**Sites used for benchmarking:**

1- https://gtmetrix.com/

2-  https://www.webpagetest.org/

3- https://www.testedeperformance.com/

**Results:**

1- https://www.webpagetest.org/

|  |Load Time|First Byte|Start Render|First Contentful Paint|Speed Index|Time|Requests|Bytes In|
|--|---------|----------|------------|----------------------|-----------|----|--------|--------|
|React|1.010s|0.245s|2.100s|2.051s|2.100s|1.010s|5|167 KB|
|Vue|1.245s|0.295s|2.100s|2.150s|2.100s|1.245s|2|160 KB|


2-https://app.testedeperformance.com/

|   |Server Response|Total size|Total time|First byte|Requisitions|
|---|---------------|----------|----------|----------|------------|
|React|0.173 s|167 KB|1.043 s|0.221 s|2|
|Vue|0.166 s|160 KB|1.174 s|0.254 s|2|

