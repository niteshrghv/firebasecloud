const functions=require("firebase-functions");
const cors=require("cors");
const corsOptions={
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
exports.myFunction = functions.https.onRequest((req, res) => {
  cors(corsOptions)(req, res, () => {
    const data=req.body.num;
    const square=data*data;
    const datatostring=square.toString();
    res.status(200).send(datatostring);
  });
});

exports.usercreate=functions.auth.user().onCreate(user=>{
  console.log(`${user.email} is created`);
  return Promise.resolve();
})

exports.useradd=functions.auth.user().onDelete(user=>{
  console.log(`${user.email} user is Deleted`);
  return Promise.resolve();
})

exports.fruitsadd=functions.firestore.document(`/fruits/{documentId}`).onCreate((snapshot,context)=>
{
  console.log(snapshot.data());
  return Promise.resolve();
})

exports.fruitsremove=functions.firestore.document(`/fruits/{documentId}`).onDelete((snapshot,context)=>
{
  console.log(snapshot.data(),`is deleted`);
  return Promise.resolve();
})

exports.fruitsupdate=functions.firestore.document(`/fruits/{documentId}`).onUpdate((snapshot,context)=>
{
  console.log('before',snapshot.before.data());
  console.log('After',snapshot.after.data());
  return Promise.resolve();
})

exports.scheduledfunctions=functions.pubsub.Message()