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
|React-Cli|1.103s|0.229s|2.100s|2.078s|2.100s|1.103s|3|255 KB|
|React-Cdn|7.402s|0.312s|8.500s|8.477s|8.500s|7.402s|6|362 KB|
|Vue-Cli|3.709s|0.246s|3.800s|3.718s|3.800s|3.709s|4|219 KB|
|Vue-Cdn|1.245s|0.295s|2.100s|2.150s|2.100s|1.245s|2|160 KB|


2-https://app.testedeperformance.com/

|   |Server Response|Total size|Total time|First byte|Requisitions|
|---|---------------|----------|----------|----------|------------|
|React-Cli|0.161 s|255 KB|1.147 s|0.235 s|2|
|React-Cdn|0.185 s|362 KB|7.698 s|0.29 s|4|
|Vue-Cli|0.157 s|220 KB|3.52 s|0.227 s|2|
|Vue-Cdn|0.166 s|160 KB|1.174 s|0.254 s|2|

