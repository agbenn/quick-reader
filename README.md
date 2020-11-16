# quick-reader

Currently queries a firebase store of preformatted json data that includes questions

Modify environments.ts with firebase connection info to get it to work

json data structure:

[{"url":"",
"imageURL":"",
"content":"",
"tokenized":"",
"title":"",
"questions":{(questionNumber):{
  "question":"",
  "answer":"",
  "answers":[]
}
  
